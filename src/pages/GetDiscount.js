

import React, { Component } from 'react'
import axios from "axios";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { Row, Col } from "reactstrap";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { Formik, Field } from "formik";
import { FormGroup, Button } from "reactstrap";
import * as Yup from "yup";
import generateHash, { generateCoupon } from "helpers/hashCode";
import Email from "templates/discountEmailTemplete";
import sendEmail from "helpers/email/email";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { connect } from "react-redux"
import { validateObject } from "helpers/validation";
import { ReCaptcha } from 'react-recaptcha-google'
import api from "helpers/api/applianceApi";
import { ADMINISTRATION_EMAIL, CaptchaKey } from "config/config";
import ReactGA from 'react-ga';

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  email: Yup.string().email().required("Required"),

  address: Yup.string().required("Required"),
  model: Yup.string().required("Required"),
  appliance: Yup.string().required("Required"),
  issue: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  otherIssue: Yup.string().required("Required"),
});

class GetDiscount extends Component {
  static defaultProps = {
    center: {
      lat: 51.04731,
      lng: -114.057968,
    },
    zoom: 10,
  };
  state = {

    appliance: "",
    appliances: [],
    name: "",
    phone: "",
    email: "",
    message: "",
    applianceType: [],
    model: "",
    data: [],
    date: "",
    address: "",
    issue: "",
    issues: [],
    coupon: "",
    otherIssue: "",
    showOtherField: false,
    discountPercentage: "10",
    showSubmitButton: false
  };
  onSubmit = async (values) => {

    // ===== hook up google analytics to button using react-ga library/dependancy start =========
    ReactGA.event({
      category: "Button",
      action: "Book now submit button was clicked"
    });
    // ===== hook up google analytics to button using react-ga library/dependancy end =========

    const data = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      appliance: values.appliance,
      model: values.model,
      address: values.address,
      issue: values.issue,
      date: values.date,
      discountPercentage: this.state.discountPercentage,
      otherIssue: this.state.showOtherField ? values.otherIssue : "not"
    };
    if (validateObject(data)) {
      data["coupon"] = this.props.discount_timmer ? this.state.coupon : null
      // Email.getDiscountTemplate(function (tempe) {
      //   sendEmail(process.env.React_App_ADMINISTRATION_EMAIL, "Polar Tech Appliance", tempe);
      // }, data);
      // Email.getDiscountTemplate(function (tempe) {
      //   sendEmail(data.email, "Polar Tech Appliance", tempe);
      // }, data);
      this.props.alertHandler({ showAlert: true, message: "You information has been sent successfully, kindly check your email" })
      setTimeout(() => {
        this.props.alertHandler({ showAlert: false, message: "" })
      }, 5000);
    }
    else {
      this.props.alertHandler({ showAlert: true, message: "Please fill all the fields before submitting " })
      setTimeout(() => {
        this.props.alertHandler({ showAlert: false, message: "" })
      }, 2000);
    }
  };
  constructor(props, context) {

    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  getAllIssues = async () => {

    api.get('/issues?per_page=100').then(response => {
      //  alert(JSON.stringify(response.data))
      this.setState({ issues: response.data });
    })
  };

  getAllAppliance = async () => {

    api.get('/appliances').then(response => {
      //   alert(JSON.stringify(response.data))

      let data = response.data.map((item) => ({
        id: item.id,
        name: item.name,
      }));

      this.setState({ appliances: data });
    })
  };
  getallbrands = async () => {
    api.get('/brands').then(response => {
      // alert(JSON.stringify(response.data))

      this.setState({ applianceType: response.data });
    })
  };
  // shouldComponentUpdate() {
  //   return false;
  // }
  async componentDidMount() {
    await this.getAllAppliance();
    await this.getAllIssues();
    await this.getallbrands();
    const result = await this.state.issues?.map((v) => ({ ...v, ...this.state.appliances.find((sp) => sp.id === v.appliances[0]) }));
    this.setState({ data: result });

    this.setState({ coupon: generateHash() });
    this.setState({ result })

    if (this.captchaDemo) {

      this.captchaDemo.reset();
    }
  }


  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {


    this.setState({ showSubmitButton: true })

  }


  render() {
    const Container = tw.div`relative`;
    const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
    const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
    const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
    const TextColumn = styled(Column)((props) => [tw`md:w-7/12 mt-16 md:mt-0`, props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`]);

    const Image = styled.div((props) => [`background-image: url("${props.imageSrc}");`, tw`rounded bg-contain bg-no-repeat bg-center h-full`]);
    const TextContent = tw.div`lg:py-8 text-center md:text-left`;

    const Subheading = tw.div`text-center md:text-left`;
    const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
    const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
    const Form = tw.form` `;
    var subheading = `Order Now and get ${this.state.discountPercentage}% discount on any service`;
    var heading = (
      <span className="app-secondary-text">
        Fill the form below <span tw="text-primary-500">& Get our Services</span>
        <wbr />{" "}
      </span>
    );
    var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    var submitButtonText = "Send";
    var formAction = "#";
    var formMethod = "get";
    var textOnLeft = false;
    return (
      <AnimationRevealPage disabled>
        {this.props.alert?.showAlert ?
          <div style={{ position: "absolute", top: "180px", right: "10px", zIndex: "1000" }} className="d-flex justify-content-end mr-2">
            <Toast>
              <ToastHeader>
                Polar Tech Appliance Repair
              </ToastHeader>
              <ToastBody>
                {this.props.alert?.message}
              </ToastBody>
            </Toast>
          </div> : null}
        <Header />
        <Container className="p-3">
          <TwoColumn>
            <ImageColumn>
              <Image imageSrc={EmailIllustrationSrc} />
            </ImageColumn>
            <TextColumn textOnLeft={textOnLeft}>
              <TextContent>
                <Heading>{heading}</Heading>
                {this.props.discount_timmer ? <Description>{subheading}</Description> : null}
                <Formik
                  className="maxWidth"
                  onSubmit={(values) => this.onSubmit(values)}
                  initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    model: "",
                    appliance: this.state.appliance,
                    issue: this.state.issue,
                    date: "",
                    address: "",
                    otherIssue: "1",
                  }}
                  validationSchema={formSchema}
                >
                  {({ values, errors, touched }) => (
                    <Form
                      className="w-100 p-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.onSubmit(values);
                      }}
                    >
                      <Row>
                        <Col lg={6}>
                          <FormGroup >
                            <Field name="name" type="text" placeholder="Name" id="name" className={`form-control ${errors.name && touched.name && "is-invalid"}`} />
                            {errors.name && touched.name ? <div className="text-danger">{errors.name}</div> : null}
                          </FormGroup>
                          <FormGroup>
                            <Field name="phone" type="text" placeholder="Phone" id="phone" className={`form-control ${errors.phone && touched.phone && "is-invalid"}`} />
                            {errors.phone && touched.phone ? <div className="text-danger">{errors.phone}</div> : null}
                          </FormGroup>
                          <FormGroup>
                            <Field name="email" type="text" placeholder="Email" id="email" className={`form-control ${errors.email && touched.email && "is-invalid"}`} />
                            {errors.email && touched.email ? <div className="text-danger">{errors.email && touched.email}</div> : null}
                          </FormGroup>
                          <FormGroup>
                            <Field name="address" type="text" placeholder="Address" id="address" className={`form-control ${errors.address && touched.address && "is-invalid"}`} />
                            {errors.address && touched.address ? <div className="text-danger">{errors.address}</div> : null}
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
                          <FormGroup>
                            <Field name="model" type="text" placeholder="Model  " id="model" className={`form-control ${errors.model && touched.model && "is-invalid"}`} />
                            {errors.model && touched.model ? <div className="text-danger">{errors.model}</div> : null}
                          </FormGroup>
                          <FormGroup>
                            <Field name="date" type="date" placeholder="Date" id="date" className={`form-control ${errors.date && touched.date && "is-invalid"}`} />
                            {errors.date && touched.date ? <div className="text-danger">{errors.date}</div> : null}
                          </FormGroup>
                          <FormGroup className="mb-0 d-flex flex-column mb-2">
                            <Field name="appliance" size="lg" as="select" id="appliance" className={`form-control ${errors.appliance && touched.appliance && "is-invalid"}`}>
                              <option>Select Appliance</option>
                              {this.state.applianceType.map((item, index) => {
                                return (
                                  <option key={index} value={item.name}>
                                    {item.name}
                                  </option>
                                );
                              })}
                            </Field>
                          </FormGroup>
                          <FormGroup
                            onChange={(e) => (
                              e.target.value === "other" ?
                                this.setState({ showOtherField: true }) : this.setState({ showOtherField: false })
                            )} className="mb-0 d-flex flex-column mt-3 mb-2">
                            <Field name="issue" size="md" as="select" id="issue" className={`form-control  ${errors.issue && touched.issue && "is-invalid"}`}>
                              <option>Select Issue</option>
                              {this.state.issues
                                // .filter((filter) => {
                                //     return filter.name === this.state.appliance;
                                // })
                                .map((item, index, arr) => {
                                  return (
                                    arr.length - 1 === index ? <option key={index} value={"other"}>
                                      {"Other"}
                                    </option> :
                                      <option key={index} value={item.title.rendered}>
                                        {item.title.rendered}
                                      </option>
                                  );
                                })}
                            </Field>
                            {errors.issue ? <div className="text-danger">{errors.issue}</div> : null}
                          </FormGroup>
                          {this.state.showOtherField ?
                            <FormGroup>
                              <Field name="otherIssue" type="text" placeholder="Describe Your Issue" id="other-issue" className={`form-control ${errors.otherIssuephone && touched.otherIssue && "is-invalid"}`} />
                              {errors.otherIssue && touched.otherIssue ? <div className="text-danger">{errors.otherIssue}</div> : null}
                            </FormGroup> : null}

                        </Col>
                      </Row>
                      <Row className="d-flex justify-content-center flex-column">
                        {this.props.discount_timmer ? <h5
                          className="p-2 text-center"
                        >
                          Book Now and Get Discount Code
                      </h5> : null
                        }
                        <div className="mt-3 d-flex justify-content-center align-items-center">
                          <ReCaptcha
                            ref={(el) => { this.captchaDemo = el; }}
                            size="normal"
                            data-theme="dark"
                            render="explicit"
                            sitekey={process.env.React_App_Captcha_Key}
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                          />
                        </div>
                        {this.state.showSubmitButton ?
                          <Button className="bg mt-2" size="lg">
                            Book
                     </Button> : <Button disabled className="bg mt-2" size="lg">
                            Book
                     </Button>}

                      </Row>
                    </Form>
                  )}
                </Formik>
              </TextContent>
            </TextColumn>
          </TwoColumn>
        </Container>

        <Footer />
      </AnimationRevealPage>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    alertHandler: (value) => dispatch({ type: "UPDATE_ALERT", value: value })
  }
}
const mapStateToProps = (state) => {
  return {
    alert: state.alert,
    discount_timmer: state.discount_timmer
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(GetDiscount);
