import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Before Login/Header";
import Footer from "./components/Before Login/Footer";

import Home from "./pages/Before Login/Home";
import About from "./pages/Before Login/About";
import Services from "./pages/Before Login/Services";
import Packages from "./pages/Before Login/Packages";
import Destination from "./pages/Before Login/Destination";
import Booking from "./pages/Before Login/Booking";
import Team from "./pages/Before Login/Team";
import Error from "./pages/Before Login/Error";
import Contact from "./pages/Before Login/Contact";
import Login from "./pages/Before Login/Login";
import Register from "./pages/Before Login/Register";

import MainHomePage from "./pages/After Login/MainHome";
import SeasonalSuggestions from "./pages/After Login/SeasonalSuggestions";
import BudgetTrips from "./pages/After Login/BudgetTrips";
import TripPlanner from "./pages/After Login/TripPlanner";
import HotelSearch from "./pages/After Login/HotelSearch";
import BookingTickets from "./pages/After Login/BookingTickets";
import LogoutPage from "./pages/After Login/LogOut";

export default function App() {
  const location = useLocation();

  // Exclude Header and Footer for login, register, and after-login pages
  const isBeforeLogin = ![
    "/login",
    "/register",
    "/main-home-page",
    "/seasonal-suggestions",
    "/budget-trips",
    "/trip-planner",
    "/hotel-search",
    "/booking-tickets", "/logout"
  ].some((path) => location.pathname.startsWith(path));

  return (
    <div>
      {isBeforeLogin && <Header />}
      <Routes>
        {/* Before Login Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/error" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* After Login Routes */}
        <Route path="/main-home-page" element={<MainHomePage />} />
        <Route path="/seasonal-suggestions" element={<SeasonalSuggestions />} />
        <Route path="/budget-trips" element={<BudgetTrips />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/hotel-search" element={<HotelSearch />} />
        <Route path="/booking-tickets" element={<BookingTickets />} />
        <Route path="/logout" element={<LogoutPage/>}/>

        {/* Fallback for invalid routes */}
        <Route path="*" element={<Error />} />
      </Routes>
      {isBeforeLogin && <Footer />}
    </div>
  );
}