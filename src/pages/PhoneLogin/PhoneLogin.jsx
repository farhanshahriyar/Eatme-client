import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import  auth  from "../../firebase/firebase.config.js";

const PhoneLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { phoneLogin } = useContext(AuthContext);

  // Initialize reCAPTCHA verifier
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }, []);

  const onSubmit = async (data) => {
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await phoneLogin(data.phoneNumber, appVerifier);
      // You will need to prompt the user to enter the code they received on their phone
      // confirmationResult.confirm(code) to complete the phone authentication
    } catch (error) {
      console.error("Error during phone sign-in", error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  {...register("phoneNumber", { required: true })}
                  type="tel"
                  placeholder="Enter your valid phone number"
                  className="input input-bordered"
                />
                {errors.phoneNumber && <span>This field is required</span>}
              </div>
              <div id="recaptcha-container"></div>
              <div className="form-control mt-6">
                <button className="btn bg-[#f00] text-white hover:text-black" type="submit">Send Verification Code</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLogin;
