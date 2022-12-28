import React from "react";
import { Link } from "react-router-dom";
import useAuthProvider from "../../hooks/useAuthProvider";

const NavHeader = () => {
  const { user, logOut } = useAuthProvider();
  const handleLogOut = () =>{
    logOut();
  }
  const navItems = (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to="/media">Media</Link>
        <Link to="">Messages</Link>
        <Link to="">About</Link>
        {!user?.uid ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <Link onClick={handleLogOut}>Logout</Link>
        )}
      </li>
    </ul>
  );
  return (
    <div className="">
      <div className="navbar bg-blue-600 rounded-b-lg text-white">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Social People
          </Link>
        </div>
        <div className="flex-none">{navItems}</div>
      </div>
    </div>
  );
};

export default NavHeader;
