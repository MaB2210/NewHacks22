import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";
const Map = () => {
  return (
    <div>
      <Wrapper apiKey={`AIzaSyD_nNt7POYz-VPV6aJMTXw7Q4Y1ScDS2l4`}>
        <div className="map" style={{height: '90vh'}}>
          <GoogleMap />
        </div>
      </Wrapper>
    </div>
  );
};

export default Map;
