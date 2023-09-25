import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Services from "../Services/Services";
import Work from "../Work/Work";
import Team from "../Team/Team";
import Policies from "../Policies/Policies";
import Contact from "../Contact/Contact";
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

      <div className="vh-100 d-flex justify-content-center">
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/team" element={<Team />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
