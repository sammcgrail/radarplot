import React from "react";

function RadarPage({ data }) {
  // Pass radar data here as a prop or using context,
  // Just static message for now
  // wrap this in a try catch (does data.length work instead of try catch?) and show a loading... spinner - then actually render it on page later

  return (
    <div className="radar-container">
      <h2>Radar Data</h2>
      <p>We've fetched some radar data!</p>
      {data.length ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>ID: {item.id}</p>
              <p>Data Coverage: {item.datacoverage}</p>
              <p>Max Date: {item.maxdate}</p>
              <p>Min Date: {item.mindate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // Display loading spinner here
      )}
    </div>
  );
}

export default RadarPage;
