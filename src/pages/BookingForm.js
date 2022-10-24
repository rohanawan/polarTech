
import React, { Component } from 'react'
import tw from "twin.macro";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { Formik, Field } from "formik";
import { connect } from 'react-redux';
import { FormGroup, Button, Row, Col, Spinner } from "reactstrap";
import * as Yup from "yup";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { validateObject } from 'helpers/validation';
import { ReCaptcha } from 'react-recaptcha-google'
// import api from 'helpers/api/applianceApi';
import Config from 'helpers/api/config';
import generateHash from 'helpers/hashCode';
import BookingEmail from 'helpers/email/bookingEmail';
import axios from "axios";
import ThankYou from 'components/misc/ThankYou';
const Container = tw.div`relative`;
const formSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.number().required("Required"),
    email: Yup.string().email().required("Required"),
    message: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    appliance: Yup.string().required("Required"),
    issue: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    otherIssue: Yup.string().required("Required"),
});
class BookingForm extends Component {
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
        discountPercentage: null,
        showSubmitButton: false,
        showForm: false,
    }
    onSubmit = async (values, { resetForm }) => {
        try {
            const data = {
                name: values.name,
                phone: values.phone,
                email: values.email,
                appliance: values.appliance,
                model: values.model,
                address: values.address,
                issue: values.issue,
                date: values.date,
                otherIssue: this.state.showOtherField ? values.otherIssue : "not"
            }
            if (validateObject(data)) {
                data["discountPercentage"] = this.state.discountPercentage

                data["coupon"] = this.props.discount_timmer ? this.state.coupon : null
                BookingEmail(data.email, "Polar Tech Appliance", data, this, function (statusCode, that) {
                    if (statusCode === 200) {
                        that.props.thankyouPageHandler(true)
                        setTimeout(() => {
                            that.props.thankyouPageHandler(false)
                        }, 3000);
                        resetForm()
                    } else {
                        that.props.alertHandler({ showAlert: true, message: " Please Try later  their is some Network Error" })
                        setTimeout(() => {
                            that.props.alertHandler({ showAlert: false, message: "" })
                        }, 3000);
                    }
                });
                // this.props.alertHandler({ showAlert: true, message: "You information has been sent successfully, kindly check your email" })

            }
            else {
                this.props.alertHandler({ showAlert: true, message: "Please fill all the fields before submitting " })
                setTimeout(() => {
                    this.props.alertHandler({ showAlert: false, message: "" })
                }, 2000);
            }
        } catch (error) {
            console.log(error)
        }

    };
    constructor(props, context) {

        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
    state = {
        showSubmitButton: false
    }
    getAllIssues = async () => {
        try {
            const response = await axios(Config('get', '/issues?per_page=100'));
            if (response.status === 200) {
                this.setState({ issues: response.data });
            }
        } catch (error) {
            console.log(error)
        }

    };

    getAllAppliance = async () => {
        try {
            const response = await axios(Config('get', '/appliances'));
            if (response.status === 200) {
                let data = response.data.map((item) => ({
                    id: item.id,
                    name: item.name,
                }));
                this.setState({ appliances: data });
            }
        } catch (error) {
            console.log(error)
        }

    };
    getallbrands = async () => {
        try {
            const response = await axios(Config('get', '/brands'));
            if (response.status === 200) {
                this.setState({ applianceType: response.data });
            }
        } catch (error) {
            console.log(error)
        }
    };
    async componentDidMount() {

        await this.getAllAppliance();
        await this.getAllIssues();
        await this.getallbrands();
        const result = await this.state.issues?.map((v) => ({ ...v, ...this.state.appliances.find((sp) => sp.id === v.appliances[0]) }));
        this.setState({ showForm: true, data: result })
        this.setState({ coupon: generateHash() });
        this.setState({ result })
        if (this.captchaDemo) {

            this.captchaDemo.reset();
        }
        this.setState({ discountPercentage: this.props.globals?.discount_value })

    }
    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }
    verifyCallback(recaptchaToken) {

        this.setState({ showSubmitButton: true })
    }
    handleBeforeCapthca = () => {
        this.props.alertHandler({ showAlert: true, message: "You need to validate you are not robot please check the capthca" })
        setTimeout(() => {
            this.props.alertHandler({ showAlert: false, message: "" })
        }, 4500);
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        var heading = <>Feel free to  get in touch  with us.</>
        return (
            <Container>
                {this.props.show_thankyou ? <ThankYou /> : null}
                <Row>
                    <Col className="d-flex justify-content-center align-items-center p-5" lg={6} md={6} sm={12}>
                        <img className="p-sm-1 p-md-1 p-lg-5" src={EmailIllustrationSrc} alt="illustration" />
                    </Col>
                    {!this.state.showForm ? <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center form-spinner"><Spinner color="primary" /></Col> :
                        <Col className=" p-5 d-flex justify-content-center align-items-center" lg={6} md={6} sm={12}>
                            {this.props.alert?.showAlert ?
                                <div style={{ position: "absolute", top: "60px", right: "10px", zIndex: "1000" }} className="d-flex justify-content-end mr-2">
                                    <Toast>
                                        <ToastHeader>
                                            Polar Tech Appliance
                            </ToastHeader>
                                        <ToastBody>
                                            {this.props.alert?.message}
                                        </ToastBody>
                                    </Toast>
                                </div> : null}
                            <Formik
                                className="maxWidth "
                                onSubmit={(values, { resetForm }) => {
                                    resetForm()
                                    this.onSubmit(values)
                                }}
                                initialValues={{
                                    name: "",
                                    phone: "",
                                    email: "",
                                    model: "",
                                    appliance: "",
                                    issue: "",
                                    date: "",
                                    address: "",
                                    otherIssue: "",
                                }}
                                validationSchema={formSchema}
                            >
                                {({ values, errors, touched, resetForm }) => (
                                    <form className="w-100 contact-us-form"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            this.onSubmit(values, { resetForm });
                                        }}
                                    ><Row>
                                            <Row className="mb-3 mt-4 w-100">
                                                <Col className="d-flex flex-column text-center justify-content-center align-items-center" lg={12}>
                                                    <h2 className="pb-2 ml-3 text-center"><strong>{heading} </strong></h2>
                                                    {/* <h5>{description} </h5> */}
                                                    <h5 className="text-center"> {this.props.discount_timmer ? `Order Now and get ${this.state.discountPercentage}% discount on any service` : null}</h5>
                                                </Col>
                                            </Row>


                                            <Col lg={6}>

                                                <FormGroup onChange={(e) => this.setState({ name: e.target.value })}>
                                                    <Field name="name" type="text" placeholder="Name" id="name" className={`form-control ${errors.name && touched.name && "is-invalid"}`} />
                                                    {errors.name && touched.name ? <div className="text-danger">{errors.name}</div> : null}
                                                </FormGroup>
                                                <FormGroup onChange={(e) => this.setState({ phone: e.target.value })}>
                                                    <Field name="phone" type="text" placeholder="Phone" id="phone" className={`form-control ${errors.phone && touched.phone && "is-invalid"}`} />
                                                    {errors.phone && touched.phone ? <div className="text-danger">{errors.phone}</div> : null}
                                                </FormGroup>
                                                <FormGroup onChange={(e) => this.setState({ email: e.target.value })}>
                                                    <Field name="email" type="text" placeholder="Email" id="email" className={`form-control ${errors.email && touched.email && "is-invalid"}`} />
                                                    {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
                                                </FormGroup>
                                                <FormGroup onChange={(e) => this.setState({ address: e.target.value })}>
                                                    <Field name="address" type="text" placeholder="Address" id="address" className={`form-control ${errors.address && touched.address && "is-invalid"}`} />
                                                    {errors.address && touched.address ? <div className="text-danger">{errors.address}</div> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <FormGroup onChange={(e) => this.setState({ model: e.target.value })}>
                                                    <Field name="model" type="text" placeholder="Appliance Model No  " id="model" className={`form-control ${errors.model && touched.model && "is-invalid"}`} />
                                                    {errors.model && touched.model ? <div className="text-danger">{errors.model}</div> : null}
                                                </FormGroup>
                                                <FormGroup onChange={(e) => this.setState({ date: e.target.value })}>
                                                    <Field name="date" type="date" placeholder="Date" id="date" className={`form-control ${errors.date && touched.date && "is-invalid"}`} />
                                                    {errors.date && touched.date ? <div className="text-danger">{errors.date}</div> : null}
                                                </FormGroup>
                                                <FormGroup onChange={(e) => {
                                                    this.setState((prevState) => {
                                                        return {
                                                            appliance: e.target.value
                                                        };
                                                    })
                                                }} className="mb-0 d-flex flex-column mb-2">
                                                    <Field name="appliance" size="lg" as="select" id="appliance" className={`form-control ${errors.appliance && touched.appliance && "is-invalid"}`}>
                                                        <option>Select Appliance</option>
                                                        {this.state.appliances?.map((item, index) => {
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
                                                        {this.state.data?.filter((filter) => {
                                                            return filter.name === this.state.appliance;
                                                        })
                                                            .map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.title.rendered}>
                                                                        {item.title.rendered}
                                                                    </option>
                                                                );
                                                            })}
                                                        <option value={"other"}>
                                                            {"Other"}
                                                        </option>
                                                    </Field>
                                                    {errors.issue ? <div className="text-danger">{errors.issue}</div> : null}
                                                </FormGroup>
                                                {this.state?.showOtherField ?
                                                    <FormGroup onChange={(e) => this.setState({ otherIssue: e.target.value })}>
                                                        <Field name="otherIssue" type="text" placeholder="Describe Your Issue" id="other-issue" className={this.state.showOtherField ? "form-control" : `form-control ${errors.otherIssuephone && touched.otherIssue && "is-invalid"}`} />
                                                        {this.state.showOtherField ?
                                                            (errors.otherIssue && touched.otherIssue) ? <div className="text-danger">{errors.otherIssue}</div> : null : ""}
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
                                        </Row>
                                        <div className=" d-flex justify-content-center align-items-center mt-2">
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
                                        <div className="d-flex justify-content-center align-items-center">
                                            {this.state.showSubmitButton ?
                                                <Button style={{ width: "306px" }} className="  mt-2 app-secondary-bg" size="lg">
                                                    Submit
                                    </Button>
                                                : <div onClick={this.handleBeforeCapthca} style={{ color: "white", padding: "12px", width: "306px" }} className="btn app-secondary-bg mt-2" size="lg">
                                                    Submit
                                  </div>}
                                        </div>
                                    </form>
                                )}
                            </Formik>

                        </Col>
                    }
                </Row>

            </Container >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        alertHandler: (value) => dispatch({ type: "UPDATE_ALERT", value: value }),
        thankyouPageHandler: (value) => dispatch({ type: "SHOW_THANKYOU", value: value }),
    }
}
const mapStateToProps = (state) => {
    return {
        alert: state.alert,
        discount_timmer: state.discount_timmer,
        globals: state.globals,
        show_thankyou: state.show_thankyou
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)


