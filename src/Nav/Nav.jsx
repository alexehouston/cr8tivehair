import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  return (
    <>
      <nav className="Nav navbar bg-beige fixed-top animate__animated animate__fadeInDown animate__slow">
        <div className="container-fluid">
          <Link className="navbar-brand text-center d-flex flex-column" to="/">
            <span className="head-font fs-3 lh-1">
              CR<b>8</b>TIVE ELEMENTS
            </span>
            <span className="sub-logo text-xs">HAIR STUDIO</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end bg-beige"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-3" id="offcanvasNavbarLabel">
            CR<b>8</b>TIVE ELEMENTS
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav h-100 justify-content-between flex-grow-1">
            <div>
              <li className="nav-item mb-5">
                <a
                  href="https://form.jotform.com/232666066036053"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="intake-form-btn btn-hover bg-dark-beige sub-head-font px-3 pb-1 pt-2 rounded-pill text-center">
                    <span className="head-font fs-5 pe-2">Intake Form</span>{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="chevron-icon"
                    />
                  </div>
                </a>
              </li>
              <li className="nav-item py-2">
                <Link className="underline-animation" to="/services">
                  Service Menu
                </Link>
              </li>
              <li className="nav-item py-2">
                <Link className="underline-animation" to="/work">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item py-2">
                <Link className="underline-animation" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item py-2">
                <Link className="underline-animation" to="/policies">
                  Salon Policy
                </Link>
              </li>
              <li className="nav-item py-2">
                <Link className="underline-animation" to="/contact">
                  Contact
                </Link>
              </li>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-around w-50">
                <a
                  href="https://instagram.com/cr8tivehair/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="fs-4 pb-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@cr8tivehair"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTiktok} className="fs-4 pb-4" />
                </a>
              </div>
              <p className="body-font m-0 text-xs text-center">
                <span className="fw-bold">&copy;</span> cr8tive elements - all
                rights reserved
              </p>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
