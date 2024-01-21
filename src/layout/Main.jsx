import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../App.css";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen"><Outlet /></div>
      <Footer />
    </div>
  );
};

export default Main;
