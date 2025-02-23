import React from "react";
import "animate.css/animate.min.css";
import MainPageHeader from "../../components/After Login/MainPageHeader";

export default function MainHomePage() {
  return (
    <div>
      <MainPageHeader/>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Welcome to Your Ultimate Trip Guide
              </h1>
              <p className="text-white mt-4 mb-5">
                Plan, Explore, and Book your dream vacations effortlessly with our expert suggestions and seamless booking experience.
              </p>
              <a href="/main-home-page" className="btn btn-light btn-lg rounded-pill shadow-sm">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              About Us
            </h6>
            <h1 className="mb-5">Why Choose Our Trip Guide?</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="p-4">
                <i className="fa fa-map-marker-alt fa-3x text-primary mb-4"></i>
                <h5>Personalized Suggestions</h5>
                <p>Get tailored travel recommendations based on your preferences and budget.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="p-4">
                <i className="fa fa-plane fa-3x text-primary mb-4"></i>
                <h5>Seamless Booking</h5>
                <p>Effortlessly book tickets, hotels, and activities all in one place.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="p-4">
                <i className="fa fa-star fa-3x text-primary mb-4"></i>
                <h5>Top-Rated Destinations</h5>
                <p>Explore the best-rated travel destinations for every season.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Features
            </h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm wow fadeInLeft" data-wow-delay="0.2s">
                <h5>Seasonal Travel Suggestions</h5>
                <p>Plan your trips according to the best seasons with curated recommendations.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm wow fadeInRight" data-wow-delay="0.2s">
                <h5>Budget-Friendly Options</h5>
                <p>Find the best deals and packages that fit your travel budget.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm wow fadeInLeft" data-wow-delay="0.6s">
                <h5>Plan Your Trip</h5>
                <p>Organize your trip with our expert tools for an effortless experience.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm wow fadeInRight" data-wow-delay="0.6s">
                <h5>Search Hotel Options</h5>
                <p>Discover and compare the best hotels to ensure a comfortable stay.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm wow fadeInLeft" data-wow-delay="0.4s">
                <h5>Easy Booking Platform</h5>
                <p>Book your entire trip seamlessly with our user-friendly platform.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm wow fadeInRight" data-wow-delay="0.4s">
                <h5>24/7 Support</h5>
                <p>Our team is available round the clock to assist you with your travel needs.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid bg-primary py-5">
        <div className="container text-center">
          <h1 className="text-white mb-4">Start Your Journey Today!</h1>
          <p className="text-white-50 mb-5">
            Unlock the world with our expert travel planning and booking services. Let's make your dream vacation a reality.
          </p>
          <a href="/main-home-page" className="btn btn-light btn-lg rounded-pill shadow-sm">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
