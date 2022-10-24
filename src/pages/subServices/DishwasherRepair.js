import React from "react";
import Dishwasher from "../../images/dishwasherRepair.jpg";
import Installation from "../../images/demo/home (2).jpg"
import Delivery from "../../images/applianceDelivery.png"
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import NavBar from "components/headers/Navbar";
import WhatsApp from "components/misc/WhatsApp";
import { Helmet } from "react-helmet";
import PageTitlesAndDescription from "config/config";
class DishwasherRepair extends React.Component {

    state = {
        pageTitle: "Dishwasher Repair Service",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [

            {
                image: Dishwasher,
                rowLength: 2,
                heading: "Dishwasher Repair in Calgary",
                id: "dishwasher-Repair",
                backgroundHeight: "97vh",
                subHeading: "Common Dishwasher Problems ",
                altAttribute: "Calagary LG Dishwasher Repair",
                data: [
                    {
                        head: "Dishes not drying.",
                        text: "Not using rinse aid. Dishwashers are designed to use a liquid rinse aid, which greatly improves drying. Rinse aid also keeps water droplets from forming, thus preventing spots or streaks on dishes during drying"
                    },
                    {
                        head: "Dishwasher not draining.",
                        text: "New disposal installed and drain plug not removed. It’s common in a new installation of a garbage disposal to keep the knockout plug in place. For many dishwashers, the drain hose connects to the garbage disposal, so the knockout plug must be removed for the dishwasher to drain."
                    },
                    {
                        head: "Dishwasher leaves spots or a film on glassware.",
                        text: "Hard water conditions and not using a rinse aid. White film (hard water) is caused by high levels of minerals such as calcium and magnesium. People who live in areas that have hard water often struggle with white film on their dishes, glasses and the interior tub of the dishwasher"
                    },
                    {
                        head: "Dishwasher running too long.",
                        text: "Low water temp and new efficient design. Long cycle times can be caused by: Not running the hot water in the sink before starting the dishwasher. Turn on the hot water faucet nearest to the dishwasher for a couple of minutes to clear any cold water from the pipes. Choice in cycle selection and options: Some cycles run longer than others. Cycles such as sanitize and options like extra dry heat increase the cycle time. Household water temperature in the water heater is not set to at least 120ºF."
                    },
                    {
                        head: "Particles of food on dishes.",
                        text: "Clogged filter. Not every model will have a removable filter. Check your owner’s manual. If the filters are clogged or dirty, it may result in food particles on dishes and affect overall cleaning performance. The filters need to be cleaned when: Objects or soiled spots are visible on the upper filter assembly. There are food particles or soil still present on the dishes. Dishes feel gritty to the touch. Enough time has passed based on the cleaning chart recommendations found in the owner’s manual.Caution: There may be sharp objects such as broken glass in this area."
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
                    <title> {PageTitlesAndDescription.ServicesSubPages.DishwasherRepair.title}  </title>
                    <meta name="description" content={PageTitlesAndDescription.ServicesSubPages.DishwasherRepair.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <VerticalWithAlternateImageAndText withh2={false} pageTitle={this.state.pageTitle} data={this.state.data} />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default DishwasherRepair;
