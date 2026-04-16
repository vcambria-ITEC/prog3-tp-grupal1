import data from './movie-data.json';

export const getMovies = () => data.media.filter(item => item.type === 'movie');

export const getShows = () => data.media.filter(item => item.type === 'show');

export const getMediaById = (id) => data.media.find(item => item.id === id);

export const getMediaByCategory = (category) => 
  data.media.filter(item => item.category.toLowerCase() === category.toLowerCase());

export const getMostRatedMedia = () => data.media.reduce((max, item) => item.details.rating > max.details.rating ? item : max);

export const getTopFiveMedia = () => 
  [...data.media]
    .sort((a, b) => b.details.rating - a.details.rating)
    .slice(0, 5);