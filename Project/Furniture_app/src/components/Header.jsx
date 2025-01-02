import React from "react";
import "../assets/images/user.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark position-sticky z-3 top-0"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Furni<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item ">
              <Link className="nav-link active " to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link active" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link active" to="/about">
                About us
              </Link>
            </li>
            <li>
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <Link className="nav-link active" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                {/* <img src="images/user.svg" /> */}
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                {/* <img src="images/cart.svg" /> */}
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
