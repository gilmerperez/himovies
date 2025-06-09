const API_KEY = "516351753677be342aec94955927019f";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchLatestMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movies.");
  }

  const data = await res.json();
  return data.results;
}
