import React from "react";
import "./Event.css";

const EventPopup = ({ event, closePopup }) => {
  return (
    <div className="backgroundOverlay">
      <div className="popupContainer">
        <div className="popup">
          <div className="closeButton">
            <button class="close" onClick={() => closePopup(false)}>
              &times;
            </button>
          </div>
          <div className="info">
            <h2>
              <b>{event.name || `Musical Night`}</b>
            </h2>
          </div>
          <div class="content">
            <p>{event.time || `Nov 16, 2022`}</p>
            <p>
              {event.description ||
                `Hello Everyone, we are hosting the music show at the park. So, we would love to have you at the show and enjoy the evening.`}
            </p>
          </div>
          <div className="registerButton">
            <button className="register">Register &#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
