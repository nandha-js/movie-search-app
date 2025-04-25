import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
            
            {/* Display a message when no favorites are found */}
            {favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
