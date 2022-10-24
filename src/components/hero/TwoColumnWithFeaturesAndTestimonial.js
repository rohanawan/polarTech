
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/headers/Navbar";
import { Container, Row, Col, Spinner, } from "reactstrap";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg";
import { ReactComponent as PhoneIcon } from "images/phoneSvg.svg";
import axios from 'axios'
import history from '../../history';
import { connect } from 'react-redux';
import Slider1 from "../../images/kitchen4-2.jpg.jpg"
import Slider2 from "../../images/callCenterSmile-1.jpg.jpg"
import Slider3 from "../../images/qualityBallImage-3.jpg"
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-snug xl:text-6xl`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const Image = tw.img`max-w-full w-96 object-contain   w-full rounded-t sm:rounded absolute z-20`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
 ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
var CancelToken = axios.CancelToken;
var cancel;
class TwoColumnWithFeaturesAndTestimonial extends React.Component {
    _isMounted = false;
    state = {
        time: "",
        timer: false,
        timerEndDate: "",
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
        discountValue: "",
        timmerSection: false

    };
    getVariablesData = () => {
    };
    componentDidMount() {
        this._isMounted = true;
        var config = {
            method: 'get',
            url: `${process.env.React_App_BASE_URL}/pages`,
            headers: {},
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel = c;
            }),
        };
        axios(config)
            .then(response => {
                if (this._isMounted) {
                    var acf = { hourly_rate: response.data[3].acf.hourly_rate, service_rate: response.data[3].acf.service_rate, discount_value: response.data[3].acf.discount_value, discount_timer_range_start: response.data[3].acf.discount_timer_range_start, discount_timer_range_end: response.data[3].acf.discount_timer_range_end } = response.data[3].acf
                    this.setState({ timerEndDate: acf.discount_timer_range_end, discountValue: acf.discount_value })
                    var now = new Date().getTime();
                    var countDownDate = new Date(acf.discount_timer_range_end).getTime();

                    if (countDownDate > now) {
                        this.props.handleDiscountTimmer(true)
                    }
                    else {
                        this.props.handleDiscountTimmer(false)
                    }
                    this.props.updateHandler(acf)
                }
            }).then(() => {
                this.myInterval = setInterval(() => {
                    var countDownDate = new Date(this.state.timerEndDate).getTime();
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
                    if (countDownDate > now) {
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                        this.setState({ time: `${days} Days :  ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`, timer: false });
                        this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })

                    } else {
                        this.setState({ timer: true });
                        clearInterval(this.myInterval)
                    }
                }, 1000)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentWillUnmount() {
        cancel();
        this._isMounted = false;
        clearInterval(this.myInterval)
    }

    render() {
        const imageDecoratorBlob = true;
        const primaryButtonText = " Book Now    ";
        const primaryButtonText2 = "Book Now  ";
        const buttonRounded = true;
        const buttonRoundedCss = buttonRounded && tw`rounded-full`;
        return (
            <>
                <Navbar />
                <Container className="p-3">
                    <ContentWithVerticalPadding>
                        <Row>
                            {this.state.timmerSection ? <Col sm="6" className="d-flex justify-content-center align-items-center form-spinner"><Spinner color="primary" /></Col> :
                                <Col lg={6} md={6} sm={12} className="pt-lg-4 pt-md-4 pt-sm-1 pr-5">
                                    <TextColumn>
                                        <div className="d-flex justify-content-start text-left">

                                            {this.props.discount_timmer ?
                                                <div>

                                                    <div className="timer mt-5">
                                                        <div className="timer__container">
                                                            <span id="days">{this.state?.days}</span>
                                                            <p className="timer__label">Days</p>
                                                        </div>

                                                        <div className="timer__container">
                                                            <span id="hrs">{this.state?.hours}</span>
                                                            <p className="timer__label">Hours</p>
                                                        </div>

                                                        <div className="timer__container">
                                                            <span id="mins">{this.state?.minutes}</span>
                                                            <p className="timer__label">Minutes</p>
                                                        </div>

                                                        <div className="timer__container">
                                                            <span id="seconds">{this.state?.seconds}</span>
                                                            <p className="timer__label">Seconds</p>
                                                        </div>
                                                    </div>

                                                </div> : null}
                                        </div>

                                        <Heading style={{ fontSize: "35px" }} > <div className="app-secondary-text mt-3">{this.props.discount_timmer ? ` Take Advantage of Promotion. Book now and get ${this.state.discountValue} % Discount` : "This coupon has expired, there will be a new promotion in the near future"}    </div>  </Heading>
                                        <div className="  hero-contact d-flex    ">
                                            <div className="  hero-contact-icon d-flex justify-content-center align-items-center   ">
                                                <PhoneIcon className="phone-svg" />
                                            </div>
                                            <div className="   hero-contact-value d-flex justify-content-center align-items-center ">
                                                <h5><strong>  : <a href="tel:4039738894">+(403)973-8894</a> </strong> </h5>
                                            </div>
                                        </div>

                                        <PrimaryButton onClick={() => { history.push("/getDiscount") }} style={{ width: "auto", color: "white" }} css={buttonRoundedCss}>
                                            {this.props.discount_timmer ? primaryButtonText : primaryButtonText2}
                                        </PrimaryButton>

                                    </TextColumn>
                                </Col>
                            }


                            <Col lg={6} md={6} sm={12} className=" pl-5  mb-5">
                                <Image className="backgroundImageHero slider-image1" alt="Calgary PolarTech Appliance Repair" src={Slider1} />
                                <Image className="backgroundImageHero slider-image2" alt="Calgary Cheap Appliance Repair" src={Slider2} />
                                <Image className="backgroundImageHero slider-image3" alt="Calgary Appliance Technicians Repair" src={Slider3} />
                                <Image className="backgroundImageHero slider-image4" alt="Calgary Cheap Appliance Repair" src={Slider2} />
                                {imageDecoratorBlob && <ImageDecoratorBlob />}
                            </Col>
                        </Row>
                    </ContentWithVerticalPadding>
                </Container>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHandler: (value) => dispatch({ type: "SAVE_GLOBALS", value: value }),
        handleDiscountTimmer: (value) => dispatch({ type: "DISCOUNT_TIMMER", value: value }),
    };
};
const mapStateToProps = (state) => {
    return {
        globals: state.globals,
        discount_timmer: state.discount_timmer,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TwoColumnWithFeaturesAndTestimonial);


     // try {
        //     var countDownDate = new Date(this.state.timerEndDate).getTime();
        //     setInterval(() => {
        //         var now = new Date().getTime();
        //         var distance = countDownDate - now;
        //         if (countDownDate > now) {
        //             var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //             var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //             this.setState({ time: `${days} Days :  ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`, timer: false });
        //             this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })

        //         } else {
        //             this.setState({ timer: true });
        //         }
        //     }, 1000);
        // } catch (error) {
        //     console.log(error)
        // }
