// NavBar.js
import React from "react";
import { FaHome } from "react-icons/fa";

const NavBar = ({ setPage }: any) => {
  return (
    <div className="navbar py-1 bg-base-100 z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => setPage("Landing")}>
          <FaHome size={30} />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => setPage("About")}>About</a>
          </li>
          <li>
            <a onClick={() => setPage("Resume")}>Resume</a>
          </li>
          <li>
            <a onClick={() => setPage("Gallery")}>Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
