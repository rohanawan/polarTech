
import React from "react";
import MultiForm from "./Form";
import Navbar from "../components/headers/Navbar";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
import { Helmet } from "react-helmet";
class Estimates extends React.Component {
    render() {
        return (
            <AnimationRevealPage disabled>
                <Helmet>
                    <title>{PageTitlesAndDescription.Estimates.title} </title>
                    <meta name="description" content={PageTitlesAndDescription.Estimates.description} />
                </Helmet>
                <Navbar />
                <WhatsApp />
                <MultiForm />
                <Footer />
            </AnimationRevealPage>
        );
    }
}
export default Estimates;
