import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import SpecialDishes from "../../components/SpecialDishes/SpecialDishes";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
    </div>
  );
};

export default Home;
