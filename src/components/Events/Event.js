import React, { useState } from "react";
import EventList from "./EventList";
import Loading from "./Loading";
import NearbyEvents from "./NearbyEvents";
import "./Event.css";
const Event = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const [eventsNearby, setEventsNearby] = useState([]);
  return (
    <>
      <div className="events">
        <div className="container">
          <div className="events__saved">
            <h3 className="events__heading">Your Saved Events</h3>
            {savedEvents?.length === 0 ? (
              <p className="message">Sorry you don't have any saved events.</p>
            ) : (
              <EventList events={savedEvents} />
            )}
          </div>
          <div className="events__nearby">
            <h3 className="events__heading">See Nearby Events</h3>
            {eventsNearby?.length >= 1 ? (
              <NearbyEvents events={eventsNearby} />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
