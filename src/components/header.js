import React from "react";
import { Link } from "react-router-dom";
const Header = ({ name, contactEmail }) => {
  return (
    <div>
      <div className="header_container">
        <Link to="/">
          <h1>{name}.</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
