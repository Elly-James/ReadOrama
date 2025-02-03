import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SideBar from "./SideBar";
import Shop from "./Shop";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);


  //using fetch to get the data from the file

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched books:", data); 
        setBooks(data);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const handleAddToCart = (book) => {
    const price = parseFloat(book.price);
    if (isNaN(price)) {
      console.error(`Invalid price for book: ${book.title}`, book.price);
      return;
    }
  
    if (!cart.find((item) => item.id === book.id)) {
      console.log("Adding to cart:", book.title, "Price:", book.price);
      const bookWithQuantity = { ...book, quantity: 1, price: price };
      setCart([...cart, bookWithQuantity]);
    }
  };

  //This function handles the remove from cart button

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };


   //This function handles the adjusting the quantity of the book in cart


 
  const handleAdjustQuantity = (bookId, change) => {
    setCart(
      cart.map((item) => {
        if (item.id === bookId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

   //This function handles the button add to favorites

  const handleAddToFavorites = (book) => {
    if (!favorites.find((item) => item.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };
//This function handles the button remove from favorites
  const handleRemoveFromFavorites = (bookId) => {
    setFavorites(favorites.filter((book) => book.id !== bookId));
  };

  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                books={books}
                onAddToCart={handleAddToCart}
                onAddToFavorites={handleAddToFavorites}
                cart={cart}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onRemoveFromCart={handleRemoveFromCart}
                adjustQuantity={handleAdjustQuantity}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
              />
            }
          />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;


