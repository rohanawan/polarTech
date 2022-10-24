import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { Col } from "react-bootstrap"
const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
// const Image = styled.div(props => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
// ]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`; 
// const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default function VerticalWithAlternateImageAndText(props) {
  const Title = props.withh2 ? tw.h2`text-3xl font-bold text-gray-900` : tw.h1`text-3xl font-bold text-gray-900`;

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle className="app-secondary-text">{props.pageTitle}</HeadingTitle>
          <HeadingDescription>
            {/* Here are some of the most popular events in New York City curated by professionals. */}
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {props.data.map((card, i) => (
            <Card id={card?.id} key={i} reversed={i % 2 === 1}>

              <Col xl={6} lg={6} md={6} sm={12}>
                <img
                  // className={card.id === "refrigerator-Repair" ? "about-image  " : " "}
                  alt={card?.altAttribute} src={card.image} />
              </Col>

              {/* <Details   className="about-section-text   pl-5 pb-5"> 
                <div style={{left:i % 2 === 0 ?"0":"-296", height:(card?.backgroundHeight) ? card?.backgroundHeight:"78vh"}}  className=" about-section-text-overlay"></div> */}
              <Col xl={6} lg={6} md={6} sm={12}>
                <Details className="    pl-5 pb-5">

                  <Title className=" pt-2">{card.heading}   </Title>
                  <h2 style={{ fontSize: "20px" }} >{card.subHeading}</h2>
                  {card.rowLength === 2 ? card.data.map((da, index) => {
                    return (
                      <li key={index} className="list-heading">
                        <h3  >{da.head}</h3>
                        <p className="list-text"> {da.text} </p>
                      </li>
                    )
                  })
                    :
                    card.rowLength === 3 ? card.data.map((da, index) => {
                      return (
                        <li key={index} id="dryer-Repair" className="list-heading">
                          <h3>{da.head}</h3>
                          <strong className="d-block"><h3>  Cause :</h3> </strong>  <p className="list-text"> {da.cause} </p>
                          <strong className="d-block"> <h3>     Solution::</h3> </strong>  <p className="list-text"> {da.solution} </p>
                        </li>
                      )
                    }) : card.rowLength === 4 ? card.data.map((da, index) => {
                      return (
                        <li key={index} className="list-heading">
                          <h3>{da.head}</h3>
                          <strong className="d-block"><h3> Cause : </h3></strong>  <p className="list-text"> {da.cause} </p>
                          <strong className="d-block">  <h3>    Solution:</h3> </strong>  <p className="list-text"> {da.solution} </p>
                          { da.points.map(p => {
                            return (
                              <p className="list-text"> {p.d} </p>
                            )
                          }
                          )}
                        </li>
                      )
                    }) : ""
                  }
                  {/* <Link href={card.url}>See Event Details</Link> */}
                </Details>

              </Col>

            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container >
  );
};
