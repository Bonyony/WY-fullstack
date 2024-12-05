import React from "react";
import { Link } from "react-router-dom";
import { Marquee } from "../components";

const Landing = () => {
  return (
    <>
      <div className="lines flex flex-col justify-center align-middle w-screen h-screen items-center">
        <h1 className="orbitron m-8 text-4xl font-bold text-center ">
          Hyrax <br /> Corporation
        </h1>
        <div className="flex flex-col font-light">
          {/* This will be removed once User Auth is introduced
              so that the user is forced to log in to continue */}
          <Link
            to="/home/dashboard"
            className="p-1 m-2 min-w-[100px] text-center btn btn-primary uppercase"
          >
            Enter
          </Link>
          {/* Real links below */}
          <Link
            to="/login"
            className="p-1 m-2 min-w-[100px] text-center btn btn-primary uppercase"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="p-1 m-2 min-w-[100px] text-center btn btn-primary uppercase"
          >
            Sign Up
          </Link>
        </div>
        <Marquee />
      </div>
    </>
  );
};

export default Landing;
