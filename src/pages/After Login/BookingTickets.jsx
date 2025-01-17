/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import MainPageHeader from "../../components/After Login/MainPageHeader";

export default function BookTickets() {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [transportOptions, setTransportOptions] = useState([]);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching tickets for ${destination} on ${travelDate}`);

    // Mock transport options (replace with actual API call)
    setTransportOptions([
      { id: 1, type: "Flight", offer: "50% off for new users" },
      { id: 2, type: "Train", offer: "30% off for new users" },
      { id: 3, type: "Ship", offer: "15% off for new users" },
    ]);
  };

  const handleBooking = (transport) => {
    setSelectedTransport(transport);
    // Reset booking form state
    setBookingDetails({});
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", bookingDetails);
    alert("Your booking has been sent. Thank you for filling out!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <MainPageHeader/>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5">
              <h1 className="display-3 text-white animated slideInDown">
                Book Your Tickets
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
                    Book Tickets
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Book Tickets Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-primary px-3 d-inline-block">
              Travel Deals
            </h6>
            <h1 className="mb-5">Book Tickets</h1>
          </div>

          <form onSubmit={handleSearch}>
            <div className="mb-4">
              <label className="form-label">
                Destination:
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="form-label">
                Travel Date:
                <input
                  type="date"
                  className="form-control"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                />
              </label>
            </div>
            <button className="btn btn-primary" type="submit">
              Search Offers
            </button>
          </form>

          <div className="mt-5">
            {transportOptions.length > 0 && (
              <>
                <h3>Available Transport Options:</h3>
                <ul className="list-group">
                  {transportOptions.map((option) => (
                    <li
                      key={option.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {option.type}: {option.offer}
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleBooking(option)}
                      >
                        Book {option.type}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {selectedTransport && (
              <div className="mt-5">
                <h3>Booking Information for {selectedTransport.type}</h3>
                <form onSubmit={handleSubmitBooking}>
                  {/* Unified Transport Booking Component */}
                  {selectedTransport.type && (
                    <div
                      className="container-xxl py-5 wow fadeInUp"
                      data-wow-delay="0.1s"
                      style={{
                        background: "url('/path/to/your/image.jpg') no-repeat center center",
                        backgroundSize: "cover",
                        backgroundColor: "#123456",
                      }}
                    >
                      <div className="container">
                        <div className="booking p-5 bg-dark bg-opacity-50">
                          <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                              <h6 className="text-uppercase text-white">
                                {selectedTransport.type} Booking
                              </h6>
                              <h1 className="text-white mb-4">
                                Book Your {selectedTransport.type} Ticket
                              </h1>
                              <p className="mb-4">
                                Complete your {selectedTransport.type.toLowerCase()} booking with ease.
                                Fill in your details and reserve your tickets hassle-free.
                              </p>
                            </div>
                            <div className="col-md-6">
                              <h1 className="text-white mb-4">
                                Book Your {selectedTransport.type}
                              </h1>
                              <form>
                                <div className="row g-3">
                                  {[
                                    { id: "firstName", label: "First Name", type: "text", required: true },
                                    { id: "middleName", label: "Middle Name", type: "text" },
                                    { id: "lastName", label: "Last Name", type: "text", required: true },
                                    { id: "gender", label: "Gender", type: "select", options: ["Male", "Female"], required: true },
                                    { id: "age", label: "Age", type: "number", required: true },
                                    { id: "mail", label: "Mail", type: "email", required: true },
                                    { id: "mobileNumber", label: "Mobile Number", type: "text", required: true },
                                    { id: "alternativeNumber", label: "Alternative Number", type: "text" },
                                    { id: "journeyFrom", label: "Journey From", type: "text", required: true },
                                    { id: "journeyTo", label: "Journey To", type: "text", required: true },
                                    { id: "journeyDate", label: "Journey Date", type: "date", required: true },
                                  ].map((field) =>
                                    field.type === "select" ? (
                                      <div className="col-md-6" key={field.id}>
                                        <div className="form-floating">
                                          <select
                                            className="form-control bg-transparent"
                                            id={field.id}
                                            value={bookingDetails[field.id] || ""}
                                            onChange={handleBookingChange}
                                            required={field.required}
                                          >
                                            <option value="">Select {field.label}</option>
                                            {field.options.map((option) => (
                                              <option value={option} key={option}>
                                                {option}
                                              </option>
                                            ))}
                                          </select>
                                          <label htmlFor={field.id}>{field.label}</label>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="col-md-6" key={field.id}>
                                        <div className="form-floating">
                                          <input
                                            type={field.type}
                                            className="form-control bg-transparent"
                                            id={field.id}
                                            placeholder={field.label}
                                            value={bookingDetails[field.id] || ""}
                                            onChange={handleBookingChange}
                                            required={field.required}
                                          />
                                          <label htmlFor={field.id}>{field.label}</label>
                                        </div>
                                      </div>
                                    )
                                  )}
                                  <div className="col-12">
                                    <button
                                      className="btn btn-outline-light w-100 py-3"
                                      type="submit"
                                    >
                                      Book Now
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Book Tickets End */}
    </div>
  );
}