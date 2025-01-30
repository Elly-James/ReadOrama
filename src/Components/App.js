import React, {useState} from "react";
import Home from "./Home";
import SideBar from "./SideBar";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {

  const [cart, setCart]= useState([]);
  const [books, setBooks]= useState([]);





      function handleAddToCart(book){
        if(!cart.find((b)=> b.id === book.id)){
          fetch(`http://localhost:3000/books${bookId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inCart: true,
            }),
          })
        .then((r) => r.json())
        .then((updatedBook) => {
            setCart([...cart, updatedBook]);
            setBooks(books.map((b)=> b.id === updatedBook.id ? updatedBook : b));
          });

        }






      function handleRemoveFromCart (bookId){
        fetch(`http://localhost:3000/books${bookId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({inCart: false}),
        })
        .then((r) => r.json())
        .then((updatedBook) => {
          setCart(cart.filter((book) => book.id !== bookId));
          setBooks(books.map((book) => book.id=== updatedBook.id ? updatedBook : book));
        });
      }
    }



  








        return (
          <div className="flex">
            <SideBar />
            <main className="flex-grow">
              <Home />
              <Shop 
              books ={books}
              onAddToCart ={handleAddToCart}

              
              />
              <Cart
              cart ={cart} 
              onRemoveFromCart = {handleRemoveFromCart}
              />
            </main>
          </div>

          
          
          
        );
  }

export default App;