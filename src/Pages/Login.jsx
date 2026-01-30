import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const { error, setError, googleLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        toast.success("Login with google successful");
        // console.log(data.user);
        navigate(`${location.state ? location.state : "/"}`);
        // navigate(0);
      })
      .catch(() => {
        toast.error("Login with Google Fail");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    setError("");
    signIn(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Succesful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        // console.log('after login', result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        setError("Incorrect email or password");
      });
  };

  return (
    <div className="lg:min-h-screen bg-base-400 flex flex-col md:flex-row gap-10 items-center justify-center my-15 md:my-37 lg:my-0">
      <div className="w-[80%] lg:w-[25%] bg-base-100 p-4 shadow-md">
        <h1 className="font-poppins text-center font-bold text-4xl">Login</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
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
            <button className="btn btn-primary mt-4">Login</button>
            {error && (
              <p className="text-red-500 font-inter text-sm">{error}</p>
            )}
            <p className="text-sm font-inter">
              Don't have an account? Please{" "}
              <Link to={"/register"} className="text-primary underline">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
      <div className="w-[80%] lg:w-[25%] space-y-1 shadow-md p-5 text-center">
        <div className="border-b-2 border-gray-500"></div>
        <h1>or</h1>
        <p className="font-poppins text-2xl font-bold">Login With</p>
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

export default Login;
