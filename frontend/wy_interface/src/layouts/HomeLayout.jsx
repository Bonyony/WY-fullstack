import React, { useContext } from "react";
import { Footer, Marquee, Navbar } from "../components";
import { Outlet, Navigate } from "react-router-dom";
import { ProfileContext } from "../App";

const HomeLayout = () => {
  const { profile } = useContext(ProfileContext);

  if (profile == null) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        {/* maybe I'll remove the marquee Idk */}
        {/* <Marquee /> */}
      </main>
      <div className="divider"></div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
