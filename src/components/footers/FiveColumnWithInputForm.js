import React from "react";
import tw from "twin.macro";
import LOGO from "../../images/logo.png"
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as HomeStare } from "images/homestareSVG.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;

const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;
const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;

export default function FiveColumnWithInputForm() {
  return (
    <Container style={{ position: "relative !important", bottom: "0px" }}>
      <Content >
        <ThreeColRow>
          <LogoContainer>

            <img src={LOGO} className="logo " alt="logo" />

          </LogoContainer>
          <CopywrightNotice>&copy; {new Date().getFullYear()} Polar Tech Appliance. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer style={{ flexWrap: "wrap" }} className="d-flex justify-content-center align-items-center mb-3">
            <span className="mt-2 mr-2" style={{ fontSize: "14px" }}>
              Contact : <a href="tel:4039738894">+1(403)973-8894</a>
            </span>
            <div className="d-flex justify-content-center align-items-center  ">
              <a href="https://www.facebook.com/Polar-Tech-Appliance-103813575143068">  <span className="font-awesome-color d-flex justify-content-center align-items-center " >
                <FacebookIcon style={{ color: "white", width: "20px" }} />
              </span>
              </a>
              <a href="https://twitter.com/AppliancePolar">
                <span className="font-awesome-color d-flex justify-content-center align-items-center" >
                  <TwitterIcon style={{ color: "white", width: "20px" }} />
                </span>
              </a>
              <a href="https://homestars.com/companies/2954594-polar-tech-appliance?searched_category_id=306&service_area=2249796">
                <span className="font-awesome-color d-flex justify-content-center align-items-center" >
                  <HomeStare style={{ width: "20px", height: "100%" }} />
                </span>
              </a>
            </div>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
