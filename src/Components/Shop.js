import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import { getBooks } from "./db.json";

function Shop () {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    //fetch books from db.json
    useEffect(() => {
        fetch('http://localhost:4000/books')
           .then(response => response.json())
           .then(data => setBooks(data))
           .catch(error => console.error('Error:', error));
    }, []);

    const [categories, setCategories] = useState('All');

    const handleCategoriesChange = (category) => {
        setCategories(category);
        if (category === 'All') {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(books.filter(book => book.category === category));
        }
    };

    return (
        <div>
            <h2>Shop</h2>
            <filter onFilter={filterBooks} onSort={sortBooks} />
            <div id="book-list">
                {filteredBooks.map(book => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Shop;