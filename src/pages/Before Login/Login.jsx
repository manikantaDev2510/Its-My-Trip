import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/main-home-page"); // Navigate to the after-login page
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
    setLoading(false);
  };

  const handleGuestLogin = () => {
    setLoading(true);
    setError("");
    try {
      // Implement guest login logic here
      navigate("/main-home-page"); // Navigate to the after-login page for guest
    } catch (err) {
      setError("Guest login failed. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="container-fluid bg-light py-5 login-container" style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-center mb-4 wow animated slideInDown" data-wow-delay="0.1s">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3 wow animated slideInDown" data-wow-delay="0.2s">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3 wow animated slideInDown" data-wow-delay="0.4s">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 mt-2 wow animated slideInDown"
                  data-wow-delay="0.6s" 
                  disabled={loading}
                >
                  {loading ? <Spinner animation="grow" size="sm" /> : "Login"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-100 mt-3 wow animated slideInDown"
                  data-wow-delay="0.8s"
                  onClick={handleGuestLogin}
                  disabled={loading}
                >
                  {loading ? <Spinner animation="grow" size="sm" /> : "Guest Login"}
                </button>
                {error && <p className="text-danger text-center mt-3">{error}</p>}
              </form>
              <div className="text-center mt-3">
                <p className="text-muted wow animated slideInDown" data-wow-delay="0.9s">
                  Don't have an account?<a href="/register" className="btn btn-link">Register here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}