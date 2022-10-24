import React from "react";
import Slider1 from "../images/contact/slider-23.jpg"
import Slider2 from "../images/contact/slider24.jpg"
import Slider3 from "../images/contact/slider-25.jpg"
import Slider4 from "../images/contact/slider-26.jpg"
import Slider5 from "../images/contact/slider-27.jpg"
import Slider6 from "../images/contact/slider-28.jpg"
import { Row, Col } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ContactUsForm from "components/forms/ContactUsForm";
import Map from "./Map";
import NavBar from "components/headers/Navbar";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
import { Helmet } from "react-helmet";

class ContactUs extends React.Component {

    render() {

        return (
            <AnimationRevealPage disabled>
                <Helmet>
                    <title> {PageTitlesAndDescription.ContactUs.title}</title>
                    <meta name="description" content={PageTitlesAndDescription.ContactUs.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <div className="pt-3 mt-4 pl-3 pr-3 ">
                    <Row className="d-flex justify-content-center">
                        <Carousel infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
                            <div>
                                <img src={Slider1} alt="Calgary Emergency Appliance Repair" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={Slider2} alt="Calgary Affordable Appliance Repair and Service" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={Slider3} alt="Efficient and reasonable  applinace repair" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={Slider4} alt="Calgary Certified Appliance Repair and Technicians" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={Slider5} alt="Trained Technicians Appliance Repair" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={Slider6} alt="Fast reliable applinace repair" />
                                <p className="legend">Legend 1</p>
                            </div>

                        </Carousel>
                    </Row>
                    <ContactUsForm />

                    <Row className="contact-us-map-bg mt-5">
                        <Col className=" maxWidth "
                        >
                            <Map />
                        </Col>
                    </Row>
                </div>
                <Footer />
            </AnimationRevealPage>
        );
    }
}


export default ContactUs;









