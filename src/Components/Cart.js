import React, { useState }  from "react";
import CartItem from "./CartItem";

function Cart({ cart, onRemoveFromCart, adjustQuantity }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    country: '',
    postal_code: '',
    payment_method: 'credit_card',
    card_number: '',
    expiration_date: '',
    cvv: '',
    phone_number: '' // For M-Pesa
  });




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

  
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle payment processing here based on payment_method
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



    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                <label className="block text-sm font-medium text-gray-700">Postal code</label>
                <input
                  type="text"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-4">Payment method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="credit_card"
                    name="payment_method"
                    value="credit_card"
                    checked={formData.payment_method === 'credit_card'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="credit_card" className="ml-3 block text-sm font-medium text-gray-700">
                    Credit/debit card
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="mpesa"
                    name="payment_method"
                    value="mpesa"
                    checked={formData.payment_method === 'mpesa'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="mpesa" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                    M-Pesa
                    <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Mobile Money</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment_method"
                    value="paypal"
                    checked={formData.payment_method === 'paypal'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                    PayPal
                  </label>
                </div>
              </div>
            </div>

            {/* Credit Card Details */}
            {formData.payment_method === 'credit_card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card number</label>
                  <input
                    type="text"
                    name="card_number"
                    value={formData.card_number}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiration date</label>
                    <input
                      type="text"
                      name="expiration_date"
                      value={formData.expiration_date}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* M-Pesa Details */}
            {formData.payment_method === 'mpesa' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +254
                    </span>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="712345678"
                      required
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Enter your M-Pesa registered phone number</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {formData.payment_method === 'mpesa' ? 'Request M-Pesa STK Push' : 'Pay now'}
            </button>

            {formData.payment_method === 'mpesa' && (
              <p className="mt-2 text-sm text-gray-500 text-center">
                You will receive a prompt on your phone to complete the payment
              </p>
            )}
          </form>
        </div>
      
     </div>

  );
}

export default Cart;
