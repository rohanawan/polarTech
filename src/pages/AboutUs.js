import React from "react";
import { Col, Container, Row } from "reactstrap";
import Washer from "../images/washerRepair.jpg";
import Dryer from "../images/dryerRepair.jpg";
import Dishwasher from "../images/dishwasherRepair.jpg";
import RetirementHomes from "../images/retirementHomes.jpg";
import PropertyManagementIcon from "../images/icons/partners/propertyManagementIcon-10.jpg";
import ApplianceStoreIcon from "../images/icons/partners/appliances.png";
import MissionVideoBackground from "../images/vedio/MissionVideoBackground.mp4"
import LG from "../images/LG-logo.png";
import Samsung from "../images/Logo-Samsung.png";
import Electrolux from "../images/electrolux-logo2.png";
import Kenmore from "../images/Kenmore-logo.png";
import Bosch from "../images/Bosch-Logo.png";
import Frigidaire from "../images/Frigidaire-Logo.png";
import KitchenAid from "../images/KitchenAid-logo.png";
import Maytag from "../images/Maytag-logo.png";
import Whirlpool from "../images/Whirlpool-logo.png";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import Navbar from "components/headers/Navbar";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import WhatsApp from "components/misc/WhatsApp";
import { Helmet } from "react-helmet";
import PageTitlesAndDescription from "config/config";
class AboutUs extends React.Component {

    state = {
        pageTitle: "Appliance Maintenance Tips",
        data: [
            {
                image: Washer,
                rowLength: 2,
                altAttribute: "Calagary LG washer appliance repair",
                heading: "Washer Maintenance Tips",
                data: [
                    {
                        head: "Inspect the hoses.",
                        text: "Every month or so, make sure there are no bulges or cracks and the fittings are tight."
                    },
                    {
                        head: "Don’t overload it.",
                        text: "Oversize loads can damage your washer, so break up your laundry into smaller loads."
                    },
                    {
                        head: "Use the right type of detergent",
                        text: "Make sure you’re using the right kind for your model. Many energy-efficient washers require a low-sudsing detergent"
                    },
                    {
                        head: "Use the right amount of detergent.",
                        text: "Too much detergent will leave a residue and is hard on your washer. Pods make it easy, but if you’re using liquid, measure according to the manufacturer’s directions."
                    },
                    {
                        head: "Clean the interior and dispensers.",
                        text: "Yes, you need to wash the washer. This will help keep it clean and smelling fresh. TIP! Every month or so, run an empty load of hot water with 2 cups of white vinegar. In the middle of the wash cycle, add ½ cup of detergent. Let the full cycle complete."
                    },
                    {
                        head: "Wipe down the drum, door and gasket.",
                        text: "Doing this once a month will help ensure the washer won’t give off odors that can seep into your laundry. TIP! Use equal parts water and vinegar to clean the gasket."
                    },
                ],
            },
            {
                image: Dryer,
                rowLength: 2,
                heading: "Dryer Maintenance Tips",
                altAttribute: "Calagary LG Dryer Appliance Repair",
                data: [
                    {
                        head: "Inspect the hoses.",
                        text: "Every month or so, make sure there are no bulges or cracks and the fittings are tight."
                    },
                    {
                        head: "Don’t overload it.",
                        text: "Oversize loads can damage your washer, so break up your laundry into smaller loads."
                    },
                    {
                        head: "Use the right type of detergent",
                        text: "Make sure you’re using the right kind for your model. Many energy-efficient washers require a low-sudsing detergent"
                    },
                    {
                        head: "Use the right amount of detergent.",
                        text: "Too much detergent will leave a residue and is hard on your washer. Pods make it easy, but if you’re using liquid, measure according to the manufacturer’s directions."
                    },
                    {
                        head: "Clean the interior and dispensers.",
                        text: "Yes, you need to wash the washer. This will help keep it clean and smelling fresh. TIP! Every month or so, run an empty load of hot water with 2 cups of white vinegar. In the middle of the wash cycle, add ½ cup of detergent. Let the full cycle complete."
                    },
                    {
                        head: "Wipe down the drum, door and gasket.",
                        text: "Doing this once a month will help ensure the washer won’t give off odors that can seep into your laundry. TIP! Use equal parts water and vinegar to clean the gasket."
                    },
                ],
            },
            {
                image: Dishwasher,
                rowLength: 2,
                heading: "Dishwasher Maintenance Tips",
                altAttribute: "Calagary LG Dishwasher Repair",
                data: [
                    {
                        head: "Wash Regularly",
                        text: "One of the best ways to ensure that your dishwasher is free from excess buildup is by running it regularly. Using your dishwasher frequently will keep debris from settling in the bottom of the appliance and can help reduce the amount of times that you will have to give it a thorough cleaning throughout the year."
                    },
                    {
                        head: "Empty the Dishwasher",
                        text: "In order to perform the following tips, it’s important that you run your dishwasher through a full cycle and then empty all of the dishes from the appliance. This allows you to have easier access to the entire dishwasher and be able to perform the necessary maintenance correctly."
                    },
                    {
                        head: "Inspect & Clean the Spinning Arms",
                        text: "Dishwashers work by spraying water out of their spinning arms onto the dishes inside. When those arms aren’t spinning properly or the holes in them are full of buildup, your dishes won’t be getting thoroughly cleaned. Check to make sure that the arms spin correctly and clean out any debris that has accumulated inside the holes with a small piece of wire, a toothpick, or small pliers."
                    },
                    {
                        head: "Clean the Edges and Exterior",
                        text: "Many times the offending smells that you may find coming from your dishwasher may actually be coming from the outside areas around the appliance. The edges around the door do not get washed during a regular cycle and can end up with lots of spills and pieces of food debris."
                    },
                ]
            },

        ],
    }

