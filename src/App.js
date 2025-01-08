import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ItsMyTrip from "./Mainpage/ItsMyTrip";
import Destination from "./pages/Destination";

export default function App() {
  const location = useLocation();

  // Define routes for "after login" pages
  const isAfterLogin = location.pathname.startsWith("/its-my-trip");

  // Define routes for "before login" pages (not login or register)
  const isBeforeLogin = !isAfterLogin && !["/login", "/register"].includes(location.pathname);

  return (
    <div>
      {/* Show Header and Footer only for "before login" pages (not login/register) */}
      {isBeforeLogin && <Header />}
      
      <Routes>
        {/* "Before Login" Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destination" element={<Destination/>}

        {/* "After Login" Pages */}
        <Route path="/its-my-trip/*" element={<ItsMyTrip />} />
      </Routes>

      {/* Show Footer only for "before login" pages (not login/register) */}
      {isBeforeLogin && <Footer />}
    </div>
  );
}
