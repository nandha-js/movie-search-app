import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function FavoriteButton({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const exists = storedFavorites.some((fav) => fav.imdbID === movie.imdbID);
        setIsFavorite(exists);
    }, [movie.imdbID]);

    const toggleFavorite = () => {
        let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorite) {
            // Remove from favorites
            storedFavorites = storedFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
            setIsFavorite(false);
            alert('Removed from favorites');
        } else {
            // Add to favorites
            storedFavorites.push(movie);
            setIsFavorite(true);
            alert('Added to favorites');
        }

        localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    };

    return (
        <button
            onClick={toggleFavorite}
            className={`flex items-center gap-2 px-4 py-2 rounded-md shadow-md transition 
                        ${isFavorite ? 'bg-red-600 text-white' : 'bg-gray-200 text-black hover:bg-red-500 hover:text-white'}`}
        >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
            {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
        </button>
    );
}

export default FavoriteButton;
