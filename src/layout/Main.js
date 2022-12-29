import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import NavHeader from "../Pages/shared/NavHeader";

const Main = () => {
  return (
    <div className="">
      <NavHeader />
      <div className="max-w-6xl bg-teal-50 mx-auto min-h-screen my-2">
        <div className="p-2 mx-5">
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
