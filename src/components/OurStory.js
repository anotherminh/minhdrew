import React, { useState } from "react";
import { Page } from "./Page";
import firstDate from "../assets/first_date.png";
import firstMushroomHunt from "../assets/first_mushroom_hunt.jpeg";
import firstMushroomHunt2 from "../assets/first_mushroom_hunt2.jpg";
import firstMushroomHunt3 from "../assets/first_mushroom_hunt3.jpg";
import firstBm from "../assets/first_bm.jpg";
import firstBm2 from "../assets/first_bm_2.jpeg";
import firstBm3 from "../assets/first_bm_3.jpeg";
import andrewDancing from "../assets/andrew_dancing.gif";

const PageTurn = ({ hide, direction, onClick }) => {
  return (
    <div
      className="page-turner"
      onClick={onClick}
      style={{
        ...(hide ? { opacity: "0%" } : {}),
        height: "100%",
        fontSize: "40px",
        fontWeight: 800,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {direction === "next" ? ">" : "<"}
    </div>
  );
};

const StoryCaption = ({ children }) => (
  <div style={{ marginTop: "10px" }}>{children}</div>
);
const StoryPage = ({ src, caption, alt }) => (
  <div className="story">
    <div style={{ height: "80%" }}>
      <img alt={alt} src={src} />
    </div>
    <StoryCaption>{caption}</StoryCaption>
  </div>
);

export const OurStory = () => {
  const pages = [
    {
      src: firstDate,
      alt: "first-date-comic",
      caption: "First date - Thoroughbread coffee shop in San Francisco",
    },
    {
      src: firstMushroomHunt,
      alt: "first-mushroom-hunt-waterfall",
      caption: "First mushroom hunt - ?",
    },
    {
      src: firstMushroomHunt2,
      alt: "first-mushroom-hunt-andrew",
      caption: "First mushroom hunt - ?",
    },
    {
      src: firstMushroomHunt3,
      alt: "first-mushroom-hunt-haul",
      caption: "First mushroom hunt - the haul",
    },
    {
      src: firstBm2,
      alt: "first-burning-man",
      caption: "Our first burning man together in 2018",
    },
    {
      src: firstBm,
      alt: "first-burning-man-2",
      caption: "Our first burning man together in 2018",
    },
    {
      src: firstBm3,
      alt: "first-burning-man-2",
      caption: "Our first burning man together in 2018",
    },
    {
      src: andrewDancing,
      alt: "andrew-dancing",
      caption: "Celebrating our friends getting married",
    },
  ];
  const [page, setPage] = useState(0);
  console.log({ page });

  return (
    <Page>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <PageTurn
          hide={page <= 0}
          onClick={() => setPage(Math.max(0, page - 1))}
          direction="back"
        />
        {<StoryPage {...pages[page]} />}
        <PageTurn
          hide={page >= pages.length - 1}
          onClick={() => setPage(Math.min(page + 1, pages.length - 1))}
          direction="next"
        />
      </div>
    </Page>
  );
};
