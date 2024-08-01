import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { BsPentagonFill } from "react-icons/bs";

import logo from "/logo.svg";

const sharedLinks = (
  <>
    <li className=" mt-3">
      <Link to="/">
        {" "}
        <MdDashboard />
        Home
      </Link>
    </li>
    <li>
        <Link to="/Menu">
        <FaCartShopping/> Menu
        </Link>
    </li>
    <li>
        <Link to="/Menu">
        <FaLocationArrow/> Orders Tracking
        </Link>
    </li>
    <li>
        <Link to="/Menu">
        <FaQuestionCircle/> Customers Support
        </Link>
    </li>
  </>
);

import {
  FaEdit,
  FaLocationArrow,
  FaPaw,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping, FaCow } from "react-icons/fa6";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer sm:drawer-open bg-prigmayBG">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-s my-2 sm:bg-white">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary bg-green drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button className="btn rounded-full px-6 bg-green flex items-center gap-2 text-white sm:hidden">
              <FaRegUser />
              Logout
            </button>
          </div>
          <div className="mt-5 md:mt-2 mx-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  text-gray-600 min-h-full w-80 p-4 bg-gray-200">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex jsutify-start mb-3">
                <a className="btn btn-ghost  font-bold text-green">
                  DAIRY TECH
                  <img src={logo} alt="" />
                </a>
                <span className="badge badge-primary">Admin</span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to="/dashboard">
                {" "}
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                {" "}
                <FaPlusCircle />
                Add items
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                {" "}
                <FaEdit />
                Manage Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <FaUser /> All Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FaPaw />
                Cattle
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                {" "}
                <FaCow />
                Cattle Health 
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/dashboard">
                {" "}
                <BsPentagonFill />
                Breeds
              </Link>
            </li>
            {/* shared links */}
            {
                sharedLinks
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
