import React from 'react';

function BookingTickets() {
  return (
    <div className="container">
      <h2>Book Tickets</h2>
      <p>Find the best offers for your trip:</p>
      <form>
        <label>
          Destination:
          <input type="text" placeholder="Enter destination" />
        </label>
        <label>
          Travel Date:
          <input type="date" />
        </label>
        <button type="submit">Search Offers</button>
      </form>

      <div>
        <h3>Available Offers:</h3>
        <ul>
          <li>50% off on flights to Paris</li>
          <li>20% discount on hotel stays in Tokyo</li>
          <li>Free tour with a flight booking to New York</li>
        </ul>
      </div>
    </div>
  );
}

export default BookingTickets;
