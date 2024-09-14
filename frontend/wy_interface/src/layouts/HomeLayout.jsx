import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
