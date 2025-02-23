/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import MainPageHeader from "../../components/After Login/MainPageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TripPlanner() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [budget, setBudget] = useState(0);
  const [images, setImages] = useState([]);

  const allImages = [
    {
      src: "/assets/img/img1.jpg",
      location: "Thailand",
      description: "Beautiful beaches and vibrant cities.",
    },
    {
      src: "/assets/img/img2.jpg",
      location: "Indonesia",
      description: "Tropical islands with rich culture.",
    },
    {
      src: "/assets/img/img3.jpg",
      location: "Malaysia",
      description: "Rainforests, beaches, and city life.",
    },
    {
      src: "/assets/img/img4.jpg",
      location: "Japan",
      description: "A mix of tradition and modernity.",
    },
    {
      src: "/assets/img/img5.jpg",
      location: "India",
      description: "Rich culture, history, and diverse landscapes.",
    },
    {
      src: "/assets/img/img6.jpg",
      location: "Australia",
      description: "Amazing wildlife and coastlines.",
    },
    {
      src: "/assets/img/img7.jpg",
      location: "Italy",
      description: "Rich art, architecture, and cuisine.",
    },
    {
      src: "/assets/img/img8.jpg",
      location: "USA",
      description: "Diverse cities and national parks.",
    },
    {
      src: "/assets/img/img9.jpg",
      location: "Canada",
      description: "Majestic mountains and lakes.",
    },
    {
      src: "/assets/img/img10.jpg",
      location: "France",
      description: "Romantic cities and stunning countryside.",
    },
  ];

  const calculateTripDuration = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    const timeDiff = endDateObj - startDateObj;
    return timeDiff / (1000 * 3600 * 24);
  };

  const handleDateChange = () => {
    if (startDate && endDate) {
      const daysGap = calculateTripDuration(startDate, endDate);

      if (daysGap < 0) {
        toast.warn("End date must be later than start date.");
        return;
      }

      console.log(
        `Planning trip from ${startDate} to ${endDate}, Duration: ${daysGap} days`
      );

      let tripSuggestions = [];
      let tripBudget = 0;
      let imgArray = [];

      if (daysGap < 3) {
        toast.warn(
          "The trip duration is too short! Consider extending it for a better experience."
        );
      } else if (daysGap <= 4) {
        tripSuggestions = ["Short Stay", "Quick Visit"];
        tripBudget = 500;
        imgArray = allImages.slice(0, 2);
      } else if (daysGap <= 6) {
        tripSuggestions = ["Weeklong Adventure", "Explore City"];
        tripBudget = 1500;
        imgArray = allImages.slice(0, 4);
      } else if (daysGap <= 8) {
        tripSuggestions = ["Extended Tour", "Weeklong Retreat"];
        tripBudget = 2500;
        imgArray = allImages.slice(0, 6);
      } else if (daysGap <= 10) {
        tripSuggestions = ["Full Tour", "Leisurely Trip"];
        tripBudget = 4000;
        imgArray = allImages.slice(0, 8);
      } else {
        tripSuggestions = ["Grand Adventure", "Ultimate Vacation"];
        tripBudget = 6000;
        imgArray = allImages.slice(0, 10);
      }

      setSuggestions(tripSuggestions);
      setBudget(tripBudget);
      setImages(imgArray);
    } else {
      setSuggestions([]);
      setImages([]);
      setBudget(0);
    }
  };

  return (
    <div>
      <MainPageHeader />
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
                    Plan Trip
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Trip Planning
            </h6>
            <h1 className="mb-5">Plan Your Perfect Trip</h1>
          </div>

          <div className="text-center mb-4">
            <h2>Plan Your Trip</h2>
            <form>
              <div className="row mb-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <label className="form-label">
                    Start Date:
                    <input
                      type="date"
                      className="form-control mx-auto"
                      style={{ width: "300px" }}
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </label>
                </div>
                <div className="col-lg-4 col-md-6">
                  <label className="form-label">
                    End Date:
                    <input
                      type="date"
                      className="form-control mx-auto"
                      style={{ width: "300px" }}
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary btn-lg rounded-pill shadow-sm"
                  type="button"
                  onClick={handleDateChange}
                >
                  Suggest Trip
                </button>
              </div>
            </form>
          </div>

          {suggestions.length > 0 && (
            <div className="mt-5">
              <h4 className="mt-4 text-center">Estimated Budget: ₹{budget}</h4>
              <div className="row justify-content-center">
                {suggestions.map((place, index) => (
                  <div className="col-lg-5 col-md-6 mb-4" key={index}>
                    <div className="alert alert-info text-center">
                      <h4>{place}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="text-center">Suggested Locations:</h4>
                <div className="row justify-content-center g-4">
                  {images.map((img, index) => (
                    <div
                      className="col-lg-4 col-md-6 wow fadeInUp"
                      key={index}
                      data-wow-delay={`${0.1 * (index + 1)}s`}
                    >
                      <div className="package-item">
                        <div className="overflow-hidden">
                          <img
                            className="img-fluid"
                            src={img.src}
                            alt={`Suggested place ${index + 1}`}
                            style={{
                              width: "500px",
                              height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="d-flex border-bottom">
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-map-marker-alt text-primary me-2" />
                            {img.location}
                          </small>
                          <small className="flex-fill text-center py-2">
                            <i className="fa fa-calendar-alt text-primary me-2" />
                            {`${calculateTripDuration(
                              startDate,
                              endDate
                            )} days`}
                          </small>
                        </div>
                        <div className="text-center p-4">
                          <h3 className="mb-0">₹{budget}</h3>
                          <div className="mb-3">
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                          </div>
                          <p>{img.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
