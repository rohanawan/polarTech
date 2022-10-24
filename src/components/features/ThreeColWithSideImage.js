import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";


import { ReactComponent as FridgeSVG } from "images/svgs/fridge.svg";
import { ReactComponent as MicrowaveSVG } from "images/svgs/microwave.svg";
import { ReactComponent as RatingSVG } from "images/svgs/Rating.svg";
import { ReactComponent as Outline } from "images/svgs/outline.svg";
import { ReactComponent as Outline1 } from "images/svgs/outline-1.svg";
import { ReactComponent as SealSVG } from "images/svgs/seal.svg";
import { ReactComponent as WashingMachineSVG } from "images/svgs/washing-machine.svg";
import { ReactComponent as Page1 } from "images/svgs/Page-1.svg";
import { ReactComponent as Page2 } from "images/svgs/Page-2.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;


export default function ThreeColWithSideImage({ cards = null, heading = "Polar Tech Offers  ", subheading = "Features", description = "We are able to carry out repairs on most of kitchen appliances, including washing machines, tumble dryers, dishwashers, gas and electric cookers, fridge and freezers etc..." }) {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      svg: WashingMachineSVG,
      title: "Washing Machine Repair",
      description: "Our technicians are fully trained and our fixed price washing machine repairs include diagnostics, calibration and troubleshooting"
    },
    { svg: Page1, title: "Dryer   Repair", description: "Dryer repair is generally a quick fix and our experts can offer you a cheaper appliance repair options." },
    { svg: Outline1, title: "Dishwasher Repair", description: "If your dishwasher is too expensive to repair we can offer you a new dishwasher installation at discounted rate." },
    { svg: FridgeSVG, title: "Fridge Repair", description: "We prepared to fix any sort of issues from cosmetical to sealed system repairs." },
    { svg: Outline, title: "Oven Repair", description: "Having trouble with your oven, stove top, or range? Work with the experts! Contact us today for appliance repair." },
    { svg: MicrowaveSVG, title: "Microwave Repair", description: "We are now one of the leading domestic microwave repair companies in the  Alberta trusted by hundreds of customers." },
    { svg: Page2, title: " Liability insurance and WCB coverage." },

    { svg: RatingSVG, title: "Trained Professionals", description: "Our staff went through special training and able to deal with high degree of technical difficulties" },


    { svg: SealSVG, title: "3 Months Labor Warranty.", description: "Polar Tech provides 3 month of Labor warranty" },


  ];


  if (!cards) cards = defaultCards;

  return (
    <Container style={{ paddingTop: "unset" }} className="offers-section"  >
      <div className="offer-section-overlay"></div>
      <ThreeColumnContainer style={{ paddingTop: "unset" }}>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading className="app-secondary-text  ofer-heading">{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer ">

                <card.svg className="featureSvgs" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Our technicians are fully trained and our fixed price washing machine repairs include diagnosis parts."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
