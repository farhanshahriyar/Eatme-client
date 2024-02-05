import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      // testing data from the form
      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        updateUserProfile(name, photoURL).then(()=>{
            alert("Profile updated successfully")
        }).catch((error)=>{
            alert("Error: "+error.message)
        })
      };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="card-title">Update Profile</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}  
              type="text"
              placeholder="enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              {...register("photoURL")}
              type="text"
              placeholder="photoURL link"
              className="input input-bordered"
              required
            />

            {/* NB: will be add uploading image later here */}
            {/* <input type="file" className="file-input w-full max-w-xs" /> */}
            <label className="label">
            <p className="label-text-alt link link-hover">getting issue to upload photo? </p>
              <a href="#" className="label-text-alt link link-hover text-red-600 underline">
                download tutorial
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#f00] text-white hover:bg-black hover:text-white">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
