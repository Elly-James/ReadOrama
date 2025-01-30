import React from 'react';

function Favorites({ favorites, onRemoveFromFavorites }) {
    return (
        <div className="favorites">
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
                <p>You have no favorite books yet.</p>
            ) : (
                <div className="books-grid"> {/* Or whatever layout you want */}
                    {favorites.map((book) => (
                        <div key={book.id} className="favorite-item"> {/* Style as needed */}
                            <img src={book.imageLink} alt={book.title} />
                            <h3>{book.title}</h3>
                            <button onClick={() => onRemoveFromFavorites(book.id)}>Remove from Favorites</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
