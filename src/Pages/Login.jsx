import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-base-400 flex gap-10 items-center justify-center">
      <div className="w-[25%] bg-base-100 p-4 shadow-md">
        <h1 className="font-poppins text-center font-bold text-4xl">Login</h1>
        <form action="">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="input"
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
            <p className="text-sm font-inter">
              Don't have an account? Please{" "}
              <Link to={"/register"} className="text-primary underline">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
      <div className="w-[25%] space-y-1 shadow-md p-5 text-center">
        <div className="border-b-2 border-gray-500"></div>
        <h1>or</h1>
        <p className="font-poppins text-2xl font-bold">Login With</p>
        <button className="btn w-full btn-primary mt-4">
          <FaGoogle></FaGoogle> Google
        </button>
      </div>
    </div>
  );
};

export default Login;