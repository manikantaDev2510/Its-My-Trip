import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBaseComp"; // Firebase configuration
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/its-my-trip"); // Navigate to the ItsMyTrip section
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid bg-light py-5 login-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-center mb-4 fadeInAnimation">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3 slideInAnimation">
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
                <div className="form-group mb-3 slideInAnimation">
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
                <button type="submit" className="btn btn-primary w-100 mt-2 bounceInAnimation">
                  Login
                </button>
                {error && <p className="text-danger text-center mt-3">{error}</p>}
              </form>
              <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
