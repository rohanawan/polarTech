import React from "react";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import SingleCol from "components/faqs/SingleCol";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
import { Helmet } from "react-helmet";
export default function ServiceLandingPage() {
  return (
    <AnimationRevealPage disabled>
      <Helmet>
        <title> {PageTitlesAndDescription.MainPage.title} </title>
        <meta name="description" content={PageTitlesAndDescription.MainPage.description} />
      </Helmet>
      <WhatsApp />
      <Hero />
      <div className="p-sm-2 homepage-bg">
        <Testimonial
          heading={
            <>
              <span className="app-secondary-text"> Our Clients Google Reviews</span>
            </>
          }
        />
        <ThreeColWithSideImage />
        <SingleCol />
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};
