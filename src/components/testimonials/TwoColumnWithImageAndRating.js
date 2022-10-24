
import "slick-carousel/slick/slick.css";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container } from "components/misc/Layouts.js";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactComponent as StarIconBase } from "images/star-icon.svg";
import {
  Col, Row
} from "reactstrap";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;


const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;

export default function TwoColumnWithImageAndRating({
  subheading = "Reviews",
  heading = "Our Clients Google Reviews.",
  description = "Before our technicians start any work, they always explain what they are going to do.Our technicians are available on your schedule! Call ahead to schedule a convenient appointment",


}) {
  var testimonial1 = {
    stars: 5,
    quote:
      "I have had them out a couple of times for different issues and I am very pleased with the service. ",
    customerName: "Chauncy Reggei",
  }

  var testimonial3 = {
    stars: 4,
    quote:
      "Glad I called them, no beating around the bush the guy knows what he is doing. Will recommend to my neighbours.   ",
    customerName: "James Coffin ",
  }
  var testimonial4 = {
    stars: 4,
    quote:
      "Tech was very accurate, he used coverings not scratch the floor and paid attention to our notes regarding noise level. We had a little one sleeping.  ",
    customerName: "Scott Styner ",
  }
  var testimonial5 = {
    stars: 5,
    quote:
      "Honest and professional approach. Very quick fix, glad they didn’t charge arm and a leg.  ",
    customerName: "Justin Church ",
  }
  var testimonial6 = {
    stars: 5,
    quote:
      "I had my dishwasher leaking and previous tech told us to by a new one, we decided to give it one more chance and didn’t regret. Thanks Tiffany for recommending them.",
    customerName: "Christina Gaber  ",
  }
  var testimonial7 = {
    stars: 4,
    quote:
      "Didn’t expect tech to show up on weekends but glad I was home. My dryer had no heat , Alex managed to fix it under an hour and its back in business, yay!   ",
    customerName: "Theresa Tree  ",
  }
  return (
    <Container>

      <Row className="review-pt">
        <Col
          className="d-flex flex-column justify-content-center align-items-center p-3 w-100 testimonial-mt" lg={12} md={12} sm={12}>
          <Subheading>{subheading}</Subheading>
          <Heading>{heading}</Heading>
          <div className="p-3  w-half">
            <Description >{description}</Description>
          </div>

        </Col>
        <Col lg={1} md={1} sm={12}></Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center p-4 iframe-homestar" lg={5} md={5} sm={12}>
          <ResponsiveEmbed aspectRatio="1by1">
            <embed type="image/svg+xml" src="https://homestars.com/widgets/reviews/polar-tech-appliance/large" />
          </ResponsiveEmbed>
          {/* <Iframe url="https://homestars.com/widgets/reviews/polar-tech-appliance/large"
            width="490"
            height="490"
            id="myId"
            scrolling='no'
            className="myClassname mt-3"
            display="initial"
            position="relative" /> */}

        </Col>
        <Col lg={6} md={6} sm={12} className="home-testimonial  p-4 pt-5">
          <Carousel infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column w-100">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <img style={{ display: "none" }} src="" alt="hello1" />
              <div className="mt-3">
                <h5>
                  {testimonial1.quote} </h5>
              </div>
              <div className="  mt-4">
                <h4 className="mb-2">
                  {testimonial1.customerName}
                </h4>
              </div>
            </div>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column w-100">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <div className="mt-3">
                <h5>
                  {testimonial1.quote} </h5>
              </div>
              <div className=" mt-4">
                <h4 className="mb-2">
                  {testimonial1.customerName}
                </h4>
              </div>
            </div>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <div className="mt-3">
                <h5>
                  {testimonial3.quote} </h5>
              </div>
              <div className="  mt-4">
                <h4 className="mb-2">
                  {testimonial3.customerName}
                </h4>
              </div>
            </div>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <div className="mt-3">
                <h5>
                  {testimonial4.quote} </h5>
              </div>
              <div className="  mt-4">
                <h4 className="mb-2">
                  {testimonial4.customerName}
                </h4>
              </div>
            </div>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <div className="mt-3">
                <h5>
                  {testimonial5.quote} </h5>
              </div>
              <div className="  mt-4">
                <h4 className="mb-2">
                  {testimonial5.customerName}
                </h4>
              </div>
            </div>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <div className="mt-3">
                <h5>
                  {testimonial6.quote} </h5>
              </div>
              <div className="  mt-4">
                <h4 className="mb-2">
                  {testimonial6.customerName}
                </h4>
              </div>
            </div>
            <div className="home-testimonial d-flex justify-content-center align-items-center flex-column">
              <StarsContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsContainer>
              <div className="mt-3">
                <h5>
                  {testimonial7.quote} </h5>
              </div>
              <div className="  mt-4">
                <h4 className="mb-2">
                  {testimonial7.customerName}
                </h4>
              </div>
            </div>

          </Carousel>
        </Col>

      </Row>

    </Container>
  );
};