    render() {
        return (
            <AnimationRevealPage disabled>
                <Helmet>
                    <title>{PageTitlesAndDescription.AboutUs.title} </title>
                    <meta name="description" content={PageTitlesAndDescription.AboutUs.description} />
                </Helmet>
                <Navbar />
                <WhatsApp />
                <Container >
                    <Row id="our-Mission" className="   our-mission-contianer">

                        <div style={{ position: "relative", overflow: "hidden" }} className="hero-container mobile-height">
                            <video style={{ position: "absolute", top: "-25px", objectFit: "cover" }} className="hero-container mobile-height" id="background-video" loop autoPlay muted>
                                <source src={MissionVideoBackground} type="video/mp4" />
                                <source src={MissionVideoBackground} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                            <div className="banner-overlay mobile-height"></div>
                            <Col className="our-Mission" lg={12}>
                                <Container> <h1 className=" text-center pb-5"><strong style={{ color: "#00918A  ", zIndex: 4 }}>Company Mission Statement</strong></h1>
                                    <p style={{ color: "white !important", zIndex: 4 }}>
                                        "We are committed to a sustainable future and to improving the social, economic and environmental well being of the community. Therefore we focus on repairing appliance every single visit instead of advising a client to buy a new unit. We try our best so that each repair will be cost-effective for our customers!"                 </p>

                                    <h6 id="maintenance-and-User-Tips" className="d-flex justify-content-center pt-3 owner-text" style={{ color: "white !important", zIndex: 4 }}>~ Polar Tech Appliance ~</h6>
                                </Container>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <Row
                    // style={{backgroundColor:"#B9DFC6"}}
                    className="m-2 mt-5">
                    <Col lg={12}>
                        <VerticalWithAlternateImageAndText withh2={true} pageTitle={this.state.pageTitle} data={this.state.data} />
                    </Col>
                </Row>
                <div id="partnership" className="mt-5 maxWidth">
                    <h1 className="mt-4 text-center  "> <strong>Partnership within Calgary</strong></h1>
                    <Row className="mt-5">
                        <Col className="d-flex flex-column justify-content-center align-items-center" sm="6" md="4" lg="4">
                            <h3 className="text-center">Retirement Homes</h3>
                            <img className="partnership-images" src={RetirementHomes} alt="about1" />
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center" sm="6" md="4" lg="4">
                            <h3 className="text-center">Condo Boards</h3>
                            <img className="partnership-images mt-5" style={{ height: "unset" }} src={PropertyManagementIcon} alt="" />
                        </Col>
                        <Col id="location-Rates" className="d-flex flex-column justify-content-center align-items-center" sm="6" md="4" lg="4">
                            <h3 className="text-center">Appliances Stores</h3>
                            <img className="partnership-images" src={ApplianceStoreIcon} alt="about2" />
                        </Col>
                    </Row>
                </div>
                <Row
                    //    style={{backgroundColor:"#B9DFC6"}} 
                    className="mt-5  d-flex justify-content-center align-items-center pb-5 ">
                    <div >
                        <h1 className="mt-4 text-center  "> <strong>Alberta Location Rates</strong></h1>
                        <Row className="mt-5 d-flex justify-content-center">
                            <Col className="location-rate-card mt-5" sm="6" md="4" lg="2">
                                <div className="location-box">
                                    <h3>Cochrane</h3>
                                    <h4>Service Call </h4>
                                    <h5><strong className="mr-1">$</strong>85</h5>
                                </div>
                            </Col>
                            <Col className="location-rate-card mt-5" sm="6" md="4" lg="2">
                                <div className="location-box">
                                    <h3>Airdrie</h3>
                                    <h4>Service Call </h4>
                                    <h5><strong className="mr-1">$</strong>80</h5>
                                </div>
                            </Col>
                            <Col className="location-rate-card mt-5" sm="6" md="4" lg="2">
                                <div className="location-box">
                                    <h3>Canmore</h3>
                                    <h4>Service Call </h4>
                                    <h5><strong className="mr-1">$</strong>110</h5>
                                </div>
                            </Col>
                            <Col sm="6" md="4" lg="2" className="mt-5 location-rate-card ">
                                <div className="location-box">
                                    <h3>Chestermere</h3>
                                    <h4>Service Call </h4>
                                    <h5><strong className="mr-1">$</strong>75</h5>
                                </div>
                            </Col>
                            <Col id="brands" sm="6" md="4" lg="2" className="mt-5 location-rate-card">
                                <div className="location-box">
                                    <h3>Calgary</h3>
                                    <h4>Service Call </h4>
                                    <h5><strong className="mr-1">$</strong>70</h5>
                                </div>
                            </Col>
                            <Col sm="6" md="4" lg="2" className="mt-5 location-rate-card">
                                <div className="location-box">
                                    <h3>Edmonton</h3>
                                    <h4>Service Call </h4>
                                    <h5><strong className="mr-1">$</strong>120</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Row>
                <div className="mt-5 mb-5 maxWidth">
                    <h1 className="mt-4 text-center  "> <strong>Major Appliance Repair Brands  </strong></h1>


                    <Row className="mt-5 pr-lg-3 pl-lg-3 p-1 d-flex justify-content-center">
                        <Col sm="6" md="4" lg="2" className="brand-card mt-5">
                            <div className="brand-box"> <img src={LG} alt="LG" />  <h2>LG Repair</h2>     </div>
                        </Col>
                        <Col sm="6" md="4" lg="2" className="brand-card mt-5">
                            <div className="brand-box"><img src={Samsung} alt="Samsung" />    <h2>Samsung Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="brand-card mt-5">
                            <div className="brand-box">  <img src={Electrolux} alt="Electrolux" />     <h2>Electrolux Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="mt-5 brand-card ">
                            <div className="brand-box"><img src={Kenmore} alt="Kenmore" />  <h2>Kenmore Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="mt-5 brand-card">
                            <div style={{ padding: "48px " }} className="brand-box"><img src={Bosch} alt="Bosch" />   <h2>Bosch Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="mt-5 brand-card">
                            <div className="brand-box"> <img src={Frigidaire} alt="Frigidaire" /> <h2>Frigidaire Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="mt-5 brand-card">
                            <div style={{ padding: "48px " }} className="brand-box"> <img src={KitchenAid} alt="KitchenAid" />   <h2>Kitchen Aid Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="mt-5 brand-card">
                            <div style={{ padding: "48px " }} className="brand-box"> <img src={Maytag} alt="Maytag" /> <h2>Maytag Repair</h2></div>

                        </Col>
                        <Col sm="6" md="4" lg="2" className="mt-5 brand-card" >
                            <div style={{ padding: "48px " }} className="brand-box"> <img src={Whirlpool} alt="Whirlpool" />   <h2>Whirpool Repair</h2></div>

                        </Col>
                    </Row>
                </div>
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default AboutUs;
