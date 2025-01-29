import React, {useEffect, useState} from 'react';



function Genealogy ()
{

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books')
       .then(res => res.json())
       .then(data => setBooks(data))
    }, []);


    const booksList = books.map(book => (
        <div key={book.category}>
            <img src={book.imageLink} alt={book.title}/>
            <h3>{book.title}</h3>
            <p className='author'><span>Author: </span>{book.authors}</p>
            <p><span>Category: </span>{book.category.Genealogy}</p>
            

            <p>Price: {book.price}</p>
            <button>Add to Cart</button>   <button>Description</button>

        </div>
    ));



    return (
        <div>
            <h2>Genealogy Books</h2>
            {booksList}
        </div>
    )
}


export default Genealogy;