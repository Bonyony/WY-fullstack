import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Chat Logs</Link>
      </li>
      <li>
        <Link>Buy</Link>
      </li>
      <li>
        <Link>Aliens</Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <div>
        <div className="md:hidden">Small Menu</div>
        <div className="hidden md:block">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
