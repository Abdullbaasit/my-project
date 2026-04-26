"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const FeMale = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(false)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/Womens-Shoes")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Women's Shoes
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
            >
            
              <div className="flex justify-center">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>

              
              <h3 className="mt-3 font-semibold text-lg">{product.title}</h3>

              <p className="text-gray-600 text-sm">
                {product.description.slice(0, 50)}...
              </p>

              
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold text-green-600">
                  ${product.price}
                </span>

                <span className="text-sm text-red-500">
                  -{product.discountPercentage}%
                </span>
              </div>

            
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeMale;
