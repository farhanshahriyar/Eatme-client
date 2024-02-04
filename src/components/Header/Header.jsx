import React, { useContext, useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../contexts/AuthProvider";
import Profile from "../Porfile/Profile";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  // handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li className="hover:text-green-800">
        <a href="/">Home</a>
      </li>
      <li className="hover:text-green-800">
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
            <li>
              <a>Coffees</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="hover:text-green-800">
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="hover:text-green-800">
        <a>Orders</a>
      </li>
      <li className="hover:text-green-800">
        <a href="/about">About Us</a>
      </li>
      <li className="hover:text-green-800">
        <a href="/contact">Contact</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-24 -${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            Logo.
            {/* <img src="https://picsum.photos/id/1005/200/200" alt="logo" className="w-8 h-8 rounded-full inline-block ml-2" /> */}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* search */}
          <button className="btn btn-ghost btn-circle mr-3 hidden lg:flex items-center justify-center">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* cart items */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3  hidden lg:flex items-center justify-center"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>
          {/* user condition btn */}

          {user ? (
            <Profile user={user}/>
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn rounded-full px-6 flex item-center gap-2 bg-[#F00] text-[#FFFFFF] hover:bg-[#FF8938] hover:text-white"
            >
              <FaRegUser />
              Login
            </button>
          )}

          {/* modal for login */}
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Header;
