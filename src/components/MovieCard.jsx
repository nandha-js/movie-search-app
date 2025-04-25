import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
    return (
        <div className='border rounded shadow p-2'>
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                alt={movie.Title}
                className='w-full h-48 object-cover mb-2'
            />
            <h2 className='mt-2 font-bold'>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`} className='text-blue-500 hover:underline'>
                View Details
            </Link>
        </div>
    )
}

export default MovieCard