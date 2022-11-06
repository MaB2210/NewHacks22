import React, { useEffect, useState } from "react";
import EventList from "./EventList";
import Loading from "./Loading";
import NearbyEvents from "./NearbyEvents";
import "./Event.css";
import EventPopup from "./EventPopup";
const Event = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const [eventsNearby, setEventsNearby] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [userLocation, setUserLocation] = useState({ lat: "", long: "" });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setUserLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      alert("Please refresh the page and allow the location");
    }
  }, []);
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
      {showPopup && <EventPopup closePopup={setShowPopup} />}
    </>
  );
};

export default Event;
