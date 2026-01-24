import React from 'react';
import MapComponent from '../components/MapComponent';
import './MapPage.css';

function MapPage() {
  return (
    <div className="map-page">
      <BackButton />
      <header className="map-header">
        <h1>🗺️ Nearby Parkings</h1>
        <p>Find parking spots near you</p>
      </header>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
}

export default MapPage;
