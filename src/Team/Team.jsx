import { useState, useEffect } from "react";
import "./Team.css";

export default function Team() {
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
    <>
      <div className="Team text-center d-flex justify-content-around align-items-center col-lg-8 mx-auto">
        <div className="lily col-lg-3 text-center lh-1 animate__animated animate__fadeInDown animate__slow animate__delay-2s">
          <h3 className="sub-head-font fw-bold">Lily</h3>
          <span>Owner / Stylist</span>
          <div className="hair-img">
            <img
              className="mt-3 rounded w-100"
              src="/assets/lily.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="flex-column col-lg-4">
          <div className="animate__animated animate__fadeInUp animate__slow">
            <h1 className="text-xl mx-auto">Our Team</h1>
          </div>
          {isSmallScreen && (
            <div className="team-inner d-flex">
              <div className="col-5 mx-auto text-center lh-1 animate__animated animate__fadeInDown animate__slow animate__delay-2s">
                <img
                  className="w-50 mb-3 rounded"
                  src="/assets/lily.jpeg"
                  alt=""
                />
                <h3 className="sub-head-font fw-bold">Lily</h3>
                <span>Owner / Stylist</span>
              </div>
              <div className="col-5 mx-auto text-center lh-1 animate__animated animate__fadeInDown animate__slow animate__delay-2s">
                <img
                  className="w-50 mb-3 rounded"
                  src="/assets/elia.jpeg"
                  alt=""
                />
                <h3 className="sub-head-font fw-bold">Elia</h3>
                <span>Stylist</span>
              </div>
            </div>
          )}
          <p className="mx-auto mt-5 animate__animated animate__fadeInUp animate__slower">
            Welcome to <b>Cr8tive Elements Hair Studio</b>, where we&apos;re
            dedicated to elevating your natural beauty, redefining your style,
            and providing an indulgent self-care experience.
            <br />
            <br />
            At Cr8tive Elements, we&apos;re committed to the principles of
            self-love and self-care, which are at the core of our services. Our
            mantra is to empower you to prioritize self-care and enjoy pampering
            treatments that leave you looking and feeling your absolute best.
            <br />
            <br />
            Our team specializes in creating custom colors, achieving stunning
            blondes, and enhancing your natural hair with luxury hair
            extensions. So whether you&apos;re seeking a transformation or a
            relaxing blowout, our stylists are here to help you look and feel
            fabulous.
            <br />
            <br />
            Our stylists bring years of experience and creativity to every
            appointment and with a focus on delivering excellence in both style
            and service, we&apos;re excited to be a part of your self-care
            journey.
          </p>
        </div>
        <div className="elia col-lg-3 text-center lh-1 animate__animated animate__fadeInUp animate__slow animate__delay-1s">
          <div className="hair-img">
            <img
              className="mt-3 rounded w-100"
              src="/assets/elia.jpeg"
              alt=""
            />
          </div>
          <h3 className="sub-head-font fw-bold mt-3">Elia</h3>
          <span>Stylist</span>
        </div>
      </div>
    </>
  );
}
