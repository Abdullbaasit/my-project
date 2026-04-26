'use client'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const { cart, totalPrice, increaseQty, decreaseQty, removeFromCart } = useCart()

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Cart</h1>

      {cart.length === 0 && <p>No items yet</p>}

      {cart.map((item) => (
        <div key={item.id} className="mt-4 border-b pb-2">
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>

          <div className="flex items-center gap-3 mt-2">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <p>Subtotal: ${item.price * item.quantity}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 mt-2"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="mt-6 font-bold">
        Total: ${totalPrice}
      </h2>
    </div>
  )
}

export default CartPage