const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p";

function getHeaders() {
  return { Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` };
}

async function tmdbGet(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("language", "es-ES");
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v));
  }
  const res = await fetch(url.toString(), {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`TMDB ${res.status} en ${path}`);
  return res.json();
}

function posterUrl(path) {
  return path ? `${IMAGE_BASE}/w500${path}` : null;
}

function backdropUrl(path) {
  return path ? `${IMAGE_BASE}/original${path}` : null;
}

function formatDuration(minutes) {
  if (!minutes) return null;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function roundRating(value) {
  return Math.round(value * 10) / 10;
}

async function fetchGenreMap(type) {
  const data = await tmdbGet(`/genre/${type}/list`);
  return new Map(data.genres.map((g) => [g.id, g.name]));
}

function normalizeListMovie(item, genreMap) {
  return {
    id: item.id.toString(),
    name: item.title,
    category: genreMap.get(item.genre_ids?.[0]) ?? "—",
    type: "movie",
    image: {
      poster: posterUrl(item.poster_path),
      backdrop: backdropUrl(item.backdrop_path),
    },
    details: {
      duration: null,
      cast: [],
      description: item.overview,
      rating: roundRating(item.vote_average),
    },
  };
}

function normalizeListShow(item, genreMap) {
  return {
    id: item.id.toString(),
    name: item.name,
    category: genreMap.get(item.genre_ids?.[0]) ?? "—",
    type: "show",
    image: {
      poster: posterUrl(item.poster_path),
      backdrop: backdropUrl(item.backdrop_path),
    },
    details: {
      duration: null,
      cast: [],
      description: item.overview,
      rating: roundRating(item.vote_average),
    },
  };
}

function normalizeMovieDetail(item) {
  return {
    id: item.id.toString(),
    name: item.title,
    category: item.genres?.[0]?.name ?? "—",
    type: "movie",
    image: {
      poster: posterUrl(item.poster_path),
      backdrop: backdropUrl(item.backdrop_path),
    },
    details: {
      duration: formatDuration(item.runtime),
      cast: item.credits?.cast?.slice(0, 5).map((a) => a.name) ?? [],
      description: item.overview,
      rating: roundRating(item.vote_average),
    },
  };
}

function normalizeShowDetail(item) {
  const s = item.number_of_seasons;
  return {
    id: item.id.toString(),
    name: item.name,
    category: item.genres?.[0]?.name ?? "—",
    type: "show",
    image: {
      poster: posterUrl(item.poster_path),
      backdrop: backdropUrl(item.backdrop_path),
    },
    details: {
      duration: s ? `${s} Temporada${s > 1 ? "s" : ""}` : null,
      cast: item.credits?.cast?.slice(0, 5).map((a) => a.name) ?? [],
      description: item.overview,
      rating: roundRating(item.vote_average),
    },
  };
}

export async function getMovies() {
  const [data, genreMap] = await Promise.all([
    tmdbGet("/movie/popular"),
    fetchGenreMap("movie"),
  ]);
  return data.results.map((item) => normalizeListMovie(item, genreMap));
}

export async function getShows() {
  const [data, genreMap] = await Promise.all([
    tmdbGet("/tv/popular"),
    fetchGenreMap("tv"),
  ]);
  return data.results.map((item) => normalizeListShow(item, genreMap));
}

export async function getMovieById(id) {
  const data = await tmdbGet(`/movie/${id}`, { append_to_response: "credits" });
  return normalizeMovieDetail(data);
}

export async function getShowById(id) {
  const data = await tmdbGet(`/tv/${id}`, { append_to_response: "credits" });
  return normalizeShowDetail(data);
}

export async function getTopRatedMedia(limit = 5) {
  const [moviesData, showsData, mGenres, tGenres] = await Promise.all([
    tmdbGet("/movie/top_rated"),
    tmdbGet("/tv/top_rated"),
    fetchGenreMap("movie"),
    fetchGenreMap("tv"),
  ]);
  return [
    ...moviesData.results.map((m) => normalizeListMovie(m, mGenres)),
    ...showsData.results.map((s) => normalizeListShow(s, tGenres)),
  ]
    .sort((a, b) => b.details.rating - a.details.rating)
    .slice(0, limit);
}

export async function getMostRatedMedia() {
  const top = await getTopRatedMedia(1);
  return top[0];
}

export async function getGenres(type) {
  const data = await tmdbGet(`/genre/${type}/list`);
  return data.genres;
}

export async function getMoviesByGenre(genreId) {
  const [data, genreMap] = await Promise.all([
    tmdbGet("/discover/movie", { with_genres: genreId }),
    fetchGenreMap("movie"),
  ]);
  return data.results.map((item) => normalizeListMovie(item, genreMap));
}

export async function getShowsByGenre(genreId) {
  const [data, genreMap] = await Promise.all([
    tmdbGet("/discover/tv", { with_genres: genreId }),
    fetchGenreMap("tv"),
  ]);
  return data.results.map((item) => normalizeListShow(item, genreMap));
}

