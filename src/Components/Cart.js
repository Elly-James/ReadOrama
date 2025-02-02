import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ cart, onRemoveFromCart, adjustQuantity }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    country: "",
    postal_code: "",
    payment_method: "credit_card",
    card_number: "",
    expiration_date: "",
    cvv: "",
    phone_number: "", 
    email:"",
  });

  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseFloat(item.price);
      if (isNaN(price)) {
        console.error(`Invalid price for item: ${item.title}`, item.price);
        return sum;
      }
      console.log("Calculating total for item:", item.title, "Price:", item.price, "Quantity:", item.quantity);
      return sum + price * item.quantity;
    }, 0);
  };

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData("")
    // Handle payment processing here based on payment_method
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={onRemoveFromCart}
                adjustQuantity={adjustQuantity}
              />
            ))}
          </div>
          <div className="total-price-section">
            <div className="total">Total: KSh. {calculateTotal().toFixed(2)}</div>
          </div>
        </>
      )}

      <div className="payment-form">
        <form onSubmit={handleSubmit}>
          <h2>Proceed to Checkout</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>First name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a country</option>
              <option value="KE">Kenya</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>
          <div>
            <label>Postal code</label>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <h2>Choose Payment method</h2>
            <div className="methods">
              <div className="flex">
                <input
                  type="radio"
                  id="credit_card"
                  name="payment_method"
                  value="credit_card"
                  checked={formData.payment_method === "credit_card"}
                  onChange={handleInputChange}
                />
                <label htmlFor="credit_card" className="radio-label">
                  Credit/debit card
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="mpesa"
                  name="payment_method"
                  value="mpesa"
                  checked={formData.payment_method === "mpesa"}
                  onChange={handleInputChange}
                />
                <label htmlFor="mpesa" className="radio-label">
                  M-Pesa
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="paypal"
                  name="payment_method"
                  value="paypal"
                  checked={formData.payment_method === "paypal"}
                  onChange={handleInputChange}
                />
                <label htmlFor="paypal" className="radio-label">
                  PayPal
                </label>
              </div>
            </div>
          </div>
          {formData.payment_method === "credit_card" && (
            <div className="space-y-4">
              <div>
                <label>Card number</label>
                <input
                  type="text"
                  name="card_number"
                  value={formData.card_number}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Expiration date</label>
                  <input
                    type="text"
                    name="expiration_date"
                    value={formData.expiration_date}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          {formData.payment_method === "mpesa" && (
            <div className="space-y-4">
              <div>
                <label>Phone Number</label>
                <div className="flex">
                  <span>+254</span>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="712345678"
                    required
                  />
                </div>
                <p>Enter your M-Pesa registered phone number</p>
              </div>
            </div>
          )}
          {formData.payment_method === "paypal" && (
            <div className="space-y-4">
              <div>
                <label>Email</label>
                <div className="flex">
            
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abcdef@gmail.com"
                    required
                  />
                </div>
                <p>Enter your email address</p>
              </div>
            </div>
          )}
          <button type="submit">
            {formData.payment_method === "mpesa"
              ? "Request M-Pesa STK Push"
              : "Pay now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;