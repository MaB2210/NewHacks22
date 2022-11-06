import React, { useState } from "react";
import "./EventList.css";
import EventPopup from "./EventPopup";
const EventList = ({ events, setShowPopup }) => {
  const [showEvent, setShowEvent] = useState(false);
  const [eventId, setEventId] = useState("");
  function singleEvent(id) {
    const single = events.find((event) => event.id === id);
    return single;
  }
  return (
    <>
      <div className="event__list">
        <ul className="list">
          {events
            ? events.map((event, i) => (
                <li className="list__name">
                  {i + 1}. {event.name}
                  <button
                    className="show__saved"
                    onClick={() => {
                      setEventId(event.id);
                      setShowEvent(true);
                    }}
                  >
                    Info
                  </button>
                </li>
              ))
            : "Loading"}
        </ul>
      </div>
      {showEvent && (
        <EventPopup
          event={() => singleEvent(eventId)}
          closePopup={setShowEvent}
        />
      )}
    </>
  );
};

export default EventList;
