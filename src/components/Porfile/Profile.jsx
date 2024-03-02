/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Profile = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        // alert("Logged out successfully");
        Swal.fire({
          title: "Are you sure?",
          text: "You want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            toast.success("Logged out successfully");
          }
        });
      })
      .catch((error) => {
        toast.error("Failed to logout");
      });
  };
  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn  btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img alt={user.displayName} src={user.photoURL} />
              ) : (
                <img
                  src="https://picsum.photos/id/1005/200/200"
                  alt="profile"
                />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>{user.displayName || "No Name"}</a>
            </li>
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
