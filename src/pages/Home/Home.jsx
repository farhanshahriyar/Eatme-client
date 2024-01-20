import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import SpecialDishes from "../../components/SpecialDishes/SpecialDishes";
import Testimonial from "../../components/Testimonial/Testimonial";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonial/>
      <Services/>
    </div>
  );
};

export default Home;
