import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbarTwo.scss";
function NavbarTwo() {
  return (
    <nav id="navbartwo">
      <div className="logo">
        <p className="text">
          Pulse <span>.</span>
        </p>
      </div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/add" className="link">
          Add
        </Link>
        <Link className="link">Restaurant</Link>
        <Link className="link">News</Link>
        <Link className="link">Contact</Link>
        <Link to="/wishlist" className="link">
          Wishlist
        </Link>
      </div>
      <div className="contact">
        <p>Reservations </p>
        <FontAwesomeIcon icon={faPhone} />
        <span>652-345 3222 11</span>
      </div>
    </nav>
  );
}

export default NavbarTwo;
