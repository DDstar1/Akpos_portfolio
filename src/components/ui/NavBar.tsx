import React, { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaImages } from "react-icons/fa";

const NavBar = ({ setPage }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white z-50 shadow-md sticky top-0">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4 relative">
        {/* Logo and Menu Toggle */}
        <a
          href="#"
          className="flex items-center text-gray-200 hover:text-white"
          onClick={() => setPage("Landing")}
        >
          <FaHome className="h-6 w-6 mr-2" />
          <span className="font-bold">Home</span>
        </a>
        <button
          className="text-gray-300 hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavItem
            icon={FaUser}
            text="About"
            onClick={() => setPage("About")}
          />
          <NavItem
            icon={FaFileAlt}
            text="Resume"
            onClick={() => setPage("Resume")}
          />
          <NavItem
            icon={FaImages}
            text="Gallery"
            onClick={() => setPage("Gallery")}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:max-h-0 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        } bg-gray-700 transition-all duration-500 -top-30 absolute w-full overflow-hidden`}
      >
        <NavItem icon={FaUser} text="About" onClick={() => setPage("About")} />
        <NavItem
          icon={FaFileAlt}
          text="Resume"
          onClick={() => setPage("Resume")}
        />
        <NavItem
          icon={FaImages}
          text="Gallery"
          onClick={() => setPage("Gallery")}
        />
      </div>
    </nav>
  );
};

const NavItem = ({ icon: Icon, text, onClick }: any) => (
  <a
    href="#"
    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
    onClick={onClick}
  >
    <div className="flex items-center">
      <Icon className="h-5 w-5 mr-2" />
      <span>{text}</span>
    </div>
  </a>
);

export default NavBar;
