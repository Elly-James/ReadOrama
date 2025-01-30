import React, { useEffect, useState } from "react";
import Category from "./Category";

const Shop = ({books, onAddToCart}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);
  

  const categories = [...new Set(books.flatMap((book) => book.category))];

  return (
    <div className="container mx-auto p-5">
        <h2>Shop</h2>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold my-4">{category} Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {books
              .filter((book) => book.category.includes(category))
              .map((book) => (
                <Category 
                key={book.id} 
                book={book}  
                onAddToCart={onAddToCart}  
                isInCart={false}

                 />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;