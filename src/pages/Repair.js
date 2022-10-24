import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MultiForm from "./Form";
export default function Repair() {
    return (
        <AnimationRevealPage disabled>
            <Header />
            <MultiForm />
            <Footer />
        </AnimationRevealPage>
    );
};
