import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import "./style.css";

function Navbar() {
  return (
    <Nav
      style={{ backgroundColor: "rgb(248, 235, 213)" }}
      className="navbar navbar-expand-md  navbar-dark pr-lg-1 pl-sm-5 justify-content-between"
    >
      <Link className="navbar-brand" to="/">
        Ben Gros
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-toggle"
        aria-controls="nav-content"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse nav-group " id="navbar-toggle">
        <ul className="navbar-nav ml-auto nav-group">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navbar;