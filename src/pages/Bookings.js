import NavBar from "components/headers/Navbar";
import React from "react";
import BookingForm from "./BookingForm";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
import { Helmet } from "react-helmet";
class Bookings extends React.Component {
    render() {
        return (
            <AnimationRevealPage disabled>
                <Helmet>
                    <title>{PageTitlesAndDescription.Booking.title} </title>
                    <meta name="description" content={PageTitlesAndDescription.Booking.description} />
                </Helmet>
                <NavBar />
                <WhatsApp />
                <div className="pt-3 pl-3 pr-3 ">
                    <BookingForm />
                </div>
                <Footer />
            </AnimationRevealPage>
        );
    }
}


export default Bookings;
