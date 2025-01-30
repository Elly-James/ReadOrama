import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, onRemoveFromCart, adjustQuantity }) {
  // Calculate the total price directly without parsing
  const calculateTotal = () => {
    try {
      const total = cart.reduce((sum, item) => {
        const itemTotal = item.price * item.quantity; // Directly use the numeric price
        console.log(
          `Item: ${item.title}, Price: ${item.price}, Quantity: ${item.quantity}, Subtotal: ${itemTotal}`
        ); // Debug log
        return sum + itemTotal;
      }, 0);

      console.log("Final total:", total); // Debug log
      return total;
    } catch (error) {
      console.error("Error calculating total:", error);
      return 0;
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-20">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={onRemoveFromCart}
                adjustQuantity={adjustQuantity}
              />
            ))}
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
            <div className="max-w-7xl mx-auto flex justify-end">
              <div className="text-2xl font-bold">
                Total: KSh. {calculateTotal().toFixed(2)}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
