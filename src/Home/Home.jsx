import { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth <= 850);
    };

    window.addEventListener("resize", updateWindowDimensions);

    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div className="Home">
      <div className="home-inner d-flex justify-content-between align-items-center vh-100">
        <div className="hero-container text-white text-center text-start animate__animated animate__fadeInUp animate__slower">
          <h2 className="hero">Cr8tive Elements Hair Studio</h2>
          <p className="hero-sub mb-0 text-uppercase">
            True beauty starts with self care.
          </p>
        </div>
        <div
          className="carousel slide carousel-fade vw-100 position-absolute start-0 animate__animated animate__fadeIn animate__slower"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src={isSmallScreen ? '/assets/home-1-mobile.png' : '/assets/home-1.png'}
                className="d-block w-100"
                alt="Cr8tive Elements Hair Studio"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src={isSmallScreen ? '/assets/home-2-mobile.png' : '/assets/home-2.png'}
                className="d-block w-100"
                alt="Cr8tive Elements Hair Studio"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src={isSmallScreen ? '/assets/home-3-mobile.png' : '/assets/home-3.png'}
                className="d-block w-100"
                alt="Cr8tive Elements Hair Studio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
