import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Restaurent from "./pages/Restaurent";
import Gallery from "./pages/Gallery";
import Banquet from "./pages/Banquet";
import BookRes from "./pages/BookRes";
import Service from "./components/Service";

function App() {
  return (
    <>
      <div class="container-xxl bg-white p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/menu" element={<Restaurent />} /> */}
          <Route path="/benquet" element={<Banquet />} />
          <Route path="/book" element={<BookRes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/photo" element={<Gallery />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer />
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default App;
