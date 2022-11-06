import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";
import EventCard from "../../EventCard/EventCard";
const Map = () => {
  const data = {}
  return (
    <div>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <div className="map" style={{height: '90vh'}}>
          <GoogleMap />
        </div>
        <EventCard props={data}/>
      </Wrapper>
    </div>
  );
};

export default Map;
