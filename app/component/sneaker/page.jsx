"use client";
import { useState } from "react";
import { ParentDesign } from "./component/sneaker/TextFile";
import { ImageSlider } from "./component/sneaker/button";

export default function Home() {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (count) => {
    setCart((prev) => prev + count);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === "fall-sneakers");
      if (existing) {
        return prev.map((item) =>
          item.id === "fall-sneakers"
            ? { ...item, quantity: item.quantity + count }
            : item
        );
      }
      return [
        ...prev,
        {
          id: "fall-sneakers",
          name: "Fall Limited Edition Sneakers",
          price: 125,
          quantity: count,
          image: "/assets/images/image-product-1-thumbnail.jpg",
        },
      ];
    });
  };

  const handleRemoveFromCart = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      setCart((prev) => Math.max(0, prev - item.quantity));
      setCartItems((prev) => prev.filter((i) => i.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cart}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <ImageSlider />
        <ParentDesign onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}