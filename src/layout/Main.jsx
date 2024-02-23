import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../App.css";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Toaster} from 'react-hot-toast'

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {
        loading ? <LoadingSpinner/> :
      <div>
        <Toaster/>
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
      }
    </div>
  );
};

export default Main;
