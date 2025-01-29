/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import MainPageHeader from '../../components/After Login/MainPageHeader';

function HotelSearch() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [hotels, setHotels] = useState([]);

  const mockHotelData = [
    {
      id: 1,
      name: "Grand Paradise Hotel",
      image: "/assets/img/hotel1.jpg",
      description: "A luxurious stay with modern amenities and a beautiful view.",
      price: "$150/night",
    },
    {
      id: 2,
      name: "Sunny Beach Resort",
      image: "/assets/img/hotel2.jpg",
      description: "Perfect for a beach getaway with family and friends.",
      price: "$120/night",
    },
    {
      id: 3,
      name: "Budget Stay Inn",
      image: "/assets/img/hotel3.jpg",
      description: "Affordable and cozy, ideal for solo travelers to enjoy.",
      price: "$80/night",
    },
  ];

  const handleSearch = () => {
    console.log(`Searching hotels in ${destination} from ${checkIn} to ${checkOut}`);
    setHotels(mockHotelData);
  };

  return (
    <div>
      <MainPageHeader/>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Search Your Hotel</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/main-home-page">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Search Hotel
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Search Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Hotel Search</h6>
            <h1 className="mb-5">Search your Hotel</h1>
          </div>

          <div className="container text-center">
            <div className="mb-4">
              <label className="form-label">
                Destination:
                <input
                  type="text"
                  className="form-control d-inline-block mx-auto"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  style={{ width: '80%' }}
                />
              </label>
            </div>

            {/* Date Input Row Start */}
            <div className="row mb-4 justify-content-center">
              <div className="col-md-5">
                <label className="form-label">
                  Check-in Date:
                  <input
                    type="date"
                    className="form-control"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </label>
              </div>
              <div className="col-md-5 ms-md-4">
                <label className="form-label">
                  Check-out Date:
                  <input
                    type="date"
                    className="form-control"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </label>
              </div>
            </div>
            {/* Date Input Row End */}

            <button className="btn btn-primary btn-lg rounded-pill shadow-sm" type="button" onClick={handleSearch}>
              Search Hotels
            </button>

            <div className="mt-5 text-center">
              <h3>Suggested Hotels:</h3>
              <div className="row justify-content-center">
                {hotels.map((hotel) => (
                  <div key={hotel.id} className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src={hotel.image}
                        className="card-img-top"
                        alt={hotel.name}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{hotel.name}</h5>
                        <p className="card-text">{hotel.description}</p>
                        <p className="card-text text-primary">{hotel.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hotel Search End */}
    </div>
  );
}

export default HotelSearch;
