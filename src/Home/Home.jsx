import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="intake-form-btn position-absolute hover-float sub-head-font">
        <div className="px-4 py-2 rounded-pill shadow animate__animated animate__fadeInRight animate__slow">
          <span className="fs-5 pe-2">Intake Form</span>{" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}
