
import React, { Component } from 'react'
import tw from "twin.macro";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { Formik, Field } from "formik";
import { connect } from 'react-redux';
import { FormGroup, Button, Container, Row, Col } from "reactstrap";
import * as Yup from "yup";

import sendEmail from 'helpers/email/email';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { validateObject } from 'helpers/validation';
import { ReCaptcha } from 'react-recaptcha-google'
import { loadReCaptcha } from 'react-recaptcha-google'




const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  email: Yup.string().email().required("Required"),
  message: Yup.string().required("Required"),
});
class ContactUsForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: ""
  }
  onSubmit = (values, { resetForm }) => {
    try {
      const data = {
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message
      }
      if (validateObject(data)) {
        sendEmail(process.env.React_App_ADMINISTRATION_EMAIL, "Polar Tech Appliance", data, this, function (statusCode, that) {
          if (statusCode === 200) {
            that.props.alertHandler({ showAlert: true, message: "Your Contact Information has been send to Administration" })
            setTimeout(() => {
              that.props.alertHandler({ showAlert: false, message: "" })
            }, 4000);
            resetForm()
          } else {
            that.props.alertHandler({ showAlert: true, message: "Please Try later  their is some Network Error" })
            setTimeout(() => {
              that.props.alertHandler({ showAlert: false, message: "" })
            }, 4000);
          }
        });
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
  componentDidMount() {
    loadReCaptcha();
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
  handleBeforeCapthca = () => {
    this.props.alertHandler({ showAlert: true, message: "You need to validate you are not robot please check the capthca" })
    setTimeout(() => {
      this.props.alertHandler({ showAlert: false, message: "" })
    }, 4500);
  }

  render() {
    var heading = <>Feel free to get in touch with us.</>

    return (
      <Container>
        {/* <div className="p-3 my-2 rounded">
          
        </div> */}
        <Row>
          <Col className="d-flex justify-content-center align-items-center  " lg={6} md={12} sm={12} >
            <img className="p-md-3 p-md-3  contact-illustration" src={EmailIllustrationSrc} alt="contact-illustration" />
          </Col>
          <Col style={{ marginTop: "13px" }} lg={6} md={12} sm={12} >

            <div className="contact-us-form-bg">
              <div className="contact-form-overlay"></div>
              {this.props.alert?.showAlert ?
                <div style={{ position: "absolute", top: "-1px", right: "-9px", zIndex: "1000000" }} className="d-flex justify-content-end mr-2">
                  <Toast>
                    <ToastHeader>
                      Polar Tech Appliance.
                            </ToastHeader>
                    <ToastBody>
                      {this.props.alert?.message}
                    </ToastBody>
                  </Toast>
                </div> : null}
              <div className="contact-container">
                <h3 className="text-white"><strong>{heading} </strong></h3>
                <Formik
                  className="  "
                  onSubmit={(values, { resetForm }) => {
                    resetForm()
                    this.onSubmit(values)
                  }}
                  initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    message: ""
                  }}
                  validationSchema={formSchema}
                >
                  {({ values, errors, touched, resetForm }) => (
                    <Form className="  contact-us-form p-2"
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.onSubmit(values, { resetForm });
                      }}
                    >
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
                      <FormGroup onChange={(e) => this.setState({ message: e.target.value })}>
                        <Field name="message" type="text" placeholder="Message" id="message" className={`form-control ${errors.message && touched.message && "is-invalid"}`} />
                        {errors.message && touched.message ? <div className="text-danger">{errors.message}</div> : null}
                      </FormGroup>


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
                      {this.state.showSubmitButton ?
                        <Button className="  app-secondary-bg mt-2" size="lg">
                          Submit
                                    </Button>
                        : <div onClick={this.handleBeforeCapthca} style={{ color: "white", padding: "12px" }} className="btn app-secondary-bg mt-2" size="lg">
                          Submit
                                  </div>}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsForm)



