import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="home-inner d-flex justify-content-between align-items-center vh-100">
        <div className="text-start animate__animated animate__fadeInLeft animate__slower">
          <h2 className="hero">
            True beauty
            <br />
            starts with
            <br />
            self-care.
          </h2>
          <p className="hero-sub mb-0 text-uppercase opacity-50 fs-6 mt-4">
            Cr<span className="fw-bold">8</span>tive Elements
          </p>
        </div>
        <img
          className="pt-5 mt-5 h-100 animate__animated animate__fadeInUp animate__slower"
          src="/assets/21_transparent.png"
          alt=""
        />
      </div>
    </div>
  );
}
