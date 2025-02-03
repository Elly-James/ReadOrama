import React from "react";

function CartItem({ item, removeFromCart, adjustQuantity }) {

  //Here we are displaying the cart items and the payment form
  return (
    <div className="cart">
        <div className="book-card">
          <img
            src={item.imageLink}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h4 className="font-bold">Title: {item.title}</h4>
            <p className="text-gray-600">Price: {item.price}</p>
            <div className="flex items-center space-x-4">
          <div className="quantity">
            <button
              onClick={() => adjustQuantity(item.id, -1)}
              className="minus"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => adjustQuantity(item.id, 1)}
              className="plus"
            >
              +
            </button>
          </div>
          </div>
        </div>
        
        <button
          onClick={() => removeFromCart(item.id)}
          className="remove"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;