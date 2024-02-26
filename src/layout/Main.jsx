import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../App.css";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Toaster} from 'react-hot-toast'

const Main = () => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/cart') || location.pathname.includes('*');

  return (
    <div>
      {
        loading ? <LoadingSpinner/> :
      <div>
        <div className="min-h-screen">
        <Toaster/>
        <Header />
          <Outlet />
        </div>
        {!noHeaderFooter && <Footer/>}
      </div>
      }
    </div>
  );
};

export default Main;
