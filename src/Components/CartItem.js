import React from 'react';
function CartItem({ item, removeFromCart, adjustQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.imageLink} alt={item.title} className="cart-item-image" /> {/* Updated image alt text */}
      <h4>{item.title}</h4> {/* Updated to display title */}
      <p>Price: {item.price}</p>
      <div>
        <button onClick={() => adjustQuantity(item.id, -1)}>-</button>
        <span>Quantity: {item.quantity}</span>
        <button onClick={() => adjustQuantity(item.id, 1)}>+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <p>Total: {item.price * item.quantity}</p>
    </div>
  );
}
export default CartItem;