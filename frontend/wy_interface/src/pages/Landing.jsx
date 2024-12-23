import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Marquee } from "../components";
import { ProfileContext } from "../App";
import { motion } from "framer-motion";

const Landing = () => {
  const { profile } = useContext(ProfileContext);

  console.log(profile);

  return (
    <>
      <div className="lines flex flex-col justify-center align-middle w-screen h-screen items-center z-40">
        <h1 className="orbitron m-8 text-4xl font-bold text-center ">
          Hyrax <br /> Corporation
        </h1>
        <div className="flex flex-col font-light">
          {/* This will be removed once User Auth is introduced
              so that the user is forced to log in to continue */}
          <Link
            to="/home/dashboard"
            className={
              "p-1 m-2 min-w-[100px] text-center btn uppercase " +
              (profile == null ? "btn-disabled" : "btn-primary")
            }
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
