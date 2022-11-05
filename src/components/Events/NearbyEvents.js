import React from "react";
import './NearbyEvents.css'
const NearbyEvents = ({ events }) => {
  return (
    <>
      <div className="nearby__events">
        <p className="event__name">{events?.name || "name"}</p>
        <p className="event__date">
          {events?.date || "Nov 16, 2022"}, {events?.time || "6 PM"}
        </p>
        <p className="sm__msg">Click Join for more info</p>
        <button>Join</button>
      </div>
    </>
  );
};

export default NearbyEvents;
