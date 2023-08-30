import "./Work.css";

export default function Work() {
  return (
    <div className="Work text-center">
      <div className="position-relative animate__animated animate__fadeInUp animate__slow">
        <h1 className="w-25 mx-auto text-xl">Work</h1>
        <img
          className="sparkle-img position-absolute rotating"
          src="/assets/sparkle-orange.png"
          alt=""
        />
      </div>
      <div className="blob-5-container animate__animated animate__zoomIn animate__slow animate__delay-4s">
        <div className="blob-5 blob shadow"></div>
      </div>
      <div className="blob-6-container animate__animated animate__zoomIn animate__slow animate__delay-2s">
        <div className="blob-6 blob shadow"></div>
      </div>
      <div className="blob-7-container animate__animated animate__zoomIn animate__slow animate__delay-3s">
        <div className="blob-7 blob shadow"></div>
      </div>
      <div className="blob-8-container animate__animated animate__zoomIn animate__slow animate__delay-1s">
        <div className="blob-8 blob shadow"></div>
      </div>
      <div className="blob-9-container animate__animated animate__zoomIn animate__slow animate__delay-4s">
        <div className="blob-9 blob shadow"></div>
      </div>
      <div className="blob-10-container animate__animated animate__zoomIn animate__slow animate__delay-2s">
        <div className="blob-10 blob shadow"></div>
      </div>
    </div>
  );
}
