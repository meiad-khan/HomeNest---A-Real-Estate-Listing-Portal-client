import React from 'react';
import { MdRealEstateAgent } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = 
    <>
      <li> <NavLink to= '/'>Home</NavLink> </li>
      <li> <NavLink to= '/all-properties'>All Properties</NavLink> </li>
      <li> <NavLink to= '/add-properties'>Add Properties</NavLink> </li>
      <li> <NavLink to= '/my-properties'>My Properties</NavLink> </li>
      <li> <NavLink to= '/my-ratings'>My Ratings</NavLink> </li>
    </>

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-poppins">
            <MdRealEstateAgent />
            houzez
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-inter text-[16px] font-semibold text-gray-700 menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-2.5">
          <Link
            to={"/login"}
            className="btn font-inter btn-primary hover:scale-105"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="btn font-poppins btn-primary hover:scale-105"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;