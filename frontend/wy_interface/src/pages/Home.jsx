import React from "react";
import { Navbar } from "../components";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <Navbar />
        <div>
          <h1>Welcome</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
