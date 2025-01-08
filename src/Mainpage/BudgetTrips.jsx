import React, { useState } from 'react';

function BudgetTrips() {
  const [budget, setBudget] = useState('');
  const [places, setPlaces] = useState([]);

  const handleBudgetChange = () => {
    if (budget < 500) {
      setPlaces(['Hostel Stays in Nearby Cities', 'Camping Trips']);
    } else if (budget >= 500 && budget < 1000) {
      setPlaces(['Affordable Hotels in Popular Cities', 'Guided Tours']);
    } else {
      setPlaces(['Luxury Resorts', 'Private Tours']);
    }
  };

  return (
    <div className="container">
      <h2>Budget-Based Trip Planner</h2>
      <label>
        Enter Budget (in $):
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleBudgetChange}>Suggest Places</button>

      {places.length > 0 && (
        <div>
          <h3>Suggested Places for Budget ${budget}:</h3>
          <ul>
            {places.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BudgetTrips;
