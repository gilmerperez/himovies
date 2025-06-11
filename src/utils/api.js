// Add error handling
// Add in-memory caching through memorizing genre maps
// Add define default parameters for consistency (page1, page2, etc)

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "516351753677be342aec94955927019f";

// * Main Fetch Function
export async function fetchFilteredContent(type = "movie", { page = 1, year = "", genre = "", country = "" } = {}) {
  let url = `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc`;

  if (year) url += `&${type === "movie" ? "primary_release_year" : "first_air_date_year"}=${year}`;
  if (genre) url += `&with_genres=${genre}`;
  if (country) url += `&region=${country}`;

  // Fetch data from TMDB API
  const response = await fetch(url);
  const json = await response.json();

  // Applies fetchGenreMap function so we know what genres are, instead of random numbers
  const genreMap = await fetchGenreMap(type);

  // Enrich results with more metadata
  const enriched = await Promise.all(
    json.results.map(async (item) => {
      if (type === "movie") {
        const { runtime, certification } = await fetchMovieDetails(item.id);
        return {
          ...item,
          runtime,
          certification,
          genre_names: item.genre_ids.map((id) => genreMap[id] || "Unknown"),
        };
      } else {
        const { number_of_seasons, first_air_date } = await fetchTVDetails(item.id);
        return {
          ...item,
          number_of_seasons,
          first_air_date,
          genre_names: item.genre_ids.map((id) => genreMap[id] || "Unknown"),
        };
      }
    })
  );

  return enriched;
}

// * Genre Map
async function fetchGenreMap(type = "movie") {
  const response = await fetch(`${BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  const map = {};

  for (const genre of data.genres) {
    map[genre.id] = genre.name;
  }

  return map;
}

// * Movies
export async function fetchMovies({ page = 1, year = "", genre = "", country = "" } = {}) {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc`;

  if (year) url += `&primary_release_year=${year}`;
  if (genre) url += `&with_genres=${genre}`;
  if (country) url += `&region=${country}`;

  const response = await fetch(url);
  const json = await response.json();
  const genreMap = await fetchGenreMap("movie");

  const enriched = await Promise.all(
    json.results.map(async (movie) => {
      const { runtime, certification } = await fetchMovieDetails(movie.id);
      return {
        ...movie,
        runtime,
        certification,
        genre_names: movie.genre_ids.map((id) => genreMap[id] || "Unknown"),
      };
    })
  );

  return enriched;
}

async function fetchMovieDetails(id) {
  const [detailsRes, ratingsRes] = await Promise.all([
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`),
    fetch(`${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`),
  ]);

  const details = await detailsRes.json();
  const ratings = await ratingsRes.json();

  const usRelease = ratings.results.find((r) => r.iso_3166_1 === "US");
  const certification = usRelease?.release_dates?.[0]?.certification || "NR";

  return {
    runtime: details.runtime,
    certification,
  };
}

export async function fetchMovieGenres() {
  return await fetchGenreMap("movie");
}

// * TV Shows
export async function fetchTVShows(page = 1) {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const json = await response.json();
  const genreMap = await fetchGenreMap("tv");

  const enriched = await Promise.all(
    json.results.map(async (show) => {
      const details = await fetchTVDetails(show.id);
      return {
        ...show,
        ...details,
        genre_names: show.genre_ids.map((id) => genreMap[id] || "Unknown"),
      };
    })
  );

  return enriched;
}

async function fetchTVDetails(id) {
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await res.json();

  return {
    number_of_seasons: data.number_of_seasons,
    first_air_date: data.first_air_date,
  };
}

export async function fetchTVGenres() {
  return await fetchGenreMap("tv");
}

// * Top Rated on IMDB
export async function fetchTopRatedMovies(page = 1) {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
  const json = await response.json();
  const genreMap = await fetchGenreMap("movie");

  const enriched = await Promise.all(
    json.results.map(async (movie) => {
      const { runtime, certification } = await fetchMovieDetails(movie.id);
      return {
        ...movie,
        runtime,
        certification,
        genre_names: movie.genre_ids.map((id) => genreMap[id] || "Unknown"),
        // Average audience rating
        audience_score: movie.vote_average,
        // Total number of votes
        vote_count: movie.vote_count,
      };
    })
  );

  return enriched;
}
