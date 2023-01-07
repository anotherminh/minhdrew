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
            We recommend the{" "}
            <a href="https://www.danvillesycamoreinn.com/en">Best Western</a> in
            downtown Danville, which is also walkable to the wedding venue.
          </p>
          <p>
            Another option is the San Ramon Marriott which is 10 minutes drive
            away. You can also stay in San Francisco/Berkeley/Oakland, which is
            about 20-35min drive away. Alternatively, for a more adventurous
            option, you can also camp in the neighbor’s backyard!
          </p>
          <p>
            It's also possible to stay in San Francisco/Oakland/Berkeley, all of
            which are about 30-50min away from Danville by car.
          </p>
        </FAQSection>
        <FAQSection title="What's the best airport?">
          <p>
            The two best options are OAK or SFO. There's not a huge difference
            between them, as both are accessible via public transit (BART) and
            are about equidistant from Danville.
          </p>
        </FAQSection>
        <FAQSection title="How do I get around?">
          <p>
            If you're staying at the Danville Best Western, it’s a nice 30-min
            walk via the Iron Horse Trail to the venue. Uber/Lyft is always an
            option as well.
          </p>
        </FAQSection>
        <FAQSection title="Do you have a wedding registry?">
          <p>
            Your presence with us on our special is the best gift. If you
            insist, please send a gift on our behalf to [these charities] which
            work on [xyz].
          </p>
        </FAQSection>
      </>
    </Page>
  );
};
