import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { IoIosCloseCircle } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   // get info from AuthContext
   const {createUser, login} = useContext(AuthContext);
   const [errorMessage, setErrorMessage] = useState("")


  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    createUser(email, password).then((result)=> {
      //signed up successfully
      const user = result.user;
      alert('Account created successfully')
    }).catch((error) => {
      const errorMessage = error.message;
      setErrorMessage("please provide correct credential")
    })
  }

  return (
    <div className="">
      <Link
        to="/"
        className="absolute top-2 right-2 text-red-600 hover:text-red-500"
      >
        <IoIosCloseCircle className="text-4xl text-center" />
      </Link>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  //   required
                  {...register("email")}
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-red-600 hover:text-red-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  //   required
                  {...register("password")}
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                value="Signup"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            </div>
            <p className="mt-6 text-center my-2">
              Already a member?
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="font-semibold leading-6 text-red-600 hover:text-red-500"
              >
                Login Now
              </button>
            </p>
          </form>
        </div>
        {/* social sign in */}
        <div className="text-center space-x-3 mb-5 mt-5">
          <button className="btn btn-circle hover:bg-[#F00] hover:text-white">
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
      {/* modal for login */}
      <Modal />
    </div>
  );
};

export default Signup;
