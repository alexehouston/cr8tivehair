import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav navbar fixed-top">
      <div className="container-fluid col-11">
        <Link to="/services">Services</Link>
        <Link to="/work">Work</Link>
        <div className="logo text-center py-2">
          <Link to="/">Cr8tive Elements<br /><span className="sub-logo">Hair Studio</span></Link>
        </div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
