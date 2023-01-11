import React from "react";
import { Page } from "./Page";

export const Schedule = () => {
  return (
    <Page>
      <div>
        <b>Welcome Dinner for out-of-towners</b>
        <ul>
          <li>Where? Danville, CA, restaurant TBD</li>
          <li>When? March 31, 2023 @ 7pm</li>
          <li>Please let us know in your RSVP if you plan on attending!</li>
        </ul>
      </div>
      <div>
        <b>Wedding Celebration</b>
        <ul>
          <li>Where? 255 Tim Ct, Danville CA (Andrew's parents' house)</li>
          <li>When? April 1, 2023 @ 4pm</li>
          <li>
            Please arrive on time for the ceremony. Dinner and reception to
            follow.
          </li>
        </ul>
      </div>
      <div>
        <b>Sunday Brunch</b>
        <ul>
          <li>Where? 255 Tim Ct, Danville CA (Andrew's parents' house)</li>
          <li>When? April 2nd, 2023</li>
          <li>We'll have fruits & bagels from 10am to noon.</li>
        </ul>
      </div>
    </Page>
  );
};
