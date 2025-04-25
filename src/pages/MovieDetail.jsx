import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../api/omdbService';
import FavoriteButton from '../components/FavoriteButton';
import { FaStar } from 'react-icons/fa';

function MovieDetail() {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getMovieDetails(imdbID);
                if (data.Response === 'True') {
                    setMovie(data);
                    setError('');
                } else {
                    setMovie(null);
                    setError(data.Error);
                }
            } catch {
                setError('An error occurred while fetching movie details.');
            }
        };

        fetchMovie();
    }, [imdbID]);

    if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;
    if (!movie) return (
        <div className="flex justify-center mt-10">
            <div className="spinner-border text-blue-500" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-6 max-w-4xl bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">{movie.Title}</h1>
            <div className="flex justify-center mb-6">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                    alt={movie.Title}
                    className="w-64 h-96 object-cover rounded-lg shadow-md"
                />
            </div>

            <div className="text-center mb-4">
                <FavoriteButton movie={movie} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Type:</strong> {movie.Type}</p>
                    <p className="flex items-center">
                        <strong>IMDb Rating:</strong>
                        <span className="flex items-center ml-2 text-yellow-500">
                            {movie.imdbRating} <FaStar className="ml-1" />
                        </span>
                    </p>
                    <p><strong>Votes:</strong> {movie.imdbVotes}</p>
                    <p><strong>Runtime:</strong> {movie.Runtime}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                </div>
                <div>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Writer:</strong> {movie.Writer}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                    <p><strong>Country:</strong> {movie.Country}</p>
                    <p><strong>Awards:</strong> {movie.Awards}</p>
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-inner">
                <h3 className="text-xl font-semibold mb-2">Plot:</h3>
                <p>{movie.Plot}</p>
            </div>
        </div>
    );
}

export default MovieDetail;
