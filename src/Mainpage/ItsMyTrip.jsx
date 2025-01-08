import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPageHeader from "./MainPageHeader"; // Custom header for "ItsMyTrip"
import TripPlanner from "./TripPlanner";
import SeasonalSuggestions from "./SeasonalSuggestions";
import BudgetTrips from "./BudgetTrips";
import BookingTickets from "./BookingTickets";
import HotelSearch from "./HotelSearch";

export default function ItsMyTrip() {
  return (
    <div>
      {/* Custom header for the main page */}
      <MainPageHeader />
      <Routes>
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/seasonal-suggestions" element={<SeasonalSuggestions />} />
        <Route path="/budget-trips" element={<BudgetTrips />} />
        <Route path="/booking-tickets" element={<BookingTickets />} />
        <Route path="/hotel-search" element={<HotelSearch />} />
      </Routes>
    </div>
  );
}
