import React from "react";
import Dryer from "../../images/dryerRepair.jpg";
import Installation from "../../images/demo/home (2).jpg"
import Delivery from "../../images/applianceDelivery.png"
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import NavBar from "components/headers/Navbar";
import { Helmet } from "react-helmet";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
class DryerRepair extends React.Component {

    state = {
        pageTitle: "Dryer Repair Services",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [

            {
                image: Dryer,
                rowLength: 3,
                heading: "Dryer Repair in Calgary ",
                id: "dryer-Repair",
                backgroundHeight: "80vh",
                subHeading: " Common Dryer Problems ",
                altAttribute: "Calagary LG Dryer Appliance Repair",
                data: [
                    {
                        head: "Dryer makes strange noises or vibrates",
                        cause: "Failed dryer drum seal. Frequent overloading or contact with foreign objects",
                        solution: "The seal will eventually need to be replaced.",
                    },
                    {
                        head: "Dryer runs but no heat",
                        cause: "Faulty thermal fuse. Blocked ventilation, clogged lint screens or a consistently overloaded machine",
                        solution: "If the thermal fuse is broken, it will need to be replaced.",
                    },
                    {
                        head: "Dryer runs but doesn’t get clothes dry",
                        cause: "Broken heating element. Blocked ventilation, clogged lint screen or consistently overloaded machine",
                        solution: "If the heating element fails, it will need to be replaced.",
                    },
                    {
                        head: "Dryer runs but then shuts off quickly",
                        cause: "Possible broken thermostat. Blocked ventilation, clogged lint screen or consistently overloaded machine",
                        solution: "If the thermostat fails, it will need to be replaced.",
                    },
                ]
            },

            {
                image: Installation,
                rowLength: 2,
                heading: " Installations in Calgary",
                id: "installations",
                backgroundHeight: "30vh",
                subHeading: "We also offer:",
                altAttribute: "Calagary appliance installation Washing Machine Dishwasher",
                data: [
                    {
                        head: "Dishwashers installation ",
                        text: "Dishwashers new installations or re-installation of old units "
                    },
                    {
                        head: "Microwave installation",
                        text: "Microwave only re-installations are available at this moment "
                    },
                ]
            },
            {
                image: Delivery,
                rowLength: 2,
                heading: "Delivery within Calgary",
                id: "delivery",
                backgroundHeight: "30vh",
                subHeading: "Fixed rate $100 within 40km range",
                altAttribute: "Calagary Appliance Delivery and Installation",
                data: [
                    {
                        head: "Delivery ",
                        text: "We have a number of delivery contractors to help you swap an irreparable appliance quick and headache free.    Please Call Us for a quote.   "
                    },

                ]
            },

        ]
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <AnimationRevealPage disabled>
                <Helmet>
                    <title> {PageTitlesAndDescription.ServicesSubPages.DryerRepair.title}  </title>
                    <meta name="description" content={PageTitlesAndDescription.ServicesSubPages.DryerRepair.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <VerticalWithAlternateImageAndText withh2={false} pageTitle={this.state.pageTitle} data={this.state.data} />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default DryerRepair;
