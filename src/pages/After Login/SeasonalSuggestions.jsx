/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import MainPageHeader from "../../components/After Login/MainPageHeader";

export default function SeasonalSuggestions() {
  const [season, setSeason] = useState("");
  const [places, setPlaces] = useState([]);

  const handleSeasonChange = () => {
    if (!season) {
      alert("Please select a season.");
      return;
    }

    // Add logic to suggest places based on season, with images
    const suggestions = {
      Winter: [
        {
          name: "Manali",
          description: "Enjoy skiing in a winter wonderland.",
          image: "/assets/img/winter1.jpg",
        },
        {
          name: "Shimla",
          description: "Relax in a cozy cabin surrounded by snow.",
          image: "/assets/img/winter2.jpg",
        },
        {
          name: "Gulmarg",
          description: "Stay in a hotel made entirely of ice!",
          image: "/assets/img/winter3.jpg",
        },
        {
          name: "Ooty",
          description: "Ice skating and winter sports on a frozen lake.",
          image: "/assets/img/winter4.jpg",
        },
        {
          name: "Munnar",
          description: "Experience the charm of a mountain lodge.",
          image: "/assets/img/winter5.jpg",
        },
        {
          name: "Wayand",
          description: "Witness the magical borealis in the night sky.",
          image: "/assets/img/winter6.jpg",
        },
      ],
      Summer: [
        {
          name: "Goa",
          description: "Soak up the sun and relax by the sea.",
          image: "/assets/img/summer1.jpg",
        },
        {
          name: "Ladakh",
          description: "Escape to a paradise with white sand beaches.",
          image: "/assets/img/summer2.jpg",
        },
        {
          name: "Coorg",
          description: "Explore wildlife on an exciting safari adventure.",
          image: "/assets/img/summer3.jpg",
        },
        {
          name: "Nainital",
          description: "Have fun in the sun at a thrilling water park.",
          image: "/assets/img/summer4.jpg",
        },
        {
          name: "Cape Cod",
          description: "Challenge yourself with a summer mountain trek.",
          image: "/assets/img/summer5.jpg",
        },
        {
          name: "Lonavala",
          description: "Discover new islands and enjoy scenic boat rides.",
          image: "/assets/img/summer6.jpg",
        },
      ],
      Monsoon: [
        {
          name: "Mount Abu",
          description: "Embrace the lush green beauty of the rainforest.",
          image: "/assets/img/monsoon1.jpg",
        },
        {
          name: "Cherrapunji",
          description: "Enjoy the cool weather and views in the hills.",
          image: "/assets/img/monsoon2.jpg",
        },
        {
          name: "Ladakh",
          description: "Sail through backwaters surrounded by nature.",
          image: "/assets/img/monsoon3.jpg",
        },
        {
          name: "Ranikhet",
          description: "Visit the gardens during the monsoon season.",
          image: "/assets/img/monsoon4.jpg",
        },
        {
          name: "Spiti Valley",
          description:
            "Experience the cultural during monsoon festivals.",
          image: "/assets/img/monsoon5.jpg",
        },
        {
          name: "Darjeeling",
          description: "Explore beautifully lush botanical gardens.",
          image: "/assets/img/monsoon6.jpg",
        },
      ],
    };

    setPlaces(suggestions[season] || []);
  };

  return (
    <div>
      <MainPageHeader/>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Seasonal Travel Ideas
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
                    Seasonal Suggestions
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Suggestions Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
            Seasonal Suggestions
            </h6>
            <h1 className="mb-5">Select your best Seasonal</h1>
          </div>

          <div className="text-center mb-4">
            <h2>Select Your Season</h2>
            <label className="form-label">
              Choose a season:
              <select
                className="form-select mx-auto"
                style={{ width: "300px" }}
                onChange={(e) => setSeason(e.target.value)}
                value={season}
              >
                <option value="">Choose a season</option>
                <option value="Winter">Winter</option>
                <option value="Summer">Summer</option>
                <option value="Monsoon">Monsoon</option>
              </select>
            </label>
          </div>

          {/* Centered "Show Suggested Places" Button */}
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-primary btn-lg rounded-pill shadow-sm"
              type="button"
              onClick={handleSeasonChange}
            >
              {/* className="btn btn-light btn-lg rounded-pill shadow-sm" */}
              Show Suggested Places
            </button>
          </div>

          {places.length > 0 && (
            <div className="mt-5">
              <h3 className="text-center">Suggested Places for {season}:</h3>
              <div className="row g-4 justify-content-center">
                {places.map((place, index) => (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.2 + index * 0.2}s`}
                    key={index}
                  >
                    <div className="package-item">
                      <div className="overflow-hidden">
                        <img
                          className="img-fluid"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          src={place.image}
                          alt={place.name}
                        />
                      </div>
                      <div className="text-center p-4">
                        <h3 className="mb-0">{place.name}</h3>
                        <p>{place.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Seasonal Suggestions End */}
    </div>
  );
}