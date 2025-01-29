/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import MainPageHeader from '../../components/After Login/MainPageHeader';

export default function BudgetPlanner() {
  const [budget, setBudget] = useState(50);
  const [places, setPlaces] = useState([]);

  const handleBudgetChange = () => {
    let suggestedPlaces = [];
    if (budget <= 100) {
      suggestedPlaces = [
        {
          name: "Beach Resort",
          image: "/assets/img/beach-resort.jpg",
          description: "Relax on the serene beaches with affordable packages.",
        },
        {
          name: "Mountain Cabin",
          image: "/assets/img/mountain-cabin.jpg",
          description: "A peaceful getaway in the mountains with cozy cabins.",
        },
        {
          name: "City Hotel",
          image: "/assets/img/city-hotel.jpg",
          description: "Stay at a budget-friendly hotel in the heart of the city.",
        },
      ];
    } else if (budget <= 200) {
      suggestedPlaces = [
        {
          name: "Luxury Resort",
          image: "/assets/img/luxury-resort.jpg",
          description: "A lavish stay with premium amenities and scenic views.",
        },
        {
          name: "Beachfront Villa",
          image: "/assets/img/beachfront-villa.jpg",
          description: "Stay in a luxurious villa with an ocean view.",
        },
        {
          name: "Mountain Cabin",
          image: "/assets/img/mountain-cabin.jpg",
          description: "A peaceful getaway in the mountains with cozy cabins.",
        },
      ];
    } else {
      suggestedPlaces = [
        {
          name: "Ultra-Luxury Resort",
          image: "/assets/img/ultra-luxury-resort.jpg",
          description: "Indulge in the epitome of luxury with unmatched services.",
        },
        {
          name: "Exclusive Yacht Experience",
          image: "/assets/img/exclusive-yacht.jpg",
          description: "Experience a private yacht journey to secluded destinations.",
        },
        {
          name: "Private Island",
          image: "/assets/img/private-island.jpg",
          description: "Book an exclusive private island for ultimate privacy and luxury.",
        },
      ];
    }
    setPlaces(suggestedPlaces);
  };

  const increaseBudget = () => setBudget(budget + 50);
  const decreaseBudget = () => {
    if (budget > 50) {
      setBudget(budget - 50);
    }
  };

  return (
    <div>
      <MainPageHeader/>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Plan Your Trip
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/main-home-page">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Budget Planner
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Planner Section */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          {/* Budget Section */}
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Trips Budget
            </h6>
            <h1 className="mb-5">Set Your Budget</h1>
            <div className="d-inline-block">
              <div className="input-group">
                <button
                  className="btn btn-outline-primary"
                  onClick={decreaseBudget}
                >
                  -50
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={increaseBudget}
                >
                  +50
                </button>
              </div>
              <button
                className="btn btn-primary mt-3 btn-lg rounded-pill shadow-sm"
                onClick={handleBudgetChange}
              >
                Suggest Places
              </button>
            </div>
          </div>

          {/* Suggested Places */}
          <div className="row g-3 mt-5">
            {/* Top Row */}
            <div
              className="col-lg-8 col-md-8 wow zoomIn"
              data-wow-delay="0.2s"
              style={{ height: "100%" }}
            >
              {places[0] && (
                <a
                  className="position-relative d-block h-100 overflow-hidden"
                  href="#"
                >
                  <img
                    src={places[0].image}
                    className="img-fluid w-100 h-100"
                    alt={places[0].name}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    {places[0].name}
                  </div>
                </a>
              )}
            </div>
            <div className="col-lg-4 col-md-4 d-flex flex-column gap-3">
              <div className="wow zoomIn flex-grow-1" data-wow-delay="0.3s">
                {places[1] && (
                  <a
                    className="position-relative d-block h-100 overflow-hidden"
                    href="#"
                  >
                    <img
                      src={places[1].image}
                      className="img-fluid w-100 h-100"
                      alt={places[1].name}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      {places[1].name}
                    </div>
                  </a>
                )}
              </div>
              <div className="wow zoomIn flex-grow-1" data-wow-delay="0.4s">
                {places[2] && (
                  <a
                    className="position-relative d-block h-100 overflow-hidden"
                    href="#"
                  >
                    <img
                      src={places[2].image}
                      className="img-fluid w-100 h-100"
                      alt={places[2].name}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      {places[2].name}
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="col-lg-12 wow zoomIn" data-wow-delay="0.5s">
            {places[3] && (
              <a
                className="position-relative d-block overflow-hidden"
                href="#"
              >
                <img
                  src={places[3].image}
                  className="img-fluid w-100"
                  alt={places[3].name}
                />
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  {places[3].name}
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}