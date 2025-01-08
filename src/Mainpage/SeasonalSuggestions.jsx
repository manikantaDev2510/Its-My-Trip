import React, { useState } from 'react';

function SeasonalSuggestions() {
  const [season, setSeason] = useState('');
  const [places, setPlaces] = useState([]);

  const handleSeasonChange = () => {
    if (season === 'Winter') {
      setPlaces(['Snowy Mountains', 'Ski Resorts', 'Northern Lights']);
    } else if (season === 'Summer') {
      setPlaces(['Beaches', 'Adventure Parks', 'Hiking Trails']);
    } else if (season === 'Monsoon') {
      setPlaces(['Waterfalls', 'Rainforest Tours']);
    } else {
      setPlaces([]);
    }
  };

  return (
    <div className="container">
      <h2>Seasonal Suggestions</h2>
      <label>
        Select Season:
        <select onChange={(e) => setSeason(e.target.value)} value={season}>
          <option value="">Choose a season</option>
          <option value="Winter">Winter</option>
          <option value="Summer">Summer</option>
          <option value="Monsoon">Monsoon</option>
        </select>
      </label>
      <button type="button" onClick={handleSeasonChange}>Suggest Places</button>

      {places.length > 0 && (
        <div>
          <h3>Suggested Places for {season}:</h3>
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

export default SeasonalSuggestions;
