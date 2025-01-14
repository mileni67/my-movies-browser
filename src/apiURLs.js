export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
export const IMAGE_SIZES = {
  small: `${IMAGE_BASE_URL}/w300`, // Малий розмір
  large: `${IMAGE_BASE_URL}/w1280`, // Великий розмір
};
const API_BASE_URL = "https://api.themoviedb.org/3";

export const ENDPOINTS = {
  movies: `${API_BASE_URL}/discover/movie`, // Фільми
  genres: `${API_BASE_URL}/genre/movie/list`, // Жанри
  details: (movieId) => `${API_BASE_URL}/movie/${movieId}`, // Деталі фільму
  credits: (movieId) => `${API_BASE_URL}/movie/${movieId}/credits`, // Актори та знімальна група
  searchMovie: `${API_BASE_URL}/search/movie`, // Пошук фільмів
  people: `${API_BASE_URL}/person/popular`, // Популярні люди
  searchPeople: `${API_BASE_URL}/search/person`, // Пошук людей
  detailPerson: (personId) => `${API_BASE_URL}/person/${personId}`, // Деталі людини
  personCredits: (personId) =>
    `${API_BASE_URL}/person/${personId}/combined_credits`, // Роботи людини
};

// Функція для отримання стандартних заголовків з авторизацією
export const getAuthorizationHeaders = () => ({
  accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`, // Токен з .env
});
