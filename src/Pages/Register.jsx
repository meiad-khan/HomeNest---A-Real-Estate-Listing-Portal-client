import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const {createUser, googleLogin, error, setError } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regEx.test(password)) {
      setError(
        "Password should be at least 6 character and having 1 uppercase and 1 lowercase letter",
      );
      return;
    }
    // console.log({ name, email, password, photoURL });
    setError("");
    createUser(email, password)
      .then(() => {
        // console.log("after register", result.user);
        updateProfile(auth.currentUser, { displayName: name, photoURL })
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration Successful",
              showConfirmButton: false,
              timer: 1500,
            });

            form.reset();

            setTimeout(() => {
              navigate("/");
              window.location.reload();
              window.location.reload();
            }, 1600); // slightly more than Swal timer
          })

          .catch(() => {
            toast.error("Error with name or photo");
          });
      })
      .catch(() => {
        toast.error("Registration failed");
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Succesful",
          showConfirmButton: false,
          timer: 1500,
        });
        //  toast.success("Registration Successful");
        // console.log(data.user);
        navigate("/");
        // navigate(0);
      })
      .catch(() => {
        toast.error("Login Failed");
      });
  };

  return (
    <div className="lg:min-h-screen bg-base-400 flex flex-col md:flex-row gap-10 items-center justify-center my-10 md:my-38 lg:my-0">
      <div className="w-[80%] lg:w-[25%] bg-base-100 p-4 shadow-md">
        <h1 className="font-poppins text-center font-bold text-4xl">
          Register
        </h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* photoURL */}
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="photoURL"
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="input"
                name="password"
                placeholder="Password"
              />
              <a
                onClick={() => setShow(!show)}
                className="absolute text-xl right-5 top-2.5"
              >
                {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </a>
            </div>
            <button className="btn btn-primary mt-4">Regiater</button>
            {error && (
              <p className="text-red-500 font-inter text-sm">{error}</p>
            )}
            <p className="text-sm font-inter">
              Already have an account? Please{" "}
              <Link to={"/login"} className="text-primary underline">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
      <div className="w-[80%] lg:w-[25%] space-y-1 shadow-md p-5 text-center">
        <div className="border-b-2 border-gray-500"></div>
        <h1>or</h1>
        <p className="font-poppins text-2xl font-bold">Create Account With</p>
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full btn-primary mt-4"
        >
          <FaGoogle></FaGoogle> Google
        </button>
      </div>
    </div>
  );
};

export default Register;
