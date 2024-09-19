import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="flex flex-row justify-between py-4 px-6">
        <NavLink to="/">
          <h1 className="orbitron">Weyland-Yutani Corporation</h1>
        </NavLink>
        <ul className="flex flex-row gap-5 orbitron">
          <li className="hover:text-yellow-200">
            <NavLink to="/home/chat">Chat Logs</NavLink>
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
      </div>
    </>
  );
};

const SmallMenu = () => {
  return (
    <div className="flex flex-row justify-between py-4 px-6">
      <NavLink to="/">
        <h1 className="orbitron text-balance text-start">
          Weyland-Yutani Corporation
        </h1>
      </NavLink>
      <ul className="orbitron">
        <li className="hover:text-yellow-200">
          <NavLink to="/home/chat">Chat Logs</NavLink>
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
    </div>
  );
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <div>
        <div className="hidden md:block">
          <Menu />
        </div>

        <div className="md:hidden">
          <SmallMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
