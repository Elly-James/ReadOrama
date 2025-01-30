
import React from "react";
import Category from "./Category";

const Shop = ({ books, onAddToCart, onAddToFavorites, cart, favorites }) => {
  const categories = [...new Set(books.flatMap((book) => book.category))];

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-6">Shop</h2>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-xl font-bold my-4">{category} Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {books
              .filter((book) => book.category.includes(category))
              .map((book) => (
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
        </div>
      ))}
    </div>
  );
};

export default Shop;