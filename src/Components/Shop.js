import React, { useState, useEffect } from "react";
import Category from "./Category";
import BookForm from "./BookForm";

const Shop = ({ onAddToCart, onAddToFavorites, cart, favorites }) => {
  const [books, setBooks] = useState([]);
  const [currentIndices, setCurrentIndices] = useState({}); // Track current index for each category

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddToShop = (newBook) => {
    setBooks([...books, newBook]);
  };

  const categories = [...new Set(books.flatMap((book) => book.category))];

  // Function to handle scrolling left (previous books)
  const scrollLeft = (category) => {
    setCurrentIndices((prevIndices) => {
      const filteredBooks = books.filter((book) => book.category.includes(category));
      const currentIndex = prevIndices[category] || 0;
      const newIndex = (currentIndex - 1 + filteredBooks.length) % filteredBooks.length; // Loop back to the end if at the start
      return {
        ...prevIndices,
        [category]: newIndex,
      };
    });
  };

  // Function to handle scrolling right (next books)
  const scrollRight = (category) => {
    setCurrentIndices((prevIndices) => {
      const filteredBooks = books.filter((book) => book.category.includes(category));
      const currentIndex = prevIndices[category] || 0;
      const newIndex = (currentIndex + 1) % filteredBooks.length; // Loop back to the start if at the end
      return {
        ...prevIndices,
        [category]: newIndex,
      };
    });
  };

  // Function to get visible books for a category
  const getVisibleBooks = (category) => {
    const filteredBooks = books.filter((book) => book.category.includes(category));
    const startIndex = currentIndices[category] || 0;
    const visibleBooks = [];

    // Loop through the next 3 books (including wrapping around)
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % filteredBooks.length;
      visibleBooks.push(filteredBooks[index]);
    }

    return visibleBooks;
  };

  return (
    <div className="shop-container">
      <h2 className="shop-header">Shop</h2>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-xl font-bold my-4">{category} Books</h2>
          <div className="books-container">
            <button className="nav-button left" onClick={() => scrollLeft(category)}>
              &lt;
            </button>
            <div className="books-list">
              {getVisibleBooks(category).map((book) => (
                <Category
                  key={book.id}
                  book={book}
                  onAddToCart={onAddToCart}
                  onAddToFavorites={onAddToFavorites}
                  isInCart={cart.some((item) => item.id === book.id)}
                  isInFavorites={favorites.some((item) => item.id === book.id)}
                />
              ))}
            </div>
            <button className="nav-button right" onClick={() => scrollRight(category)}>
              &gt;
            </button>
          </div>
        </div>
      ))}
      <BookForm onAddBook={handleAddToShop} />
    </div>
  );
};

export default Shop;