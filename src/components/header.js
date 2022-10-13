import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = ({ name, contactEmail }) => {
  const location = useLocation();

  return (
    <div>
      <div className="header_container">
        <Link to="/">
          <h1>{name}.</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/skills" ? "active" : ""
                }`}
                to="/skills"
              >
                showcase
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
