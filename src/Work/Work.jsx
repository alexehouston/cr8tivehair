import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import "./Work.css";

export default function Work() {
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
    <div className="Work text-center vw-100">
      {isSmallScreen ? (
        <>
        <Carousel fade className="col-12 mt-5 animate__animated animate__fadeIn animate__slow animate__delay-1s">
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/1.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
          <img
            className="carousel-img"
            src="/assets/2.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/18.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
          <img
            className="carousel-img"
            src="/assets/3.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/7.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
          <img
            className="carousel-img"
            src="/assets/4.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/15.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
          <img
            className="carousel-img"
            src="/assets/6.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
      </Carousel>
        <Carousel fade className="mt-4 animate__animated animate__fadeIn animate__slow animate__delay-2s">
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/13.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/8.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/9.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/14.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/20.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/11.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/17.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/15.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
        </Carousel>
        </>
      ) : (
        <Carousel fade className="vw-100 mt-5 animate__animated animate__fadeIn animate__slower">
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/1.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/2.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/3.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/4.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/7.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/9.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/assets/6.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
            <img
              className="carousel-img"
              src="/assets/20.jpeg"
              alt="Cr8tive Elements Hair Studio"
            />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
}
