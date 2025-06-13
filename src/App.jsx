import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TopIMDB from "./pages/TopIMDB";
import Contact from "./pages/Contact";
import TVShows from "./pages/TVShows";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import MediaDetail from "./components/MediaDetail/MediaDetail";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";

// Redirect Top IMDB detail routes
function RedirectTopIMDB() {
  const { id } = useParams();
  return <Navigate to={`/movie/${id}`} replace />;
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Static Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/top-imdb" element={<TopIMDB />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* Dynamic Detail Pages */}
          <Route path="/movie/:id" element={<MediaDetail mediaType="movie" />} />
          <Route path="/tv-show/:id" element={<MediaDetail mediaType="tv" />} />
          <Route path="/top-imdb/:id" element={<RedirectTopIMDB />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
