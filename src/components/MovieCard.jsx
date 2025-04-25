import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

function MovieCard({ movie }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/movie/${movie.imdbID}`}>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                    alt={movie.Title}
                    className="w-full h-72 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{movie.Title}</h2>
                    <p className="text-gray-600">{movie.Year} • {movie.Type}</p>
                </div>
            </Link>

            {/* Favorite Button */}
            <div className="p-4 pt-0">
                <FavoriteButton movie={movie} />
            </div>
        </div>
    );
}

export default MovieCard;
