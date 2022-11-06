import React, { useState } from "react";
import EventPopup from "./EventPopup";
import './NearbyEvents.css'
const NearbyEvents = ({ events }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      <div className="nearby__events">
        <p className="event__name">{events?.name || "name"}</p>
        <p className="event__date">
          {events?.date || "Nov 16, 2022"}, {events?.time || "6 PM"}
        </p>
        <p className="sm__msg">Click Join for more info</p>
        <button className="join" onClick={setShowInfo(true)}>Join</button>
      </div>
      {showInfo && <EventPopup closePopup={setShowInfo}/>}
    </>
  );
};

export default NearbyEvents;
