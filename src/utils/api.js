const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "516351753677be342aec94955927019f";

// * Main Fetch Function
export async function fetchFilteredContent(
  type = "movie",
  { page = 1, year = "", genre = "", country = "" } = {},
  resultsPerPage = 52
) {
  const totalPagesNeeded = Math.ceil(resultsPerPage / 20); // TMDB returns 20 per page
  const genreMap = await fetchGenreMap(type);

  let results = [];
  let totalResults = 0;

  for (let i = 0; i < totalPagesNeeded; i++) {
    const apiPage = (page - 1) * totalPagesNeeded + i + 1;
    let url = `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&page=${apiPage}&sort_by=popularity.desc`;

    if (year) url += `&${type === "movie" ? "primary_release_year" : "first_air_date_year"}=${year}`;
    if (genre) url += `&with_genres=${genre}`;
    if (country) url += `&region=${country}`;

    const response = await fetch(url);
    const json = await response.json();

    if (i === 0) totalResults = json.total_results; // Only grab this once
    results.push(...json.results);
  }

  const enriched = await Promise.all(
    results.slice(0, resultsPerPage).map(async (item) => {
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

  return {
    results: enriched,
    totalResults,
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

// * Search Movies
export async function searchMovies(query) {
  if (!query) {
    return [];
  }

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&include_adult=false`
  );

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

// * Search TV Shows
export async function searchTVShows(query) {
  if (!query) {
    return [];
  }

  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&include_adult=false`
  );

  const json = await response.json();
  const genreMap = await fetchGenreMap("tv");

  const enriched = await Promise.all(
    json.results.map(async (tvShow) => {
      const { episode_run_time } = await fetchTVShowDetails(tvShow.id);
      return {
        ...tvShow,
        runtime: episode_run_time?.[0] || 0, // fallback in case it's empty
        genre_names: tvShow.genre_ids.map((id) => genreMap[id] || "Unknown"),
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

async function fetchTVShowDetails(id) {
  const response = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return {
    episode_run_time: data.episode_run_time || [],
  };
}

export async function fetchTVGenres() {
  return await fetchGenreMap("tv");
}

// * Top Rated on IMDB
export async function fetchTopRatedMovies(page = 1, signal) {
  const API_KEY = "516351753677be342aec94955927019f";
  const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated";

  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    page: page.toString(),
  });

  const url = `${BASE_URL}?${params.toString()}`;
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error("Failed to fetch top rated movies");

  const data = await response.json();
  const enrichedResults = await Promise.all(
    data.results.map(async (movie) => {
      try {
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US&append_to_response=release_dates`,
          { signal }
        );
        const details = await detailsResponse.json();

        // Extract certification from US release data
        const certification =
          details.release_dates?.results?.find((r) => r.iso_3166_1 === "US")?.release_dates?.[0]?.certification ||
          "N/A";

        return {
          ...movie,
          runtime: details.runtime,
          genre_names: details.genres.map((g) => g.name),
          certification,
        };
      } catch (err) {
        console.warn(`Failed to enrich movie ID ${movie.id}`, err);
        return { ...movie, runtime: 0, genre_names: [], certification: "N/A" };
      }
    })
  );

  return {
    results: enrichedResults,
    totalResults: data.total_results,
  };
}

// * In-Depth Media Details
export async function fetchMediaDetails(type = "movie", id) {
  const detailRes = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US`);
  const creditsRes = await fetch(`${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`);
  const videosRes = await fetch(`${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`);

  const details = await detailRes.json();
  const credits = await creditsRes.json();
  const videos = await videosRes.json();

  // Get the link for YouTube trailer
  const trailer = videos.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");

  // Get the first 6 cast members
  const cast = credits.cast.slice(0, 6).map((member) => member.name);

  // Get directors and producers
  const crew = credits.crew;
  const directors = crew.filter((member) => member.job === "Director").map((person) => person.name);
  const producers = crew.filter((member) => member.job === "Producer").map((person) => person.name);

  return {
    cast,
    directors,
    producers,
    id: details.id,
    overview: details.overview,
    vote_count: details.vote_count,
    poster_path: details.poster_path,
    trailer_key: trailer?.key || null,
    vote_average: details.vote_average,
    title: details.title || details.name,
    backdrop_path: details.backdrop_path,
    genres: details.genres.map((genre) => genre.name),
    number_of_seasons: details.number_of_seasons || null,
    release_date: details.release_date || details.first_air_date,
    country: details.production_countries?.[0]?.name || "Unknown",
    runtime: details.runtime || details.episode_run_time?.[0] || null,
    trailer_link: trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null,
  };
}
