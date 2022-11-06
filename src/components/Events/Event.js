import React, { useEffect, useState } from "react";
import EventList from "./EventList";
import Loading from "./Loading";
import NearbyEvents from "./NearbyEvents";
import "./Event.css";
import EventPopup from "./EventPopup";
import axios from "axios";
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
            lat: Math.abs(position.coords.latitude),
            long: Math.abs(position.coords.longitude),
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
  // useEffect(() => {
  //   axios
  //     .get("https://newhacks22.onrender.com/return_events", { id: userId })
  //     .then((res) => {
  //       if (res.data.length >= 1) {
  //         setSavedEvents(res.data);
  //       } else {
  //         return;
  //       }
  //     });
  // }, [userId]);
  // useEffect(() => {
  //   axios
  //     .get("https://newhacks22.onrender.com/event_in_range", {
  //       lat: localStorage.getItem("location").lat || Math.abs(userLocation.lat),
  //       lon:
  //         localStorage.getItem("location").long || Math.abs(userLocation.long),
  //     })
  //     .then((res) => {
  //       if (res.data.Events_in_range.length <= 0) return;
  //       setEventsNearby(res.data);
  //     });
  // }, [userLocation]);
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
