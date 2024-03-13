import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Testing data from the form
  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile({ name, photoURL }).then(() => {
      // show success message to the user using toast notification
      Swal.fire({
        title: "Profile updated successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      // load the page
    window.location.reload();
    });
  };

  // // Testing data from the form
  // const onSubmit = (data) => {
  //     const name = data.name;
  //     const photoURL = data.photoURL;
  //     const email = user.email; // Assuming the user object contains an email field

  //     updateUserProfile({ name, photoURL }).then(() => {
  //         // pass data to database and show success message to the user using toast notification
  //         axiosPublic.put("/updateProfile", { email, name, photoURL }).then((response) => {
  //             toast.success(response.data.message);
  //         });
  //     });
  // };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="card-title">Update Profile</h2>
          {/* Conditionally render the name field */}
          {user && !user.name && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
          )}
          {/* Conditionally render the photoURL field */}
          {user && !user.photoURL && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Photo</span>
              </label>
              <input
                {...register("photoURL")}
                type="text"
                placeholder="PhotoURL link"
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Getting issue to upload photo?
                </p>
                <a
                  href="#"
                  className="label-text-alt link link-hover text-red-600 underline"
                >
                  Download tutorial
                </a>
              </label>
            </div>
          )}
          <div className="form-control mt-6">
            <button className="btn bg-[#f00] text-white hover:bg-black hover:text-white">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
