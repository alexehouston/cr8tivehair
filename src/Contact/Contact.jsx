import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Services text-center">
      <h1 className="w-25 mx-auto text-xl">Contact</h1>
      <div className="social mt-5 d-flex flex-column">
        <div className="d-flex justify-content-center w-25 mx-auto">
          <a
            href="https://instagram.com/cr8tivehair/"
            target="blank_"
            className="bg-dark-beige mb-0 mx-4 bg-beige p-3 rounded-pill hover-zoom d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faInstagram} className="fs-3" />
          </a>
          <a
            href="https://tiktok.com/cr8tivehair/"
            target="blank_"
            className="bg-dark-beige mb-0 mx-4 bg-beige p-3 rounded-pill hover-zoom d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faTiktok} className="fs-3" />
          </a>
        </div>
        <div className="mt-5">
          <span className="sub-head-font fs-5">
            Cr8tive Elements Hair Studio
          </span>
          <br />
          (Palette Collective, Studio 2)
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.53321755014!2d-111.89224532378421!3d33.53951984462872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0bf4a1ce9c05%3A0x71b1407cd43cb732!2sPalette%20Collective%20Coffee%20%26%20Co-Retail!5e0!3m2!1sen!2sus!4v1693252115047!5m2!1sen!2sus"
            className="w-25 h-100 m-3 shadow"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
          <a href="https://www.google.com/maps/place/Palette+Collective+Coffee+%26+Co-Retail/@33.5395198,-111.8922453,17z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x872b0bf4a1ce9c05:0x71b1407cd43cb732!2s8920+Talking+Stick+Way+A-2,+Scottsdale,+AZ+85250!2m2!1d-111.8896704!2d33.5395154!3m5!1s0x872b0bf4a1ce9c05:0x71b1407cd43cb732!8m2!3d33.5395154!4d-111.8896704!16s%2Fg%2F11f66snfqh?entry=ttu" target="blank_">
          8920 E Talking Stick Way A-2
          <br />
          Scottsdale, AZ 85250
          </a>
        </div>
      </div>
    </div>
  );
}
