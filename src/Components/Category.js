import React, { useState } from "react";

const Category = ({ book, onAddToCart, onAddToFavorites, isInCart, isInFavorites }) => {
  const [showButton, setShowButton] = useState(false); // State to toggle floating button
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  const openBookDetails = () => {
    setShowModal(true);
  };

  const closeBookDetails = () => {
    setShowModal(false);
  };

  // Ensure authors is displayed correctly
  const authors = Array.isArray(book.authors)
    ? book.authors.join(", ")
    : book.authors || "Unknown Author";

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white relative">
      {/* Book Image with hover functionality */}
      <div
        className="relative"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <img
          src={book.imageLink}
          alt={book.title}
          className="w-full h-40 object-cover rounded-md"
        />
        {/* Floating Button */}
        {showButton && (
          <button
            onClick={openBookDetails}
            className="absolute top-2 right-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            More Info
          </button>
        )}
      </div>
      {/* Book Details */}
      <h3 className="mt-2 font-bold">{book.title || "Untitled"}</h3>
      <p className="text-gray-600">{authors}</p>
      <p className="text-blue-500 font-bold mt-2">Ksh. {book.price || "N/A"}</p>
      <div className="mt-4 space-y-2">
        <button
          onClick={() => onAddToCart(book)}
          className={`w-full px-4 py-2 rounded ${
            isInCart
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={isInCart}
        >
          {isInCart ? "In Cart" : "Add to Cart"}
        </button>
        <button
          onClick={() => onAddToFavorites(book)}
          className={`w-full px-4 py-2 rounded ${
            isInFavorites
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600 text-white"
          }`}
          disabled={isInFavorites}
        >
          {isInFavorites ? "In Favorites" : "Add to Favorites"}
        </button>
      </div>

      {/* Modal for Book Details */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeBookDetails}>
              &times;
            </button>
            <h2>{book.title || "Unknown Title"}</h2>
            <p>
              <strong>Published Date:</strong> {book.publishedDate || "Unknown"}
            </p>
            <p>
              <strong>Publisher:</strong> {book.publisher || "N/A"}
            </p>
            <p>{book.description || "No description available."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
