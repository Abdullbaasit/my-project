"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Trash2, ShoppingCart, X, Menu } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const cartRef = useRef(null);
  const avatarRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) setOpenCart(false);
      if (avatarRef.current && !avatarRef.current.contains(e.target)) setOpenAvatar(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openMenu]);

  return (
    <>

      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpenMenu(false)}
        />
      )}


      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-8">
          <button
            onClick={() => setOpenMenu(false)}
            className="mb-8 self-start p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} className="text-gray-700" />
          </button>
          <nav className="flex flex-col gap-2">
            {["Collections", "Man", "Woman"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setOpenMenu(false)}
                className="text-gray-800 font-semibold text-lg py-3 px-2 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 py-4 items-center justify-between">

          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => setOpenMenu(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} className="text-gray-700" />
            </button>

            <Link href="/" className="shrink-0">
              <Image
                src="/assets/images/logo.svg"
                width={140}
                height={20}
                alt="Sneakers logo"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {[
                { label: "Collections", href: "/collections" },
                { label: "Man", href: "/male" },
                { label: "Woman", href: "/female" }
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="relative text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full rounded-full" />
                </Link>
              ))}
            </nav>
          </div>

          
          <div className="flex items-center gap-5">
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setOpenCart((v) => !v)}
                aria-label="Cart"
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart size={22} className="text-gray-700" />
                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  
                </span>
              </button>
              {openCart && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <CartDropdown />
                </div>
              )}
            </div>

            
            <div className="relative" ref={avatarRef}>
              <button
                onClick={() => setOpenAvatar((v) => !v)}
                aria-label="User profile"
                className={`w-9 h-9 rounded-full overflow-hidden ring-2 transition-all duration-200 ${
                  openAvatar ? "ring-orange-500 ring-offset-2" : "ring-transparent hover:ring-orange-300 hover:ring-offset-2"
                }`}
              >
                <Image
                  src="/assets/images/image-avatar.png"
                  width={36}
                  height={36}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </button>
              {openAvatar && (
                <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <AvatarDropdown />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const CartDropdown = () => {
  const cartItem = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 3,
    image: "/assets/images/image-product-1-thumbnail.jpg",
  };
  const total = cartItem.price * cartItem.quantity;

  return (
    <div className="p-5">
      <h2 className="font-bold text-gray-900 text-sm border-b border-gray-100 pb-3 mb-4">
        Cart
      </h2>
      <div className="flex items-center gap-3">
        <img
          src={cartItem.image}
          alt="product"
          className="w-12 h-12 rounded-lg object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 truncate">{cartItem.name}</p>
          <p className="text-sm text-gray-500 mt-0.5">
            ${cartItem.price.toFixed(2)} * {cartItem.quantity}{" "}
            <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
          </p>
        </div>
        <button className="shrink-0 p-1.5 rounded-lg hover:bg-red-50 transition-colors group" aria-label="Remove">
          <Trash2 size={16} className="text-gray-400 group-hover:text-red-500 transition-colors" />
        </button>
      </div>
      <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-150 shadow-sm">
        Checkout
      </button>
    </div>
  );
};

const AvatarDropdown = () => {
  return (
    <div className="px-4 py-1">
      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 px-2">Signed in as</p>
      <p className="text-sm font-semibold text-gray-800 px-2 py-1.5 rounded-lg">Adepoju Taiwo</p>
      <hr className="my-2 border-gray-100" />
    </div>
  );
};
