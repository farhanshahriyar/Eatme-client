import React, { useEffect, useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Cards from "../../components/SpecialDishes/SpecialDishesCard/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  // making pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  // loading menu data
  useEffect(() => {
    // fetch data from json file
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
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
    setCurrentPage(1); // reset pagination
  };

  // show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1); // reset pagination
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
    setCurrentPage(1); // reset pagination
  };

   // logic for pagination
   const indexOfLastItem = currentPage * itemPerPage;
   const indexOfFirstItem = indexOfLastItem - itemPerPage;
   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 

  return (
    <div className="#">
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
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center mb-9 ">
          {/* all category btns */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-lg">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soup
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          {/* sorting base filtering */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            {/* sorting options */}
            <select name="sort" id="sort" onChange={(e)=> handleSortChange(e.target.value)} value={sortOption} className="bg-black text-white px-2 py-1 rounded-sm" >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* products card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 p-4">
          {
          currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>

      </div>
        {/* pagination */}
        <div className="flex justify-center my-8">
           {
              Array.from({length: Math.ceil(filteredItems.length / itemPerPage)}).map ((_, index) => (
                <button key={index + 1} onClick={()=> paginate(index + 1)} className={`mx-1 btn py-2 px-4  rounded-full ${currentPage === index + 1 ? "bg-[#F00] text-white" : "bg-gray-200"}`}>
                  {index + 1}
                </button>
              ))
          }
        </div>
    </div>
  );
};

export default Menu;
