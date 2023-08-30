import "./Services.css";

export default function Services() {
  return (
    <div className="Services text-center">
      <div className="position-relative animate__animated animate__fadeInUp animate__slow">
        <h1 className="w-25 mx-auto text-xl">Services</h1>
        <img
          className="sparkle-img position-absolute rotating "
          src="/assets/sparkle-orange.png"
          alt=""
        />
      </div>
      <div className="service-menu d-flex justify-content-between mx-auto mt-5 animate__animated animate__fadeInUp animate__slower">
        <div className="d-flex flex-column text-start">
          <p>Customized Blonding</p>
          <p>Transformative Highlights / Balayage</p>
          <p>Silver Strand Transformation</p>
          <p>Retouch & Rinse</p>
          <p>Gloss/Toner Revival</p>
          <p>Brazilian Blowout</p>
          <p>Luxury Blowout</p>
          <p>Women&apos;s Haircut</p>
          <p>Men&apos;s Haircut</p>
          <p>Extension Install</p>
          <p>Extension Removal</p>
          <p>Add-On Blowout</p>
        </div>
        <div className="d-flex flex-column text-end fw-bold">
          <p>$220</p>
          <p>Price Varies</p>
          <p>$125</p>
          <p>$85</p>
          <p>$50</p>
          <p>$250 +</p>
          <p>$60</p>
          <p>$80</p>
          <p>$50</p>
          <p>Consultation Required</p>
          <p>$50</p>
          <p>$40</p>
        </div>
      </div>
      <div className="blob-3-container animate__animated animate__zoomIn animate__slow animate__delay-2s">
        <div className="blob-3 blob shadow"></div>
      </div>
      <div className="blob-4-container animate__animated animate__zoomIn animate__slow animate__delay-3s">
        <div className="blob-4 blob shadow"></div>
      </div>
    </div>
  );
}
