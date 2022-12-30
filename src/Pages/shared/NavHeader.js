import React from "react";
import { Link } from "react-router-dom";
import useAuthProvider from "../../hooks/useAuthProvider";

const NavHeader = () => {
  const { user, logOut } = useAuthProvider();
  const handleLogOut = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <Link to="/media">Media</Link>
        <Link to="">Messages</Link>
        <Link to="/about">About</Link>
        {!user?.uid ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <Link onClick={handleLogOut}>Logout</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="">
      <div
        className="navbar bg-sky-400 rounded-b-lg text-white
      shadow-lg shadow-sky-200"
      >
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Social People
          </Link>
        </div>
        <div className="">
          <ul ul className="menu hidden md:menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow right-1 bg-base-100 rounded-box  text-black"
          >
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
