import imgLogo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar px-3 md:px-6 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost lg:hidden"
          >
            {isOpen ? (
              <RxCross2 className="h-5 w-5" />
            ) : (
              <HiOutlineMenuAlt3 className="h-5 w-5" />
            )}
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline" : ""
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline" : ""
                }
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <img className="h-10" src={imgLogo} alt="" />
          <h1 className="font-bold text-[18px] text-gray-700">HERO.IO</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-indigo-600 underline" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-indigo-600 underline" : ""
              }
              to="/apps"
            >
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-indigo-600 underline" : ""
              }
              to="/installation"
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/ahassh1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 flex items-center gap-2 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-800 transition"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};
export default Navbar;
