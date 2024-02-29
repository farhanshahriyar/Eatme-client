import React, { useContext, useState } from "react";
import useCart from "../../../hooks/Cart/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  // calculate price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  // // handle decrease item quantity
  // const handleDecrease = (item) => {
  //   // console.log(item._id)
  //   fetch(`http://localhost:6001/carts/${item._id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ quantity: item.quantity - 1 }),
  //   }).then((res) => res.json()).then((data) => {
  //     const updatedCart = cartItems.map((cartItem) => {
  //       if (cartItem._id === item._id) {
  //         return {
  //           ...cartItem,
  //           quantity: cartItem.quantity - 1,
  //         };
  //       }
  //       return cartItem;
  //     });
  //     refetch();
  //     setCartItems(updatedCart);
  //   });
  //   refetch();
  // };
       

  // // handle increase item quantity
  // const handleIncrease = (item) => {
  //   fetch(`http://localhost:6001/carts/${item._id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ quantity: item.quantity + 1 }),
  //   }).then((res) => res.json()).then((data) => {
  //     const updatedCart = cartItems.map((cartItem) => {
  //       if (cartItem._id === item._id) {
  //         return {
  //           ...cartItem,
  //           quantity: cartItem.quantity + 1,
  //         };
  //       }
  //       return cartItem;
  //     });
  //     refetch();
  //     setCartItems(updatedCart);
  //   });
  // };

  // Use async/await for clarity
const handleDecrease = async (item) => {
  if (item.quantity - 1 > 0) { // Ensure we don't decrease below 1
    const response = await fetch(`http://localhost:6001/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity - 1 }),
    });
    const data = await response.json();
    if (data) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
      // Optionally refetch here if needed
      refetch();
    }
  }
};

const handleIncrease = async (item) => {
  const response = await fetch(`http://localhost:6001/carts/${item._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity: item.quantity + 1 }),
  });
  const data = await response.json();
  if (data) {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    // Optionally refetch here if needed
    refetch();
  }
};


  // handle delete item from cart
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete the item
        fetch(`http://localhost:6001/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="section-container mb-40">
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
                <td>{index + 1}</td>
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
                  </div>
                </td>
                <td className="font-medium">
                  {item.name || "not verified item"}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Menu ID: {item.menuItemId || "unverified id"}
                  </span>
                </td>
                <td className="font-medium">
                  <button
                    className="btn btn-xs"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={() => console.log(item.quantity)}
                    className="w-10 mx-2 text-center overflow-hidden
                appearance-none"
                  />
                  <button
                    className="btn btn-xs"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </td>
                <td className="font-medium">${calculatePrice(item).toFixed(2)}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash className="text-base text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* customer details */}
      <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 space-y-3">
          <h3 className="text-xl font-bold underline">Customer Details</h3>
          <p className="text-gray-800">
            <span className="font-bold">Customer Name:</span> {user.displayName}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Customer Email:</span> {user.email}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Customer UserID:</span> {user.uid}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Total Items:</span>{" "}
            {user.phone || "You did not add any number."}
          </p>
        </div>
        <div className="md:w-1/2 space-y-3">
          <h3 className="text-xl font-bold underline">Shopping Details</h3>
          <p className="text-gray-800">
            <span className="font-bold">Total Items:</span> {cart.length}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Total Price:</span> $
            {cart.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)}
          </p>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Proceed to Checkout
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 11 4-7" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
              <path d="m9 11 1 9" />
              <path d="M4.5 15.5h15" />
              <path d="m15 11-1 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
