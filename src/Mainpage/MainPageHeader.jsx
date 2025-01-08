import React from "react";
import { Link } from "react-router-dom";

export default function MainPageHeader() {
  return (
    <div>
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 custom-bg-dark">
          <Link to="/main-home-page" className="navbar-brand p-0">
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
              <Link to="/main-home-page" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/trip-planner" className="nav-item nav-link">
                Plan Your Trip
              </Link>
              <Link to="/seasonal-suggestions" className="nav-item nav-link">
                Seasonal Suggestions
              </Link>
              <Link to="/budget-trips" className="nav-item nav-link">
                Budget Trips
              </Link>
              <Link to="/booking-tickets" className="nav-item nav-link">
                Book Tickets
              </Link>
              <Link to="/hotel-search" className="nav-item nav-link">
                Search Hotels
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}

      {/* Custom CSS Styles */}
      <style jsx>{`
        .custom-bg-dark {
          background-color: #2f2f2f; /* Light black color */
        }
      `}</style>
    </div>
  );
}