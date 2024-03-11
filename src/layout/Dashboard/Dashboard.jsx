import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaQuestion,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import logoImg from "../../../public/logo.png";

const Dashboard = () => {
  const isAdmin = false;
  const sharedLinks = (
    <>
      <li className="mt-3">
        <Link to="/">
          <MdDashboard />
          Home
        </Link>
      </li>
      <li className="mt-3">
        <Link to="/menu">
          <FaShoppingBag/>
          Menu
        </Link>
      </li>
      <li className="mt-3">
        <Link to="/">
          <FaLocationArrow />
          Order Tracking
        </Link>
      </li>
      <li className="mt-3">
        <Link to="/">
          <FaQuestion/>
          Customer Support
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-red-600 hover:bg-black drawer-button lg:hidden"
            >
              <MdDashboard className=" text-white" />
            </label>
            <button className="btn rounded-full px-6 flex item-center gap-2 bg-[#F00] text-[#FFFFFF] hover:bg-[#FF8938] hover:text-white sm:hidden">
              <FaRegUser />
              Logout
            </button>
          </div>
          {/* outlet */}
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <img src={logoImg} alt="logo" className="w-20 h-20" />
                <div className="badge badge-neutral">Verified Admin</div>
              </Link>
            </li>
            <hr></hr>
            <div className="text-xl font-light">
              {
                isAdmin ? <>
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
                <Link to="/dashboard/users" className="mb-3">
                  <FaUser />
                  Users
                </Link>
              </li>
                </> 
                :
                <>
                <li className="mt-3">
                <Link to="/dashboard">
                  <MdDashboard />
                  User Dashboard
                </Link>
              </li>
                </>
              }

              <hr></hr>

              {/* Shared */}
              <div className="text-xl font-light">
              {
                sharedLinks
              }
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
