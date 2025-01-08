import React, { useState } from 'react';

function TripPlanner() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleDateChange = () => {
    const tripDuration = calculateTripDuration(startDate, endDate);
    setSuggestions([
      `Place 1 for ${tripDuration} days`,
      `Place 2 for ${tripDuration} days`,
    ]);
  };

  const calculateTripDuration = (start, end) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const duration = (endTime - startTime) / (1000 * 3600 * 24); // Calculate days
    return duration;
  };

  return (
    <div className="container">
      <h2>Plan Your Trip</h2>
      <form>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleDateChange}>Suggest Trip</button>
      </form>

      {suggestions.length > 0 && (
        <div>
          <h3>Suggested Places:</h3>
          <ul>
            {suggestions.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TripPlanner;
