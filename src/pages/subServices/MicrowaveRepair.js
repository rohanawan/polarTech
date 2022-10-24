import React from "react";
import MicroWave from "../../images/microwaveSamsung.png"
import Installation from "../../images/demo/home (2).jpg"
import Delivery from "../../images/applianceDelivery.png"
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import NavBar from "components/headers/Navbar";
import { Helmet } from "react-helmet";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
class MicrowaveRepair extends React.Component {

    state = {
        pageTitle: "Microwave Repair Services",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [

            {
                image: MicroWave,
                rowLength: 2,
                heading: "Microwave Repair in Calgary ",
                id: "microwave-Repair",
                backgroundHeight: "100vh",
                subHeading: " Common Microwave Problems",
                altAttribute: "Calagary Microwave Repair and Installation",
                data: [
                    {
                        head: "Microwave is Not Heating",
                        text: "Microwaves have heating components called diode and magnetron, which emits heat to the food. When burned out, your food won’t heat up and thus they need to be replaced with a new one to get your oven up and running once again."
                    },
                    {
                        head: "Microwave Stops in the Middle of Cooking",
                        text: "When your Microwave shuts off in the middle of cooking, it’s probably a problem with the switchboard. A bad wiring connection heats up and causes the fuse to trip, and then cuts off the power.Additionally, microwaves need a good amount of space for ventilation. Placing them in a cramped space may cause them to overheat and shut down in the middle of cooking until it cools down again."
                    },
                    {
                        head: "Microwave Plate is Not Spinning",
                        text: "A damaged motor beneath the plate is the most probable culprit behind your microwave plate not spinning as it should. This can be easily replaced by your technician. In case, it’s not a problem with the motor, the next thing you need to look into is the switchboard. Caution! Don’t try this yourself. Get a licensed technician check it for you."
                    },
                    {
                        head: "Sparking Microwave",
                        text: "Does it look like your microwave is enjoying some fireworks? Well it’s probably just another indication that your oven has a problem. Peeling off paint from the inside walls is one of the most common cause of this, as the microwaves instead of reflecting from a smooth surface begin to get absorbed and cause sparks. Also worth checking is the rack support for any damage and finally, look for the diode burn out."
                    },
                    {
                        head: "No Light Inside",
                        text: "We all like to have a peek from time to time as our food cooks inside the microwave. But you feel blindfolded when the microwave lights are not working. This can be caused due a fused bulb, a faulty socket or a bad wiring. In case, all of the above are in good shape, next you need to check the switchboard to see if it is even sending the power to the bulb or not."
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
                    <title> {PageTitlesAndDescription.ServicesSubPages.MicrowaveRepair.title}  </title>
                    <meta name="description" content={PageTitlesAndDescription.ServicesSubPages.MicrowaveRepair.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <VerticalWithAlternateImageAndText withh2={false} pageTitle={this.state.pageTitle} data={this.state.data} />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default MicrowaveRepair;
