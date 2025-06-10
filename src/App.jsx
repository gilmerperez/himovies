import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TopIMDB from "./pages/TopIMDB";
import Contact from "./pages/Contact";
import TVShows from "./pages/TVShows";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TermsOfService from "./pages/TermsOfService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/top-imdb" element={<TopIMDB />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
