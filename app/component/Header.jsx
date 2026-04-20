"use client";

import Image from "next/image";
import { useState } from "react";
import { Trash2 } from "lucide-react";

export const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <div>
      <div
        onClick={() => setOpenCart(false)}
        className="h-screen w-full absolute"
      ></div>
      <div
        onClick={() => setOpenAvatar(false)}
        className="h-screen w-full absolute" >
      </div>
      <div className="flex sm:min-w-7xl sm:max-w-7xl p-5 w-full mx-auto items-center justify-between border-b border-gray-200 ">
        <div className=" m-0 p-2 flex items-center md:space-x-30 gap-4">
          <div className="relative">
            {openMenu && <MenuDropdown/>}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer"
            >
              <Image
                src="/assets/images/icon-menu.svg"
                width={30}
                height={30}
                alt="menu"
                className="flex"
              />
            </button>
          </div>
          <div className="text-gray-900 font-bold text-2xl font-sans">
            <Image
              src="/assets/images/logo.svg"
              width={200}
              height={20}
              alt="logo"
            />
          </div>
          <div className="hidden md:flex  space-x-30">
            <p className="text-gray-700 text-xl">Collections</p>
            <p className="text-gray-600 text-xl">Man</p>
            <p className="text-gray-600">Woman</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-full">
          <div className="relative">
            {openCart && <CartDropdown />}
            <button
              className="cursor-pointer"
              onClick={() => setOpenCart(!openCart)}
            >
              <Image
                src="/assets/images/icon-cart.svg"
                alt="cart"
                width={20}
                height={20}
              />
            </button>
            
          </div>
          <div className="">
            <div className="relative">
              
              <button 
                className="cursor-pointer"
                onClick={() => setOpenAvatar(!openAvatar)}
              >
              <Image
                src="/assets/images/image-avatar.png"
                width={20}
                height={20}
                alt="avatar"
                className="h-10 w-9 border-b-2 rounded-full "
              />
              {openAvatar && <Cart />}
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

const CartDropdown = () => {
  return (
    <div className="bg-white shadow-xl p-20 rounded-2xl top-10 absolute w-80 border border-neutral-200 right-1/2 transform translate-x-1/2">
      <h2>Your Cart is empty</h2>
    </div>
  );
};


const AvatarDropdown = () => {
  return (
    <div className="bg-white shadow-amber-400 px-10 py-20 rounded-2xl w-30 border t-1 top-10 text-sans ">
      <p className="border-b-2 ">Alexander Mate</p>
    </div>
  );
};


const MenuDropdown = () => {
  return (
    <div className="flex-cols bg-white h-100dvh shadow-xl overflow-auto space-x-2 right-1/2 border rounded-xl text-xl px-15 py-10">
      <span className="font-sans text-xl"> Collection </span>
      <span className="text-xl"> Men </span>
      <span className="text-xl"> Women </span>
      <span className="xl"> About </span>
    </div>
  )
}

const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


const Cart = () => {
  const cartItem = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 3,
    image: "/assets/images/image-product-1-thumbnail.jpg",
  };
  const total = cartItem.price * cartItem.quantity;

  return (
    <div className="">
      <h2 className="font-semibold border-b pb-3 mb-4">Cart</h2>
      <div>
        <img 
        src={cartItem.image}
        alt="product"
        className="w-12 h-12 rounded-md"
        />

        <div>
          <p>{cartItem.name}</p>
          <p>
            ${cartItem.price.toFixed(2)} * {cartItem.quantity}{" "}
            <span className="font-bold">
              ${total.toFixed(2)}
            </span>
          </p>
        </div>
        <button>
          <Trash2 className="text-gray-400 hover:text-red-500 cursor-pointer" />
        </button>
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
        Checkout
      </button>
    </div>
  )
}
