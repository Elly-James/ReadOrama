import React from "react";

const Category = ({book, onAddToCart, isInCart, onRemoveFromCart}) => {


        function handleBookClick() {
          if (isInCart) {
            onRemoveFromCart(book.id);
          } else {
            onAddToCart(book);
          }
        }

 

   





  return (
    <section>

            <div className="border p-4 rounded-lg shadow-md bg-white">
                <img
                    src={book.imageLink}
                    alt={book.title}
                    className="w-full h-40 object-cover rounded-md"
                />
                <h3 ><span>Title: </span> {book.title}</h3>
                <p className="text-gray-600"><span>Authors: </span>  {book.authors?.join(", ")}</p>
                <p className="text-blue-500 font-bold mt-2"><span>Price: </span>{book.price}</p>
                <button onClick={handleBookClick}>
                 {isInCart? "Remove from Cart" : "Add to Cart"}
                 </button>
                
                
                
                <button>Add to Favorites</button>
            </div>

    </section>
    
  );
};

export default Category;