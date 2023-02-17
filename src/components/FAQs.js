import React from "react";
import { Page } from "./Page";

export const FAQSection = ({ title, children }) => {
  return (
    <div>
      <b>{title}</b>
      {children}
    </div>
  );
};

export const FAQs = () => {
  return (
    <Page>
      <>
        <FAQSection title="Where should I stay?">
          <p>
            Should you choose to stay in Danville, we recommend the{" "}
            <a href="https://www.danvillesycamoreinn.com/en">Best Western</a> in
            downtown Danville, which is walkable to the wedding venue and quaint
            downtown Danville.
          </p>
          <p>
            If you don't mind a short drive, then two other good options are
            <ul>
              <li>
                The{" "}
                <a href="https://www.marriott.com/en-us/hotels/oaksr-san-ramon-marriott/overview/">
                  San Ramon Marriott
                </a>
                , which is a 10min drive away.
              </li>
              <li>
                The{" "}
                <a href="https://www.hyatt.com/en-US/hotel/california/hyatt-house-san-ramon/oakxs">
                  Hyatt House
                </a>{" "}
                (also in San Ramon) which is an 8 minute drive away.
              </li>
            </ul>
          </p>
          <p>
            You can also stay in San Francisco/Berkeley/Oakland, which are
            20-35min away by car. Contact us if you would like to discuss the
            more adventurous option of camping in a neighbor's backyard - we
            have all the necessary equipment for that.
          </p>
          <p></p>
        </FAQSection>
        <FAQSection title="What's the best airport?">
          <p>
            The two best options are OAK or SFO. OAK is a bit closer to
            Danville, but both have BART train access or are within 45min by
            car.
          </p>
        </FAQSection>
        <FAQSection title="How do I get around?">
          <p>
            Danville is a 10min drive from the nearest BART train station in
            Walnut Creek. The easiest way to get to and from the train station
            is probably Uber/Lyft, but for NUMTOTS there is a bus. If you take
            the Danville bus, we will name our first child after you. The bus
            from BART to Danville stops 1/4 mile from our house, and across the
            street from the Best Western.
            <p></p>
            If you're staying at the Danville Best Western, it’s a nice 30min
            walk via the Iron Horse Trail to the venue.
          </p>
        </FAQSection>
        <FAQSection title="What should I wear?">
          <p>Friday night welcome dinner: casual.</p>
          <p>
            Saturday ceremony and dinner: garden party/semi-formal (but heels
            are probably not the best idea because of the lawn, and also because
            Minh is short so what are you trying to do, make her look even
            shorter?).
          </p>
        </FAQSection>
        <FAQSection title="Do you have a wedding registry?">
          <p>
            No gifts, please. Your attendance is the best and only gift that we
            will accept. If you insist, please send a gift on our behalf to{" "}
            <a
              target="_blank"
              href="https://thehumaneleague.org/"
              rel="noreferrer"
            >
              The Humane League
            </a>
            , which work on ending the abuse of animals raised for food.
          </p>
        </FAQSection>
      </>
    </Page>
  );
};
