// LogoutPage.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user authentication data (localStorage, sessionStorage, or state)
    localStorage.removeItem("authToken"); // Assuming you're using localStorage to store auth token

    // Redirect to login page after logout
    setTimeout(() => {
      navigate("/"); // Adjust this path to match your login route
    }, 2000); // Show a brief logout message before redirecting
  }, [navigate]);

  return (
    <div className="container-fluid bg-light py-5 logout-page" style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-white p-4 shadow rounded text-center">
              <h2 className="mb-4 wow animated slideInDown" data-wow-delay="0.1s">
                You have been logged out successfully!
              </h2>
              <p className="text-muted mb-4 wow animated slideInDown" data-wow-delay="0.3s">
                Redirecting to login page...
              </p>
              {/* Spinner Component */}
              <div className="d-flex justify-content-center wow animated slideInDown" data-wow-delay="0.5s">
                <Spinner animation="grow" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
