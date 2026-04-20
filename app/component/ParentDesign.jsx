"use client";
import { useState } from "react";
import { Cardlist } from "./Cardlist";

export const ParentDesign = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(0);
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
      <div className="justify-between space-y-3">
        <p className="text-xs text-gray-400 font-semibold uppercase mb-3">
          SNEAKERS
        </p>
        <h1 className="text-4xl text-gray-900 font-extrabold mb-3 ">
          Fall Limited Edition Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear companions.
          Featuring a durable rubber outer sole, they'll withstand everything
          weather can offer.
        </p>
        <div className="flex flex-row">
          <span className="font-bold text-2xl gap-3">$125.00</span>
          <span className="bg-black text-amber-100 p-1 rounded-xl gap-4">
            50%
          </span>
        </div>
        <div className="gap-6 px-5  flex">
          <div className="bg-gray-300 px-3 py-2 rounded-2xl flex flex-row gap-6 border border-amber-700 w-fit mt-5 ">
          
            <Counter />
          </div>

          <button
            onClick={() => setCart(cart + count)}
            className="bg-amber-600 px-6 py-2.5 rounded-3xl text-xl hover:bg-blue-300"
          >
            {" "}
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

const Counter = () => {
  const [counts, setCounts] = useState(0);
  return (
      <div className="flex flex-row items-center justify-between gap-3 rounded-2xl">
        <button onClick={() => setCounts((prev) => Math.max(1, prev - 1))}
        className="p-4">
          -
        </button>
        <span>{counts}</span>
        <button onClick={() => setCounts((prev) => prev + 1)}
          className="p-4"
          >+</button>
      </div>
      
  );
};


