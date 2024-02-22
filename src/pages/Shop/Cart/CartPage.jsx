import React from "react";

const CartPage = () => {
  return (
    <div className="section-container">
      {/* Banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] p-4">
        <div className="py-48 flex flex-col items-center justify-center space-y-7">
          {/* Heading */}
          <h2 className="text-center md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Items Added to The <span className="text-[#FF8938]">Cart</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#4A4A4A] text-xl text-center">
            Come with family and feel the joy of eating together with a variety
            of delicious food.
          </p>
        </div>
      </div>
      {/* table for the cart */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-red-600 text-white rounded-sm">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
                <td>1</td>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>1</td>
              <th>
                <button className="btn btn-ghost btn-xs">$100</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CartPage;
