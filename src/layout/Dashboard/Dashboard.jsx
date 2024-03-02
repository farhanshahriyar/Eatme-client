import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaEdit, FaPlusCircle, FaRegUser, FaShoppingBag, FaUser } from "react-icons/fa";
import logoImg from "../../../public/logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-center sm:justify-center my-2">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-red-600 hover:bg-black drawer-button lg:hidden"
          >
            <MdDashboard className=" text-white"/>
          </label>
          <button
              className="btn rounded-full px-6 flex item-center gap-2 bg-[#F00] text-[#FFFFFF] hover:bg-[#FF8938] hover:text-white"
            >
              <FaRegUser />
              Logout
            </button>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <img src={logoImg} alt="logo" className="w-20 h-20" />
                <div className="badge badge-neutral">Verified Admin</div>
              </Link>
            </li>
            <hr></hr>
            <div className="text-xl font-medium">
              <li className="mt-3">
                <Link to="/dashboard">
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <FaShoppingBag />
                  Manage Booking
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <FaPlusCircle />
                  Add Menu
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <FaEdit />
                  Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <FaUser />
                  Users
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
