import React, { useEffect, useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  // loading menu data
  useEffect(() => {
    // fetch data from json file
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
        // console.log(data);
      } catch (error) {
        console.log(error, "error feteching data");
      }
    };
    // call the function
    fetchData();
  }, []);

  // filtering menu based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

        setFilteredItems
  };

  return (
    <div className="">
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] p-4">
        <div className="py-48 flex flex-col items-center justify-center space-y-7">
          {/* Heading */}
          <h2 className="text-center md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            For the Love
            <br /> Of Delicious <span className="text-[#FF8938]">Food</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#4A4A4A] text-xl text-center">
            Come with family and feel the joy of eating together with a variety
            of delicious food.
          </p>

          {/* Button */}
          <button className="btn px-8 py-3 font-semibold text-white bg-[#F00] hover:bg-[#FF8938] flex items-center gap-2 text-base">
            Order Now <FiArrowDownRight />
          </button>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container"></div>
    </div>
  );
};

export default Menu;
