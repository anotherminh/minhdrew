import React, { useState } from "react";
import { Page } from "./Page";
import firstDate from "../assets/first_date.png";
import firstMushroomHunt2 from "../assets/first_mushroom_hunt2.jpg";
import firstBm2 from "../assets/first_bm_2.jpeg";
import firstBm3 from "../assets/first_bm_3.jpeg";
import andrewDancing from "../assets/andrew_dancing.gif";
import deathValley from "../assets/death_valley.jpeg";
import razorShortage from "../assets/razor_shortage.jpeg";
import sfPlants from "../assets/sf_plants.jpeg";
import nycFall from "../assets/ny_fall.jpeg";
import nycWinter from "../assets/nyc_winter.jpeg";
import vancouver from "../assets/vancouver.jpeg";
import nyers from "../assets/nyer_doing_ny_things.jpeg";
import californiaSpring from "../assets/california_spring.jpeg";

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
    <div style={{ height: "80%", display: "flex" }}>
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
      src: firstMushroomHunt2,
      alt: "first-mushroom-hunt-andrew",
      caption: "A successful mushroom hunt - near Lake Almanor, CA",
    },
    {
      src: firstBm2,
      alt: "first-burning-man",
      caption: "Our first burning man together in 2018",
    },
    {
      src: firstBm3,
      alt: "first-burning-man-2",
      caption: "Our first burning man together in 2018",
    },
    {
      src: sfPlants,
      alt: "plant-shopping-sf",
      caption: "Plant-shopping in SF",
    },
    {
      src: andrewDancing,
      alt: "andrew-dancing",
      caption: "Celebrating our friends getting married",
    },
    {
      src: deathValley,
      alt: "death-valley",
      caption:
        "After this photo we threw a football over them mountains (in Death Valley)",
    },
    {
      src: razorShortage,
      alt: "razor-shortage",
      caption:
        "During the great razor shortage of 2021 (following Andrew's bike trip from Seattle to SF)",
    },
    {
      src: nyers,
      alt: "new-yorker",
      caption: "New New Yorkers doing New York things",
    },
    {
      src: vancouver,
      alt: "minh-vancouver",
      caption: "Exploring Stanley Park in Vancouver",
    },
    {
      src: californiaSpring,
      alt: "cali-spring",
      caption: "Spring colors in California",
    },
    {
      src: nycFall,
      alt: "nyc-fall",
      caption: "Fall colors in New York",
    },
    {
      src: nycWinter,
      alt: "nyc-winter",
      caption: "Attempting to go outside in NYC during the winter months",
    },
  ];
  const [page, setPage] = useState(0);

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
