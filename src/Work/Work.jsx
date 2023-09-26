import Carousel from "react-bootstrap/Carousel";
import "./Work.css";

export default function Work() {
  return (
    <div className="Work text-center vw-100">
      <Carousel
        fade
        className="vw-100 mt-5 animate__animated animate__fadeIn animate__slower"
      >
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/7.jpeg"
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
            src="/assets/10.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/11.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
          <img
            className="carousel-img"
            src="/assets/12.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/assets/13.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
          <img
            className="carousel-img"
            src="/assets/14.jpeg"
            alt="Cr8tive Elements Hair Studio"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
