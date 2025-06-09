const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "516351753677be342aec94955927019f";

async function fetchMovies(page = 1) {
  let data = [];

  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const json = await response.json();
    data = json.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
  return data;
}

export default fetchMovies;
