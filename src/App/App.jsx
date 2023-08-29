import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Services from "../Services/Services";
import Work from "../Work/Work";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App bg-beige">
      <Nav />

      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/services" element={<div className="app-inner"><Services /></div>} />
        <Route path="/work" element={<div className="app-inner"><Work /></div>} />
        <Route path="/about" element={<div className="app-inner"><About /></div>} />
        <Route path="/contact" element={<div className="app-inner"><Contact /></div>} />
      </Routes>

      <Footer />
    </div>
  );
}
