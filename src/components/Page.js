import React from "react";
import { NavigationBar } from "./NavigationBar";
import minhHead from "../assets/minh_head.png";
import andrewHead from "../assets/andrew.png";
import fauciHead from "../assets/fauci.png";
import { RotatingHead } from "./RotatingHead";

export const Page = ({ hideHead, children }) => {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="page-content">{children}</div>
      {!hideHead && (
        <div className="footer">
          <RotatingHead src={minhHead} alt="minh-head" />
          <RotatingHead src={fauciHead} alt="fauci-head" />
          <RotatingHead src={andrewHead} alt="andrew-head" />
        </div>
      )}
    </div>
  );
};
