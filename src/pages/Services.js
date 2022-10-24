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
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import NavBar from "components/headers/Navbar";
// import Json2xml from "../helpers/JSONtoXML/JSON2XML";
// import CreateXMLFile from "JSONtoXMLFile";

import WhatsApp from "components/misc/WhatsApp";
class Services extends React.Component {

    state = {
        pageTitle: "Calgary Appliance Repair Services",
        description: "Polar Tech Appliances specializes in all types of appliance repair from the biggest brands. Specializing in stove, dishwasher, and refrigerator repairs for popular brands like LG, Samsung, Whirlpool, and GE appliance repairs in Calgary.",
        data: [
            {
                image: Washer,
                rowLength: 2,
                heading: " Washer Repair in Calgary ",
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
                image: RangeMaintenance,
                rowLength: 2,
                heading: "Range or Oven Repair in Calgary ",
                id: "range-or-Oven-Repair",
                backgroundHeight: "135vh",
                subHeading: "Common Range or Oven Problems ",
                altAttribute: "Calagary Range Oven Stove Repair",
                data: [
                    {
                        head: "Fridge Leaking water",
                        text: "Frozen lines. A leaky refrigerator can be a major cause for concern. To avoid property damage, it’s important to address this issue fast"
                    },
                    {
                        head: "Refrigerator Is Constantly Cycling Or Running",
                        text: "One of the most common refrigerator problems is a unit that cycles, or runs, too frequently. Your refrigerator needs to run in order to maintain cool temperatures for food, and a refrigerator that constantly runs can be very noisy. Even worse, it will significantly increase your energy bill, as the refrigerator is one of the most power-intensive appliances in any home. The most common cause of a refrigerator running too much is buildup of dust or other kitchen debris around the unit’s condenser coils. To check this, you should cut power to your refrigerator and access the coils, which are commonly on the bottom of the unit. If the problem persists after cleaning, your refrigerator’s temperature may be set too low, causing it to run constantly to maintain a very low temperature. Try adjusting your refrigerator’s temperature to see if this impacts the cycling. Consider consulting a professional refrigerator repairman if problems persist."
                    },
                    {
                        head: "Ice build up inside freezer",
                        text: "Your refrigerator’s freezer is the perfect storage space for ice, but it shouldn’t contain significant ice buildup. Leaving the freezer open for too long could cause ice buildup, as this raises the humidity level inside the freezer. Be sure to close your freezer door when you’ve finished accessing the unit to ensure humidity levels do not rise too much. Your freezer may also have a faulty seal, which lets in outside air to raise humidity. You can replace your freezer’s seal to ensure it holds the proper temperatures and humidity levels."
                    },
                    {
                        head: "Refrigerator Water Dispenser Doesn’t Work",
                        text: "Many modern refrigerators feature a built-in water dispenser, providing your home with cold and fresh water with ease. Your unit’s water dispenser may not work for a variety of reasons. The water tub in your unit’s freezer door may be frozen, blocking fresh water from flowing through the dispenser. Luckily, this tub can be disconnected and thawed, allowing water to flow once again. You may also have a defective water inlet valve. The water inlet valve opens to supply the dispenser with water, but may be broken. You may also have low water pressure, meaning that water is not being pushed through the inlet valve for the dispenser. If you have difficulty solving this issue, consider contacting our professional refrigerator repair technician."
                    },
                    {
                        head: "Refrigerator Is Warm",
                        text: "Refrigerators are designed to stay cold, making excessive heat from your unit particularly alarming. If you notice your refrigerator is warm, you’ll definitely need to complete repairs fast. A warm refrigerator is likely caused by problems with its condenser coils. You can start by cleaning the refrigerator’s condenser coils, while also checking the condenser fan motor to ensure it is running properly. This problem can be particularly difficult to solve, and often requires our professional refrigerator repair services to fix."
                    },
                ]
            },
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

    render() {
        // console.log("YOUR XML FILE" + Json2xml({
        //     "@schemaLocation": "http://www.sitemaps.org/schemas/sitemap/0.9             http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
        //     "url": {
        //         "loc": "https://polartechappliance.ca/",
        //         "lastmod": "2021-06-30T23:25:38+00:00",
        //         "priority": "1.00"
        //     }
        // }))
        // CreateXMLFile(Json2xml())
        // alert("fileCreated")
        return (
            <AnimationRevealPage disabled>
                <NavBar />
                <WhatsApp />
                <VerticalWithAlternateImageAndText withh2={false} pageTitle={this.state.pageTitle} data={this.state.data} />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default Services;
