
import React, { useState, useEffect } from "react";
import Home from "./Home";
import SideBar from "./SideBar";
import Shop from "./Shop";
import Cart from "./Cart";
import Favorites from "./Favorites";

function App() {
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const handleAddToCart = (book) => {
    if (!cart.find((item) => item.id === book.id)) {
      const bookWithQuantity = { ...book, quantity: 1 };
      setCart([...cart, bookWithQuantity]);
    }
  };

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };

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

  const handleAddToFavorites = (book) => {
    if (!favorites.find((item) => item.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const handleRemoveFromFavorites = (bookId) => {
    setFavorites(favorites.filter((book) => book.id !== bookId));
  };

  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow">
        <Home />
        <Shop
          books={books}
          onAddToCart={handleAddToCart}
          onAddToFavorites={handleAddToFavorites}
          cart={cart}
          favorites={favorites}
        />
        <Cart
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          adjustQuantity={handleAdjustQuantity}
        />
        <Favorites
          favorites={favorites}
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
      </main>
    </div>
  );
}

export default App;