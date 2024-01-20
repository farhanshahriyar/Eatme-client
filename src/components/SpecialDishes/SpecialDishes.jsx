import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./SpecialDishesCard/Cards";
import {} from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextSlideArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};

const simplePrevSlideArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      PREV
    </div>
  );
}

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials)
        setRecipies(specials);
      });
  }, []);

  // settings for slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    simpleNextSlideArrow: <simpleNextSlideArrow />,
    simplePrevSlideArrow: <simplePrevSlideArrow />,
  };
  return (
    <div className="section-container my-20 relative">
      <div>
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
      </div>

      {/* slider buttons */}
      <div className="md:absolute right-8 top-8 mb-10 md:mr-24">
        <button className="btn p-2 bg-[#F00] hover:bg-[#FF8938] text-white ml-5" onClick={()=> slider?.current?.slickPrev()}><FaAngleLeft className="w-8 h-8 p-1"/></button>
        <button className="btn p-2 bg-[#F00] hover:bg-[#FF8938] text-white ml-5" onClick={()=> slider?.current?.slickNext()}><FaAngleRight className="w-8 h-8 p-1"/></button>
      </div>

      {/* slide */}
      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
        {recipies.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
