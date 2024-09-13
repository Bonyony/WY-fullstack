import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className=" flex flex-col justify-center align-middle w-screen h-screen items-center">
        <h1 className="orbitron m-8 text-4xl font-bold text-center">
          Weyland-Yutani <br /> Corporation
        </h1>
        <div className="flex flex-col font-light">
          {/* This will be removed once User Auth is introduced
              so that the user is forced to log in to continue */}
          <Link
            to="/home"
            className="p-1 m-2 min-w-[100px] text-center bg-emerald-700 hover:bg-emerald-800 uppercase"
          >
            Enter
          </Link>
          <Link
            to="/login"
            className="p-1 m-2 min-w-[100px] text-center bg-emerald-700 hover:bg-emerald-800 uppercase"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="p-1 m-2 min-w-[100px] text-center bg-emerald-700 hover:bg-emerald-800 uppercase"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
