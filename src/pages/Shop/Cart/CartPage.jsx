import React from "react";
import useCart from "../../../hooks/Cart/useCart";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
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
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image || "https://picsum.photos/200/200"}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div> */}
                  </div>
                </td>
                <td>
                   {item.name || "not verified item"}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Menu id: {item.menuItemId || "unverified id"}
                  </span>
                </td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs"><FaTrash className="text-base text-red-600"/></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
