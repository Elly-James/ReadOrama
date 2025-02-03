import React, { useState } from "react";

const Category = ({ book, onAddToCart, onAddToFavorites, isInCart, isInFavorites }) => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // The modal is responsible for displaying the book details on the page
  // when the more info button is clicked

 

  const openBookDetails = () => {
    setShowModal(true);
  };

  const closeBookDetails = () => {
    setShowModal(false);
  };

  const authors = Array.isArray(book.authors)
    ? book.authors.join(", ")
    : book.authors || "Unknown Author";

  return (
    <div className="book-card">
      <div
        className="relative"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <img src={book.imageLink} alt={book.title} className="w-full h-40 object-cover rounded-md" />
        {showButton && (
          <button
            onClick={openBookDetails}
            className="moreInfo"
          >
            More Info
          </button>
        )}
      </div>
      <div>
        <h3 className="mt-2 font-bold">{book.title || "Untitled"}</h3>
        <p className="text-gray-600">{authors}</p>
        <p className="text-blue-500 font-bold mt-2">Ksh. {book.price || "N/A"}</p>

      </div>
      
      <div className="mt-4 space-y-2">
        <button
          onClick={() => onAddToCart(book)}
          className={`addToCart ${
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
          className={`addToFavorites ${
            isInFavorites
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600 text-white"
          }`}
          disabled={isInFavorites}
        >
          {isInFavorites ? "In Favorites" : "Add to Favorites"}
        </button>
      </div>
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