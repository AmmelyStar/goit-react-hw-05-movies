import axios from 'axios';

const API_KEY = 'e31eaaf260ec0a76b88e1d1e887ef52e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const getMovieId = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const fetchSearchMovies = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};