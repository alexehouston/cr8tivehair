import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav navbar fixed-top">
      <div className="container-fluid col-11">
        <Link className="underline-animation" to="/services">Services</Link>
        <Link className="underline-animation" to="/work">Work</Link>
        <div className="logo text-uppercase text-center py-2 underline-animation">
          <Link to="/">Cr8tive Elements<br /><span className="sub-logo text-xs">Hair Studio</span></Link>
        </div>
        <Link className="underline-animation" to="/about">About</Link>
        <Link className="underline-animation" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
