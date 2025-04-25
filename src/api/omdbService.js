const API_KEY = "96a95c5b";
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = "") => {
  const url = `${BASE_URL}?i=tt3896198&apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`;
  // console.log(url);
  const res = await fetch(url);
  return res.json();
};
export const getMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}`;
  console.log(url);
  const res = await fetch(url);
  return res.json();
};

// searchMovies("Sivaji").then((data) => console.log(data));
// getMovieDetails("tt0479751").then((data) => console.log(data));
