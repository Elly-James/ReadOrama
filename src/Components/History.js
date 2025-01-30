import React, {useEffect, useState} from 'react';



function History ()
{

    const [books, setBooks] = useState([]);

     useEffect(() => {
          fetch("http://localhost:3000/books")
           .then(res => res.json())
           .then((data) => {
            const historyBooks = data.filter((book) => book.category === "History");
            setBooks(historyBooks);
          })
          .catch((error) => console.error("Error fetching books:", error));
      }, [])
    


    const booksList = books.map(book => (
        <div key={book.id}>
            <img src={book.imageLink} alt={book.title}/>
            <h3>{book.title}</h3>
            <p className='author'><span>Author: </span>{book.authors.join(", ")}</p>
            <p><span>Category: </span>{book.category}</p>
            

            <p>Price: {book.price}</p>
            <button>Add to Cart</button>   <button>Description</button>

        </div>
    ));



    return (
        <div>
            <h2>History Books</h2>
            {books.length === 0 ?  <p>No books found in this Category</p> : booksList}
        </div>
    )
}


export default History;