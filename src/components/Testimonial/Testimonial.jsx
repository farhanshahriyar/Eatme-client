import React from "react";

const Testimonial = () => {
  return (
    <section className="section-container my-24 flex flex-col lg:flex-row rounded-xl bg-gradient-to-r from-[#FF8938] to-[#F00] px-16 py-24 gap-12">
      <div className="flex lg:pr-28 items-center">
        <div className="space-y-5">
          <h2 className="text-5xl font-extrabold text-[#F4F4F4]">
            Meet Our Super Clients
          </h2>
          <p className="text-[#F4F4F4] font-medium text-lg">
            There are many variations of passages of Lorem Ipsum
            <br /> available, but the majority have suffered alteration in some
            form,
            <br /> by injected humour, or randomised words which don't look even
            slightly believable.
          </p>
          <button className="py-4 px-9 rounded-lg bg-[#FFF] text-[#F00] font-bold">
            Show All
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 mb-16 opacity-40 p-10 lg:w-[430px]  rounded-lg bg-white">
          <img
            className="absolute -top-5 -left-5 border-4 border-white rounded-full bg-white"
            src="images/testimonial/client.png"
            alt="Client 1"
          />
          <p>
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <h4 className="font-bold mt-5">Ilham Yuda</h4>
          <p className="font-medium">Businessman</p>
          <div className="flex justify-end">
            <img src="images/testimonial/circles.png" alt="Circles" />
          </div>
        </div>
        <div className="absolute z-20 top-40 lg:-left-24 lg:w-[430px] p-10 rounded-lg bg-white">
          <img
            className="absolute -top-5 -left-5 border-4 border-white rounded-full bg-white"
            src="images/testimonial/client.png"
            alt="Client 2"
          />
          <p>
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <h4 className="font-bold mt-5">Ilham Yuda</h4>
          <p className="font-medium">Businessman</p>
          <div className="flex justify-end">
            <img src="images/testimonial/circles.png" alt="Circles" />
          </div>
        </div>
        <div className="relative z-10 opacity-40 p-10 rounded-lg lg:w-[430px]  bg-white">
          <img
            className="absolute -top-5 -left-5 border-4 border-white rounded-full bg-white"
            src="images/testimonial/client.png"
            alt="Client 3"
          />
          <p>
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <h4 className="font-bold mt-5">Ilham Yuda</h4>
          <p className="font-medium">Businessman</p>
          <div className="flex justify-end">
            <img src="images/testimonial/circles.png" alt="Circles" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
