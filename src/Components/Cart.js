import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, onRemoveFromCart, adjustQuantity }) {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <h2>My Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            removeFromCart={onRemoveFromCart}
                            adjustQuantity={adjustQuantity}
                        />
                    ))}
                    <div className="cart-total">
                        <p>Total: Ksh. {calculateTotal()}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;