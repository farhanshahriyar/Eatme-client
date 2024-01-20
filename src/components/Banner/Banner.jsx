import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* image */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="banner" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            {/* first rating card */}
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-50">
              <img
                src="/images/home/b-food1.png"
                alt="banner"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Chocolate Coffee</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                </div>
                <p className="text-[#4A4A4A] text-base">$18.00</p>
              </div>
            </div>
            {/* second rating card */}
            <div className="md:flex hidden  bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-50">
              <img
                src="/images/home/b-food2.png"
                alt="banner"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Chocolate Coffee</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#FF8938]"
                    readOnly
                  />
                </div>
                <p className="text-[#4A4A4A] text-base">$18.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights <br></br> Of Delectable{" "}
            <span className="text-[#FF8938]"> Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-base">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn px-8 py-3 font-semibold text-white bg-[#F00] hover:bg-[#FF8938] flex item-center gap-2">
            Order Now <FiArrowDownRight />
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Banner;
