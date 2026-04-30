'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

const FeMale = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [addedIds, setAddedIds] = useState({})
  const { addToCart } = useCart()

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/category/Womens-Shoes') 
      .then((response) => {
        setProducts(response.data.products)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedIds((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }))
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight">
        Women's Shoes
      </h1>
      <p className="text-center text-gray-500 mb-8 text-sm">
        {products.length} products available
      </p>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          {/* <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black" /> */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-center bg-gray-50 rounded-xl p-3 mb-3">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={160}
                  height={160}
                  className="rounded-lg object-contain"
                />
              </div>

              <div className="flex items-start justify-between gap-1 mb-1">
                <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                  {product.title}
                </h3>
                <span className="text-xs bg-red-100 text-red-600 font-medium px-1.5 py-0.5 rounded-full shrink-0">
                  -{product.discountPercentage}%
                </span>
              </div>

              <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg text-green-600">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.round(product.rating)
                            ? 'text-amber-400'
                            : 'text-gray-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {/* <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> */}
                      </svg>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    addedIds[product.id]
                      ? 'bg-green-500 text-white'
                      : 'bg-black text-white hover:bg-gray-800 active:scale-95'
                  }`}
                >
                  {addedIds[product.id] ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FeMale
