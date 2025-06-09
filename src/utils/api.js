const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "516351753677be342aec94955927019f";

// * Movies
export async function fetchMovies(page = 1) {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
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
