import React from 'react';

function FavoriteButton({ movie }) {
    const addToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Movie added to favorites!');
        }
    };

    return (
        <button
            onClick={addToFavorites}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
        >
            Add to Favorites
        </button>
    );
}

export default FavoriteButton;
