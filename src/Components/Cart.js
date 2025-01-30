import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, onRemoveFromCart, adjustQuantity }) {
  // Helper function to extract numeric price value
  const extractPrice = (priceString) => {
    // Remove "KSh. " and any spaces, then convert to number
    const numericValue = parseFloat(priceString.replace(/[^0-9.]/g, ''));
    console.log('Extracted price:', numericValue, 'from:', priceString); // Debug log
    return numericValue;
  };

  const calculateTotal = () => {
    try {
      const total = cart.reduce((sum, item) => {
        const itemPrice = extractPrice(item.price);
        const itemTotal = itemPrice * item.quantity;
        console.log(`Item: ${item.title}, Price: ${itemPrice}, Quantity: ${item.quantity}, Subtotal: ${itemTotal}`); // Debug log
        return sum + itemTotal;
      }, 0);

      console.log('Final total:', total); // Debug log
      return total;
    } catch (error) {
      console.error('Error calculating total:', error);
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
          <div className="space-y-4 mb-20"> {/* Added bottom margin to prevent overlap with fixed total */}
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