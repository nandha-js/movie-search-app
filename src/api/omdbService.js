const API_KEY = "96a95c5b"; 
const BASE_URL = "https://www.omdbapi.com/"; // ✅ HTTPS

export const searchMovies = async (query, page = 1, type = "") => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
