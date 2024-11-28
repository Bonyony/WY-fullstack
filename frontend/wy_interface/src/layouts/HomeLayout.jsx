import React from "react";
import { Footer, Marquee, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="w-auto bg-white h-14 overflow-hidden flex flex-row justify-center">
          {/* <div className="h-14 w-24  bg-black"></div>
          <div className="h-14 w-20  bg-gray-400"></div>
          <div className="h-14 w-20  bg-red-400"></div>
          <div className="h-14 w-24  bg-black"></div> */}
        </div>
      </header>
      <main>
        <Outlet />
        {/* maybe I'll remove the marquee Idk */}
        <Marquee />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
