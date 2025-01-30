import React from "react";

const Category = ({ 
  book, 
  onAddToCart, 
  onAddToFavorites, 
  isInCart, 
  isInFavorites 
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img
        src={book.imageLink}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-2 font-bold">{book.title}</h3>
      <p className="text-gray-600">{book.authors?.join(", ")}</p>
      <p className="text-blue-500 font-bold mt-2">Ksh. {book.price}</p>
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
    </div>
  );
};

export default Category;