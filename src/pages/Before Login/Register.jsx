import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/login"); // Navigate to the login page after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid bg-light py-5 login-container" style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-center mb-4 wow animated slideInDown" data-wow-delay="0.1s">
                Register
              </h2>
              <form onSubmit={handleRegister}>
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
                >
                  Register
                </button>
                {error && <p className="text-danger text-center mt-3">{error}</p>}
              </form>
              <div className="text-center mt-3">
                <p className="wow animated slideInDown" data-wow-delay="0.7s">
                  Already have an account? <a href="/login" className="btn btn-link">Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}