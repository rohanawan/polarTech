import React from "react";
import Washer from "../../images/washerRepair.jpg";
import Installation from "../../images/demo/home (2).jpg"
import Delivery from "../../images/applianceDelivery.png"
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import NavBar from "components/headers/Navbar";
import WhatsApp from "components/misc/WhatsApp";
import { Helmet } from "react-helmet";
import PageTitlesAndDescription from "config/config";
class WasherRepair extends React.Component {

    state = {
        pageTitle: "Washer Repair Services",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [
            {
                image: Washer,
                rowLength: 2,
                heading: "Washer Repair in Calgary ",
                id: "washer-Repair",
                subHeading: "Common Washer Problems",
                backgroundHeight: "70vh",
                altAttribute: "Calagary LG washer appliance repair",
                data: [
                    {
                        head: "Not draining.",
                        text: "Cause: Drain pump might be clogged and will need to be cleared out, but be careful do not attempt to do it yourself if you don’t have the right tools. There is a chance of flooding your floor when you open the drain trap."
                    },
                    {
                        head: "Loud Noise",
                        text: "Cause: Your washing machine is extremely noisy, this could mean the tub bearing is worn out. "
                    },
                    {
                        head: "Not filling",
                        text: "Cause: If your washer not filling water? That could mean a faulty water valve."
                    },
                    {
                        head: "Water overflowing or overfilling",
                        text: "Cause: The inlet water pressure valve might be too low. Threshold pressure is about 20 psi for the valve to operate properly."
                    },
                    {
                        head: "Leaking water",
                        text: "Cause: This could be a number of reasons, one of the most common issue is door boot seal. This type of repair requires a specialty tools to fix and about 2 hours of your time"
                    },
                ],
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
                    <title> {PageTitlesAndDescription.ServicesSubPages.WasherRepair.title}  </title>
                    <meta name="description" content={PageTitlesAndDescription.ServicesSubPages.WasherRepair.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <VerticalWithAlternateImageAndText withh2={false} pageTitle={this.state.pageTitle} data={this.state.data} />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default WasherRepair;
