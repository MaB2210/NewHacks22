import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";
const Map = () => {
  return (
    <div>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <div className="map" style={{height: '90vh'}}>
          <GoogleMap />
        </div>
      </Wrapper>
    </div>
  );
};

export default Map;
