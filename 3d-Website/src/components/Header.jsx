import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const Header = () => {
  const link = "px-3 py-2 rounded hover:bg-white/10";
  const active = "bg-white/10";
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <div className="font-bold tracking-wide" >Portfolio.</div>
        <div className="lg:flex hidden gap-2 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Contact
          </NavLink>
        </div>
        <button
          className="lg:hidden flex justify-center items-center mr-4 pb-1 cursor-pointer rounded-full border-2 border-gray-300 h-8 w-8"
          onClick={toggleMenu}
        >
          {toggle ? <IoMdClose /> : <RiMenu5Fill />}
        </button>
      </div>
      {toggle && (
        <div className="lg:hidden flex flex-col gap-2 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
            onClick={toggleMenu}
          >
            {" "}
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
