import React from "react";
import { Footer, Marquee, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar />
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
