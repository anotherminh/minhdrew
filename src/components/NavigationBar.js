import React from "react";
import logo from "../assets/wedding_logo.png";

export const NavigationBar = () => {
  return (
    <div className="navigation-container">
      <nav className="nav">
        <a href="/story">Story</a>
        <a href="/schedule">Schedule</a>
        <a href="/faqs">FAQs</a>
        <a href="/rsvp">RSVP</a>
      </nav>
      <div className="title-logo">
        <a className="clickable-title-logo" href="/">
          <div className="title">Minh + Andrew</div>
        </a>
        <a href="/">
          <img
            className="logo"
            src={logo}
            alt="minh-and-andrew-wedding-logo"
            width="100"
            height="100"
          />
        </a>
      </div>
    </div>
  );
};
