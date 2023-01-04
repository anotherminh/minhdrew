import React from "react";
import logo from "../assets/wedding_logo.png";

export const NavigationBar = () => {
  return (
    <div className="navigation-container">
      <nav className="nav">
        <a href="#">Story</a>
        <a href="#schedule">Schedule</a>
        <a href="#faqs">FAQs</a>
        <a href="#faqs">RSVP</a>
      </nav>
      <div className="title-logo">
        <h1>Minh + Andrew</h1>
        <img
          className="logo"
          src={logo}
          alt="minh-and-andrew-wedding-logo"
          width="100"
          height="100"
        />
      </div>
      {/* <div className="rsvp-button-container">
        <a href="#rsvp">RSVP</a>
      </div> */}
    </div>
  );
};
