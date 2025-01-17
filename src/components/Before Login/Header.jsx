import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                123 Street, India
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                itsmytrip@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a
                href="https://twitter.com"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a
                href="https://facebook.com"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a
                href="https://linkedin.com"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a
                href="https://instagram.com"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a
                href="https://youtube.com"
                className="btn btn-sm btn-outline-light btn-sm-square"
              >
                <i className="fab fa-youtube fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              It's My Trip
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/services" className="nav-item nav-link">
                Services
              </Link>
              <Link to="/packages" className="nav-item nav-link">
                Packages
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/destination" className="dropdown-item">
                    Destination
                  </Link>
                  <Link to="/booking" className="dropdown-item">
                    Booking
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Travel Guides
                  </Link>
                  <Link to="/Error" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <div className="d-flex">
              <Link
                to="/login"
                className="btn btn-secondary rounded-pill py-2 px-4 me-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary rounded-pill py-2 px-4"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </div>
  );
}