import React from "react";

const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      title: "Main Dish",
      des: "(86 Dishes)",
      image: "/images/home/category/img1.png",
    },
    {
      id: 2,
      title: "Break Fast",
      des: "(12 Break Fasts)",
      image: "/images/home/category/img2.png",
    },
    {
      id: 3,
      title: "Desserts",
      des: "(48 Desserts)",
      image: "/images/home/category/img3.png",
    },
    {
      id: 4,
      title: "Browse All",
      des: "(225 Items)",
      image: "/images/home/category/img4.png",
    },
  ];
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div key={i} className="shadow-lg rounded-md bg-white py-6 px-5 w-72
           mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 trasition-all">
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-[#4A4A4A] text-sm">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
