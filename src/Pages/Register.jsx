import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Register = () => {
  const [show, setShow] = useState(false);
  const { user, createUser, signIn } = useContext(AuthContext);
  
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    // console.log({ name, email, password, photoURL });
    
    createUser(email, password)
      .then(result => {
        console.log('after register', result.user);
        updateProfile(auth.currentUser, { displayName: name, photoURL })
          .then(result => {
            alert('success');

            form.reset();
          })
          .catch(e => {
            console.log(e.message);
        })
      })
      .catch(error => {
        console.log(error.message);
    })
    
  }
  
  return (
    <div className="min-h-screen bg-base-400 flex gap-10 items-center justify-center">
      <div className="w-[25%] bg-base-100 p-4 shadow-md">
        <h1 className="font-poppins text-center font-bold text-4xl">Register</h1>
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
            <input type="email" name='email' className="input" placeholder="Email" />
            {/* photoURL */}
            <label className="label">PhotoURL</label>
            <input type="text" name='photo' className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="input"
                name='password'
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
            <p className="text-sm font-inter">
              Already have an account? Please{" "}
              <Link to={"/login"} className="text-primary underline">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
      <div className="w-[25%] space-y-1 shadow-md p-5 text-center">
        <div className="border-b-2 border-gray-500"></div>
        <h1>or</h1>
        <p className="font-poppins text-2xl font-bold">Create Account With</p>
        <button className="btn w-full btn-primary mt-4">
          <FaGoogle></FaGoogle> Google
        </button>
      </div>
    </div>
  );
};

export default Register;