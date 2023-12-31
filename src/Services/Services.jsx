import "./Services.css";

export default function Services() {
  return (
    <div className="Services text-center d-flex justify-content-around align-items-center col-12 col-lg-10">
      <div className="col-12 col-lg-4 hair-img shadow animate__animated animate__fadeInLeft animate__slower animate__delay-1s">
        <img src="/assets/5.jpeg" alt="" />
      </div>
      <div className="flex-column justify-content-center col-10 col-lg-4">
        <div className="animate__animated animate__fadeInUp animate__slow">
          <h1 className="mx-auto text-xl">Service Menu</h1>
        </div>
        <div className="service-menu d-flex justify-content-between mx-auto mt-5 animate__animated animate__fadeInUp animate__slower">
          <div className="d-flex flex-column text-start text-uppercase">
            <p>Customized Blonding<br />(Highlights/Balayage)</p>
            <p>Custom All Over Color</p>
            <p>Grey Coverage<br />(Root Retouch)</p>
            <p>Gloss/Toner</p>
            <p>Brazilian Blowout</p>
            <p>Luxury Blowout</p>
            <p>Women&apos;s Haircut</p>
            <p>Men&apos;s Haircut</p>
            <p>Extension Install</p>
            <p>Extension Move-Up</p>
            <p>Extension Removal</p>
            <p>Add-On Blowout</p>
          </div>
          <div className="d-flex flex-column text-end fw-bold">
            <p>Price Varies</p>
            <p>$175+</p>
            <p>$85</p>
            <p>$50</p>
            <p>$250+</p>
            <p>$60</p>
            <p>$80</p>
            <p>$50</p>
            <p>Consultation Required</p>
            <p>$300+</p>
            <p>$50</p>
            <p>$40</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 hair-img shadow animate__animated animate__fadeInRight animate__slower animate__delay-1s">
        <img src="/assets/6.jpeg" alt="" />
      </div>
    </div>
  );
}
