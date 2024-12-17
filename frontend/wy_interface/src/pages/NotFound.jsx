import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="h-screen w-screen px-5 text-warning flex flex-col items-center justify-center align-middle uppercase tracking-wider">
        <h1 className="orbitron text-5xl">Error code: 404</h1>
        <p className="text-lg">
          Systems malfunction. Please redirect to home base.
        </p>
        <Link
          to="/"
          className="btn btn-warning p-2 mt-5 rounded-sm hover:rounded-lg transition-all duration-500"
        >
          Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
