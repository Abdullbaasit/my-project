"use client";
import { useState } from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";

export const ParentDesign = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setCart((prev) => prev + count);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const originalPrice = 250.0;
  const discountedPrice = 125.0;
  const discountPercent = 50;

  return (
    <div className="w-full max-w-lg mx-auto px-4 md:px-6 py-6 flex flex-col gap-5">
      <p className="text-xs font-bold tracking-widest text-orange-600 uppercase">
        Sneaker Company
      </p>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-gray-500 text-base leading-relaxed">
        These low-profile sneakers are your perfect casual wear companions.
        Featuring a durable rubber outer sole, they'll withstand everything
        the weather can offer.
      </p>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>
          <span className="bg-orange-100 text-orange-600 text-sm font-bold px-2.5 py-0.5 rounded-full">
            {discountPercent}% OFF
          </span>
        </div>
        <span className="text-gray-400 line-through text-sm">
          ${originalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-3 gap-4 sm:w-40">
          <button
            onClick={() => setCount((prev) => Math.max(1, prev - 1))}
            aria-label="Decrease quantity"
            className="w-8 h-8 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100 active:bg-orange-200 transition-colors font-bold text-lg"
          >
            <Minus size={16} strokeWidth={3} />
          </button>
          <span className="text-gray-900 font-bold text-base w-4 text-center tabular-nums">
            {count}
          </span>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            aria-label="Increase quantity"
            className="w-8 h-8 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100 active:bg-orange-200 transition-colors font-bold text-lg"
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>

        
        <button
          onClick={handleAddToCart}
          className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 shadow-md shadow-orange-200 active:scale-95 ${
            added
              ? "bg-green-500 shadow-green-200 text-white"
              : "bg-orange-500 hover:bg-orange-500 text-white"
          }`}
        >
          <ShoppingCart size={18} />
          {added ? "Added to cart!" : "Add to Cart"}
        </button>
      </div>

      {cart > 0 && (
        <p className="text-sm text-gray-400">
          {cart} item{cart !== 1 ? "s" : ""} in cart
        </p>
      )}
    </div>
  );
};
