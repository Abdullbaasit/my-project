
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log('CART:', cart)
  }, [cart])
  const addToCart = (product) => {
    
    const existing = cart.find((item) => item.id === product.id)

    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  
  const increaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }


  const decreaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

  
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )


}


export const useCart = () => useContext(CartContext)