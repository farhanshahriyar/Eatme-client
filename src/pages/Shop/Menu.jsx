import React, { useEffect, useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Cards from "../../components/SpecialDishes/SpecialDishesCard/Cards";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
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

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  // show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  };

  // sorting menu based on price
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // logic for sorting
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
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
      <div className="max-w-screen-2xl container mx-auto">
        {/* filtering and sorting */}
        <div>
         {/* all category btns */}
         <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-lg ">
           <button onClick={showAll}
           className={selectedCategory === "all" ? "active" : ""}
           >All</button>
           <button onClick={()=> filterItems("salad")}
           className={selectedCategory === "salad" ? "active" : ""}
           >Salad</button>
           <button onClick={()=> filterItems("pizza")}
            className={selectedCategory === "pizza" ? "active" : ""}
           >Pizza</button>
           <button onClick={()=> filterItems("soup")}
           className={selectedCategory === "soup" ? "active" : ""}
           >Soup</button>
           <button onClick={()=> filterItems("dessert")}
           className={selectedCategory === "dessert" ? "active" : ""}
           >Desserts</button>
           <button onClick={()=> filterItems("drinks")}
            className={selectedCategory === "drinks" ? "active" : ""}
           >Drinks</button>
         </div>

        </div>

        {/* products card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {
            filteredItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;
