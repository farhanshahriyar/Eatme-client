// import React, { useContext, useEffect, useState } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import auth from "../../firebase/firebase.config.js";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const PhoneLogin = () => {
//   const [error, setError] = useState("");
//   const [phone, setPhone] = useState("");
//   const sendOtp = async () => {
//     try {
//       const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//       const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
//       console.log(confirmation);
//     } catch (error) {
//       console.log(error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Phone Number</span>
//                 </label>
//                 <PhoneInput
//                   country={"us"}
//                   value={phone}
//                   onChange={setPhone}
//                   inputStyle={{
//                     width: "100%",
//                     height: "2.5rem",
//                     fontSize: "1rem",
//                     padding: "0.5rem",
//                   }}
//                 />
//               </div>
//               <div id="recaptcha" style={{ marginTop: "10px" }}></div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Verify OTP</span>
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your valid phone number"
//                   className="input input-bordered"
//                 />
//               </div>
//               <div id="recaptcha-container"></div>
//               <div className="form-control mt-6">
//                 <button
//                   className="btn bg-[#f00] text-white hover:text-black"
//                   type="button" // Change to type="button" or handle form submit
//                   onClick={(e) => {
//                     e.preventDefault(); // Prevent form submission/refresh
//                     sendOtp();
//                   }}
//                 >
//                   Send Verification Code
//                 </button>
//               </div>
//               <p className="text-red-900 text-center mt-4">{error}</p>
//               <div className="form-control mt-6">
//                 <button
//                   className="btn bg-[#f00] text-white hover:text-black"
//                   type="submit"
//                 >
//                   Verify Verification Code
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhoneLogin;


// import React, { useState } from 'react';
// import { RecaptchaVerifier, signInWithPhoneNumber, signInWithCredential, PhoneAuthProvider } from 'firebase/auth';
// import auth from '../../firebase/firebase.config';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const PhoneLogin = () => {
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   // Setup reCAPTCHA verifier
//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
//     window.recaptchaVerifier.render();
//   };

//   // Send OTP
//   const sendOtp = async (e) => {
//     e.preventDefault();
//     setupRecaptcha();
//     const phoneNumber = phone;
//     const appVerifier = window.recaptchaVerifier;
//     try {
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//       window.confirmationResult = confirmationResult; // For demonstration; better to use state
//       setConfirmationResult(confirmationResult);
//       console.log('OTP has been sent');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await confirmationResult.confirm(otp);
//       // User signed in successfully.
//       const user = result.user;
//       console.log(user);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <div id="recaptcha-container"></div>
//       <form onSubmit={confirmationResult ? verifyOtp : sendOtp}>
//         {!confirmationResult && (
//           <PhoneInput
//             country={'us'}
//             value={phone}
//             onChange={(phone) => setPhone(phone)}
//           />
//         )}
//         {confirmationResult && (
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//         )}
//         <button type="submit"     className="btn bg-[#f00] text-white hover:text-black">
//           {confirmationResult ? 'Verify OTP' : 'Send OTP'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default PhoneLogin;


import React, { useState, useEffect } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Initialize reCAPTCHA verifier on component mount
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved - allow signInWithPhoneNumber
        }
      }, auth);
      window.recaptchaVerifier.render().catch(error => setError(error.message));
    }
  }, []);

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(confirmation);
      console.log('OTP has been sent');
    } catch (error) {
      console.error('Error during signInWithPhoneNumber', error);
      setError(error.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await confirmationResult.confirm(otp);
      console.log('User is verified', response.user);
      // User is verified and logged in, you can redirect or show success message
    } catch (error) {
      console.error('Error during OTP verification', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      <form onSubmit={confirmationResult ? verifyOtp : sendOtp}>
        {!confirmationResult && (
          <div>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={(phone) => setPhone('+' + phone)}
              containerStyle={{ margin: '10px 0' }}
              inputStyle={{ width: '100%' }}
            />
            <button type="submit" className="btn">
              Send OTP
            </button>
          </div>
        )}
        {confirmationResult && (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input"
              style={{ margin: '10px 0', width: '100%' }}
            />
            <button type="submit" className="btn">
              Verify OTP
            </button>
          </div>
        )}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PhoneLogin;


