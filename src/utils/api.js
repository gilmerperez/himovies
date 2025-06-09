const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "516351753677be342aec94955927019f";

export async function fetchMovies(page = 1) {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
  const json = await response.json();
  const genreMap = await fetchGenreMap();

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

async function fetchGenreMap() {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  const map = {};

  for (const genre of data.genres) {
    map[genre.id] = genre.name;
  }

  return map;
}
