import React from 'react';

function Favorites({ favorites, onRemoveFromFavorites }) {

    //this component displays the boooks available in the favorites list
    return (
        <div className="favorites">
              <h2>My Favorites</h2>
         
            {favorites.length === 0 ? (
                <p>You have no favorite books yet.</p>
            ) : (
                <div className="books-grid"> 
                    {favorites.map((book) => (
                        <div key={book.id} className="book-card"> 
                            <img src={book.imageLink} alt={book.title} />
                            <h3>{book.title}</h3>
                            <button   
                            className="remove2"
                            onClick={() => onRemoveFromFavorites(book.id)}>Remove from Favorites</button>
                        </div>
                    ))}
                </div>
            )}
           
        </div>
    );
}

export default Favorites;
