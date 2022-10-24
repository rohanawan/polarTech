import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React, { useEffect } from "react";
import ServiceLandingPage from "demos/ServiceLandingPage.js";
import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import Repairs from "pages/Repair";
import ContactUs from "pages/ContactUs";
import Estimates from "pages/Estimates";
import { Router, Switch, Route } from "react-router-dom";
import Blogs from "demos/Blogs";
import { loadReCaptcha } from 'react-recaptcha-google'
import history from './history';
import SingleBlogsViewCopy from "components/features/SingleBlogsView copy";
import Bookings from "pages/Bookings";
import Four0Four from "pages/404";
// services routes 
import Services from "pages/ServicesNewDesign";
import WasherRepair from "pages/subServices/WasherRepair";
import DryerRepair from "pages/subServices/DryerRepair";
import DishwasherRepair from "pages/subServices/DishwasherRepair";
import RangeOrOvenRepair from "pages/subServices/RangeOrOvenRepair";
import RefrigeratorRepair from "pages/subServices/RefrigeratorRepair";
import MicrowaveRepair from "pages/subServices/MicrowaveRepair";
// ===== import Google ReactGA dependancy =========
import ReactGA from 'react-ga';




export default function App() {

    // ===== hook up google analytics to website using react-ga library/dependancy start =========
    useEffect(() => {
        ReactGA.initialize('G-Y4QGLHL31B');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    // ===== hook up google analytics to website using react-ga library/dependancy end =========

    useEffect(() => {
        loadReCaptcha();
    }, [])
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={ServiceLandingPage} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/services" component={Services} />

                {/* Services routes  */}
                <Route exact path="/services/washer-repair-calgary" component={WasherRepair} />
                <Route exact path="/services/dryer-repair-calgary" component={DryerRepair} />
                <Route exact path="/services/dishwasher-repair-calgary" component={DishwasherRepair} />
                <Route exact path="/services/range-or-oven-repair-calgary" component={RangeOrOvenRepair} />
                <Route exact path="/services/refrigerator-repair-calgary" component={RefrigeratorRepair} />
                <Route exact path="/services/microwave-repair-calgary" component={MicrowaveRepair} />
                {/* Services ended */}

                <Route exact path="/estimates" component={Estimates} />
                <Route exact path="/getDiscount" component={Bookings} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blog/:id" component={SingleBlogsViewCopy} />
                <Route path="*" component={Four0Four} />
            </Switch>
        </Router>
    );
}
