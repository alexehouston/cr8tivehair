import "./Team.css";

export default function Team() {
  return (
    <>
      <div className="Team text-center w-25 mx-auto animate__animated animate__fadeInUp animate__slow">
        <h1 className="text-xl">Our Team</h1>
        <p className="mt-5 fs-6">
          Welcome to Cr8tive Elements Hair Studio, where we&apos;re dedicated to
          elevating your natural beauty, redefining your style, and providing an
          indulgent self-care experience.
          <br />
          <br />
          At Cr8tive Elements, we&apos;re committed to the principles of
          self-love and self-care, which are at the core of our services. Our
          mantra is to empower you to prioritize self-care and enjoy pampering
          treatments that leave you looking and feeling your absolute best.
          <br />
          <br />
          Our team specializes in creating custom colors, achieving stunning
          blondes, and enhancing your natural hair with luxury hair extensions.
          So whether you&apos;re seeking a transformation or a relaxing blowout,
          our stylists are here to help you look and feel fabulous.
          <br />
          <br />
          Our stylists bring years of experience and creativity to every
          appointment and with a focus on delivering excellence in both style
          and service, we&apos;re excited to be a part of your self-care
          journey.
        </p>
      </div>
      <div className="blob-11-container animate__animated animate__zoomIn animate__slow animate__delay-1s">
        <div className="blob-11 blob shadow position-relative"></div>
        <div className="elia text-center position-absolute lh-1">
          <h3 className="sub-head-font fw-bold">Elia</h3>
          <p>Stylist</p>
        </div>
      </div>
      <div className="blob-12-container animate__animated animate__zoomIn animate__slow animate__delay-2s">
        <div className="blob-12 blob shadow position-relative"></div>
        <div className="lily text-center position-absolute lh-1">
          <h3 className="sub-head-font fw-bold">Lily</h3>
          <p>Owner / Stylist</p>
        </div>
      </div>
    </>
  );
}
