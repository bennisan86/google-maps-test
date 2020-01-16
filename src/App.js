import React from 'react';
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import * as parksData from './data/skateparks.json';

function Map(){
  return (
    <GoogleMap
      defaultZoom={10}
      // defaultCenter={{lat: 51.219448, lng: 4.402464}}>
      defaultCenter={{lat: 45.421532, lng: -75.697189}}>
      {parksData.features.map((park) => (
          <Marker 
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0]}} />
        )
        )}
      </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }}></div>}
        containerElement={<div style={{ height: "100%" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
      />
    </div>
  );
}

export default App;
