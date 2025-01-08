import React, { useState } from 'react';

function HotelSearch() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = () => {
    // You can integrate with APIs to search for hotels here
    console.log(`Searching for hotels in ${destination} from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="container">
      <h2>Hotel Search</h2>
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </label>
      <label>
        Check-in Date:
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleSearch}>Search Hotels</button>

      <div>
        <h3>Suggested Hotels:</h3>
        <ul>
          <li>Hotel 1: $150/night</li>
          <li>Hotel 2: $120/night</li>
          <li>Hotel 3: $80/night</li>
        </ul>
      </div>
    </div>
  );
}

export default HotelSearch;
