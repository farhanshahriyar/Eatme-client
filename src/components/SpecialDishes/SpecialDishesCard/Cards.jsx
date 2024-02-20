/* eslint-disable react/prop-types */

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

// const Cards = ({ item }) => {
//     const [isHeartFilled, setIsHeartFilled] = useState(false);

//     const handleHeartClick = () => {
//         setIsHeartFilled(!isHeartFilled);
//     }

//   return (
    
//     <div className="card w-96 bg-base-100 shadow-xl relative">
//         <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-[#FF8938] ${isHeartFilled ? "text-rose-600" : "text-white"}`}
//         onClick={handleHeartClick}
//         >
//             <FaHeart className="h-5 w-5 cursor-pointer"/>
//         </div>
//       <Link to={`/menu/${item._id}`}>
//         <figure>
//           <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-200 md:h-72" />
//         </figure>
//       </Link>
//       <div className="card-body">
//         <Link to={`/menu/${item._id}`} className="card-title">{item.name}</Link>
//         <p>{item.recipe}</p>
//         <div className="card-actions justify-between items-center mt-2">
//           <h5 className="font-semibold">
//             <span className="text-sm text-red-500">$</span>
//             {item.price}
//           </h5>
//           <button className="btn bg-[#F00] hover:bg-black text-white">Buy Now!</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    }

    return (
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-80 flex justify-center items-center rounded-t-xl overflow-hidden">
                <Link to={`/menu/${item._id}`}>
                    <img src={item.image} alt={item.name} className="object-cover hover:scale-105 transition-all duration-200 w-full h-full" />
                </Link>
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
                <div>
                    <Link to={`/menu/${item._id}`} className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        {item.name}
                    </Link>
                    <p className="mt-3 text-gray-500">
                        {item.recipe}
                    </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red-500">$</span>
                        {item.price}
                    </h5>
                    <button className="btn bg-[#F00] hover:bg-black text-white">Buy Now!</button>
                </div>
                <div className={`rating gap-1 p-4 absolute right-2 top-2 heartStar ${isHeartFilled ? "text-rose-600" : "text-gray-300"}`} onClick={handleHeartClick}>
                    <FaHeart className="h-5 w-5 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Cards;
