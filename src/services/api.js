import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTc4ODg1YTZiYzZhYjRjZDllMmY4ODQyNTM3YzJmMiIsIm5iZiI6MTcyNzQxOTg1OC41OTk2MTIsInN1YiI6IjY2ZjY1NTM1ODU2MzNiZjkyMjk2NTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rxkbAPWW1zyQMfcYu--EPM-yikhnVMsdrs5skpogm0'
  }
};


export const fetchTrendMovies = async () => {
  const {data} = await axios.get('trending/movie/week?language=en-US', options);
  return data.results;
}

export const fetchSearchMovie = async (qeury) => {
  const {data} = await axios.get(`search/movie?query=${qeury}&include_adult=false&language=en-US&page=1`, options);
  return data.results;
}
export const fetchMovieDetails = async (id) => {
  const {data} = await axios.get(`movie/${id}?language=en-US`, options);
  return data;
}
export const fetchMovieCast = async (id) => {
  const {data} = await axios.get(`movie/${id}/credits?language=en-US`, options);
  return data;
}
export const fetchMovieReviews = async (id) => {
  const {data} = await axios.get(`movie/${id}/reviews?language=en-US`, options);
  return data;
}
