import React from "react";

function CartItem({ item, removeFromCart, adjustQuantity }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={item.imageLink}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h4 className="font-bold">{item.title}</h4>
          <p className="text-gray-600">{item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => adjustQuantity(item.id, -1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => adjustQuantity(item.id, 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;