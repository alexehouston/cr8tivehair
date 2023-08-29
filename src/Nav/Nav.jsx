import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav navbar fixed-top bg-beige animate__animated animate__fadeInDown animate__slow">
      <div className="container-fluid col-11">
        <Link className="underline-animation" to="/services">Services</Link>
        <Link className="underline-animation" to="/work">Work</Link>
        <div className="logo text-uppercase text-center py-2">
          <Link to="/">Cr<span className="fw-bold">8</span>tive Elements<br /><span className="sub-logo text-xs">Hair Studio</span></Link>
        </div>
        <Link className="underline-animation" to="/about">About</Link>
        <Link className="underline-animation" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
