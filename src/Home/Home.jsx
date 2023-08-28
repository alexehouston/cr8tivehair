import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="intake-form-btn position-absolute shadow px-4 py-2 rounded-pill sub-head-font">
        <span className="fs-5 pe-2">Intake Form</span> <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}
