import React from "react";
import Washer from "../images/washerRepair.jpg";
import Dryer from "../images/dryerRepair.jpg";
import Dishwasher from "../images/dishwasherRepair.jpg";
import RangeMaintenance from "../images/rangeMaintenance.jpg";
import MicroWave from "../images/microwaveSamsung.png"
import Installation from "../images/demo/home (2).jpg"
import Delivery from "../images/applianceDelivery.png"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Refrigerator from "../images/fridgeSamsung.png";
import NavBar from "components/headers/Navbar";
import WhatsApp from "components/misc/WhatsApp";
import ServicesViewList from "components/features/ServicesViewList";
import PageTitlesAndDescription from "config/config";
import { Helmet } from "react-helmet";
class Services extends React.Component {

    state = {
        pageTitle: "services - new ",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [
            {
                image: Washer,
                heading: " Washer Repair in Calgary ",
                url: "/services/washer-repair-calgary",
                subHeading: "Common Washer Problems",
                altAttribute: "Calagary LG washer appliance repair",
                description: "Calagary LG washer appliance repair Calagary LG washer appliance repair Calagary LG washer appliance repair Calagary LG washer appliance repair"
            },
            {
                image: Dryer,
                heading: "Dryer Repair in Calgary ",
                url: "/services/dryer-repair-calgary",
                subHeading: " Common Dryer Problems",
                altAttribute: "Calagary LG Dryer Appliance Repair",
                description: "Calagary LG Dryer Appliance Repair Calagary LG Dryer Appliance Repair Calagary LG Dryer Appliance Repair Calagary LG Dryer Appliance Repair"
            },
            {
                image: Dishwasher,
                heading: "Dishwasher Repair in Calgary",
                url: "/services/dishwasher-repair-calgary",
                subHeading: "Common Dishwasher Problems ",
                altAttribute: "Calagary LG Dishwasher Repair",
                description: "Calagary LG Dishwasher Repair Calagary LG Dishwasher Repair Calagary LG Dishwasher Repair Calagary LG Dishwasher Repair"
            },
            {
                image: RangeMaintenance,
                heading: "Range or Oven Repair in Calgary ",
                url: "/services/range-or-oven-repair-calgary",
                subHeading: "Common Range or Oven Problems ",
                altAttribute: "Calagary Range Oven Stove Repair",
                description: "Calagary Range Oven Stove Repair Calagary Range Oven Stove Repair Calagary Range Oven Stove Repair Calagary Range Oven Stove Repair"
            },
            {
                image: Refrigerator,
                heading: "Refrigerator Repair in Calgary",
                url: "/services/refrigerator-repair-calgary",
                subHeading: " Common Fridge Problems",
                altAttribute: "Calagary Sumsung Refrigerator Repair",
                description: "Calagary Sumsung Refrigerator Repair Calagary Sumsung Refrigerator Repair Calagary Sumsung Refrigerator Repair Calagary Sumsung Refrigerator Repair"
            },
            {
                image: MicroWave,
                heading: "Microwave Repair in Calgary ",
                url: "/services/microwave-repair-calgary",
                subHeading: " Common Microwave Problems",
                altAttribute: "Calagary Microwave Repair and Installation",
                description: "Calagary Microwave Repair and Installation Calagary Microwave Repair and Installation Calagary Microwave Repair and Installation Calagary Microwave Repair and Installation"
            },
            {
                image: Installation,
                heading: " Installations in Calgary",
                url: "null",
                subHeading: "We also offer:",
                altAttribute: "Calagary appliance installation Washing Machine Dishwasher",
                description: "Dishwashers installation ,  Dishwashers new installations or re-installation of old units     Microwave installation   Microwave only re-installations are available at this moment "
            },
            {
                image: Delivery,
                heading: "Delivery within Calgary",
                url: "null",
                subHeading: "Fixed rate $100 within 40km range",
                altAttribute: "Calagary Appliance Delivery and Installation",
                description: "Delivery :  We have a number of delivery contractors to help you swap an irreparable appliance quick and headache free.    Please Call Us for a quote."
            },]
    }
    render() {
        return (
            <AnimationRevealPage disabled>
                <Helmet>
                    <title>{PageTitlesAndDescription.Services.title} </title>
                    <meta name="description" content={PageTitlesAndDescription.Services.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                {this.state.data?.map((item) => (
                    <ServicesViewList
                        key={Math.random()}
                        heading={item.heading}
                        description={item.description}
                        altAttribute={item.altAttribute}
                        primaryButtonText="Learn More"
                        imageSrc={item.image}
                        url={item.url}
                    />
                )
                )}
                <Footer />
            </AnimationRevealPage >
        );
    }
}
export default Services;
