import React from "react";
import Installation from "../../images/demo/home (2).jpg"
import Delivery from "../../images/applianceDelivery.png"
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Refrigerator from "../../images/fridgeSamsung.png";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import NavBar from "components/headers/Navbar";
import { Helmet } from "react-helmet";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
class RefrigeratorRepair extends React.Component {

    state = {
        pageTitle: "Refrigerator Repair Services",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [

            {
                image: Refrigerator,
                rowLength: 2,
                heading: "Refrigerator Repair in Calgary",
                id: "refrigerator-Repair",
                backgroundHeight: "135vh",
                subHeading: " Common Fridge Problems",
                altAttribute: "Calagary Sumsung Refrigerator Repair",
                data: [
                    {
                        head: "Fridge Leaking water ",
                        text: "Cause: Frozen lines A leaky refrigerator can be a major cause for concern. To avoid property damage, it’s important to address this issue fast. "
                    },
                    {
                        head: "Refrigerator Is Constantly Cycling Or Running ",
                        text: "One of the most common refrigerator problems is a unit that cycles, or runs, too frequently. Your refrigerator needs to run in order to maintain cool temperatures for food, and a refrigerator that constantly runs can be very noisy. Even worse, it will significantly increase your energy bill, as the refrigerator is one of the most power-intensive appliances in any home.    The most common cause of a refrigerator running too much is buildup of dust or other kitchen debris around the unit’s condenser coils. To check this, you should cut power to your refrigerator and access the coils, which are commonly on the bottom of the unit.    If the problem persists after cleaning, your refrigerator’s temperature may be set too low, causing it to run constantly to maintain a very low temperature. Try adjusting your refrigerator’s temperature to see if this impacts the cycling. Consider consulting a professional refrigerator repairman if problems persist. "
                    },
                    {
                        head: "Ice build up inside freezer ",
                        text: "Your refrigerator’s freezer is the perfect storage space for ice, but it shouldn’t contain significant ice buildup.Leaving the freezer open for too long could cause ice buildup, as this raises the humidity level inside the freezer. Be sure to close your freezer door when you’ve finished accessing the unit to ensure humidity levels do not rise too much. Your freezer may also have a faulty seal, which lets in outside air to raise humidity. You can replace your freezer’s seal to ensure it holds the proper temperatures and humidity levels. "
                    },
                    {
                        head: "Refrigerator Water Dispenser Doesn’t Work ",
                        text: "Many modern refrigerators feature a built-in water dispenser, providing your home with cold and fresh water with ease. Your unit’s water dispenser may not work for a variety of reasons.The water tub in your unit’s freezer door may be frozen, blocking fresh water from flowing through the dispenser. Luckily, this tub can be disconnected and thawed, allowing water to flow once again. You may also have a defective water inlet valve. The water inlet valve opens to supply the dispenser with water, but may be broken. You may also have low water pressure, meaning that water is not being pushed through the inlet valve for the dispenser. If you have difficulty solving this issue, consider contacting our professional refrigerator repair technician. "
                    },
                    {
                        head: "Refrigerator Is Warm ",
                        text: "Refrigerators are designed to stay cold, making excessive heat from your unit particularly alarming. If you notice your refrigerator is warm, you’ll definitely need to complete repairs fast.  A warm refrigerator is likely caused by problems with its condenser coils. You can start by cleaning the refrigerator’s condenser coils, while also checking the condenser fan motor to ensure it is running properly. This problem can be particularly difficult to solve, and often requires our professional refrigerator repair services to fix. "
                    }

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
                    <title> {PageTitlesAndDescription.ServicesSubPages.RefrigeratorRepair.title}  </title>
                    <meta name="description" content={PageTitlesAndDescription.ServicesSubPages.RefrigeratorRepair.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <VerticalWithAlternateImageAndText withh2={false} pageTitle={this.state.pageTitle} data={this.state.data} />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default RefrigeratorRepair;
