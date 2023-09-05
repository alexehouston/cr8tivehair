import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav navbar fixed-top bg-beige animate__animated animate__fadeInDown animate__slow">
      <div className="container-fluid col-11">
        <div className="col-3 col-md-3 col-lg-4 d-flex justify-content-start text-uppercase text-center py-1">
          <Link to="/">
            <span className="logo head-font fs-3 lh-1">
              Cr<span className="fw-bold">8</span>tive Elements
            </span>
            <br />
            <span className="sub-logo text-xs">Hair Studio</span>
          </Link>
        </div>
        <div className="nav-links col-7 col-md-4 col-3 d-flex justify-content-between">
          <Link className="underline-animation" to="/services">
            Services
          </Link>
          <Link className="underline-animation" to="/work">
            Work
          </Link>
          <Link className="underline-animation" to="/team">
            Team
          </Link>
          <Link className="underline-animation" to="/contact">
            Contact
          </Link>
        </div>
        <div className="intake-form-btn-container col-md-3 col-lg-4">
          <div className="d-flex justify-content-end">
            <div className="intake-form-btn btn-hover bg-dark-beige sub-head-font px-3 py-1 rounded-pill">
              <span className="fs-5 pe-2">Intake Form</span>{" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
