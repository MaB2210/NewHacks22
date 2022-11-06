import React, { useState } from "react";
import "./EventList.css";
import EventPopup from "./EventPopup";
const EventList = ({ events,setShowPopup }) => {
  const [showEvent, setShowEvent] = useState(false)
  return (
    <>
      <div className="event__list">
        <ul className="list">
          {events
            ? events.map((event, i) => (
                <li className="list__name">
                  {i + 1}. {event.name}
                  <button className="show__saved" onClick={setShowEvent(true)}>Info</button>
                </li>
              ))
            : "Loading"}
        </ul>

      </div>
      {showEvent && <EventPopup closePopup={setShowEvent}/>}
    </>
  );
};

export default EventList;
