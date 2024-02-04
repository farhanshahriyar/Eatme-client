import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // get info from AuthContext
  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  // redirect to the home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

  // login with email and password
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("login successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Please provide correct credential!");
      });
  };

  // login with google
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action mt-0">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg">Please Login First!</h3>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  // defaultValue="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  // required
                  {...register("email")}
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  // required
                  {...register("password")}
                />
                <label className="label mt-1">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-base"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* error message */}
              {errorMessage ? (
                <p className="text-red-500 text-sm italic">{errorMessage}</p>
              ) : (
                ""
              )}

              <div className="form-control mt-6">
                <button
                  type="submit"
                  value="login"
                  className="btn bg-[#f00] text-white hover:text-black"
                >
                  Login
                </button>
              </div>

              <p className="mt-6 text-center my-2">
                {" "}
                Dont have an account?{" "}
                <Link
                  to="/signup"
                  className="link link-hover text-base text-red-700"
                >
                  Signup
                </Link>
              </p>

              <button
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                <IoIosCloseCircle className="text-4xl text-center" />
              </button>
            </form>
          </div>
          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button
              className="btn btn-circle hover:bg-[#F00] hover:text-white"
              onClick={handleLogin}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-[#F00] hover:text-white">
              <FaFacebook />
            </button>
            <button className="btn btn-circle hover:bg-[#F00] hover:text-white">
              <FaPhone />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
