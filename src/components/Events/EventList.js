import React from "react";
import "./EventList.css";
const EventList = ({ events }) => {
  return (
    <>
      <div className="event__list">
        <ul className="list">
          {events
            ? events.map((event, i) => (
                <li className="list__name">
                  {i + 1}. {event.name}{" "}
                  <button className="show__saved">Info</button>
                </li>
              ))
            : "Loading"}
        </ul>
      </div>
    </>
  );
};

export default EventList;
