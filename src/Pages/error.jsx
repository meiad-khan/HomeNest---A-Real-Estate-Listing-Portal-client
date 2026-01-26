import React from "react";
import errorImg from "../assets//error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#D2D2D250] p-12 flex flex-col items-center justify-center">
      <div>
        <img src={errorImg} alt="" />
      </div>
      <h2 className="text-[48px] font-semibold">Oops, page not found!</h2>
      <p className="text-[20px] text-[#627382] mb-4">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-linear-to-t from-sky-500 to-indigo-500 text-white p-3 cursor-pointer rounded-md"
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
