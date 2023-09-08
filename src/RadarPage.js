import React from "react";

function RadarPage() {
  // Pass radar data here as a prop or using context,
  // Just static message for now
  // wrap this in a try catch and show a loading... spinner - then actually render it on page later

  return (
    <div className="radar-container">
      <h2>Radar Data</h2>
      <p>We've fetched some radar data! Check your console for the details.</p>
      {/* If you were to display some of that data, you'd iterate and render it here. */}
    </div>
  );
}

export default RadarPage;
