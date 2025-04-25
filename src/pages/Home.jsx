import { useState, useEffect } from 'react';
import { searchMovies } from '../api/omdbService';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [filterType, setFilterType] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await searchMovies(searchTerm, page, filterType);
            if (response.Response === 'True') {
                setMovies(response.Search);
                setTotalResults(Number(response.totalResults));
                setError('');
            } else {
                setMovies([]);
                setTotalResults(0);
                setError(response.Error);
            }
        } catch {
            setError('An error occurred while fetching movies.');
        }
        setLoading(false);
    };

    useEffect(() => {
        if (searchTerm) {
            handleSearch();
        }
    }, [searchTerm, page, filterType]);

    const totalPages = Math.ceil(totalResults / 10);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gradient mb-8">Movie Search App</h1>

                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={handleSearch}
                />
                <FilterDropdown filterType={filterType} setFilterType={setFilterType} />

                {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading ? (
                        <div className="flex justify-center col-span-full">
                            <div className="spinner-border text-blue-500" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))
                    )}
                </div>

                {totalResults > 10 && !loading && (
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                    />
                )}
            </div>
        </div>
    );
}

export default Home;
