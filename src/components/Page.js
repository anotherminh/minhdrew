import React from "react";
import { NavigationBar } from "./NavigationBar";

export const Page = ({ children }) => {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="page-content">{children}</div>
    </div>
  );
};
