import React from "react";
import logo from "../assets/wedding_logo.png";

export const NavigationBar = () => {
  return (
    <div className="navigation-container">
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="logo">
        <img
          src={logo}
          alt="minh-and-andrew-wedding-logo"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
};
