import React from "react";
import { Page } from "./Page";
import minhdrew from "../assets/andrewminh.png";

export const Home = () => {
  return (
    <Page>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: "20px" }}>We're getting married!!</div>
        <img style={{ height: "50vh" }} src={minhdrew} alt="minh-andrew" />
      </div>
    </Page>
  );
};
