import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="flex flex-row gap-5 orbitron">
        <li className=" hover:text-yellow-200">
          <NavLink to="/home/chatselect">Chat Logs</NavLink>
        </li>
        <li className="hover:text-yellow-200">
          <NavLink to="/home/buy">Buy</NavLink>
        </li>
        <li className="hover:text-yellow-200">
          <NavLink to="/home/alien">Aliens</NavLink>
        </li>
        <li className="hover:text-yellow-200">
          <NavLink to="/home/profile">Profile</NavLink>
        </li>
      </ul>
    </>
  );
};

const SmallMenu = () => {
  return (
    <ul className="orbitron flex flex-col gap-2 mt-2 text-right mr-2">
      <li className="hover:text-yellow-200">
        <NavLink to="/home/chatselect">Chat Logs</NavLink>
      </li>
      <li className="hover:text-yellow-200">
        <NavLink to="/home/buy">Buy</NavLink>
      </li>
      <li className="hover:text-yellow-200">
        <NavLink to="/home/alien">Aliens</NavLink>
      </li>
      <li className="hover:text-yellow-200">
        <NavLink to="/home/profile">Profile</NavLink>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    // give this a "fixed" class for some different options || removed 11/28
    <div className="z-20 mix-blend-difference top-0 w-full">
      <div className="flex flex-row justify-between  py-4 px-6">
        <NavLink to="/">
          <h1 className="orbitron text-balance text-start hover:text-yellow-200">
            Hyrax Corporation
          </h1>
        </NavLink>
        <div className="md:hidden">
          <button
            className=" rounded-md outline-none flex items-end"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <div className="flex flex-col items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 bg-opacity-55 transition-all duration-100 "
                  viewBox="0 0 20 20"
                  // fill={"currentColor"}
                  stroke="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                <SmallMenu />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8  bg-opacity-55  transition-all duration-100 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <nav className="hidden md:block">
          <Menu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
