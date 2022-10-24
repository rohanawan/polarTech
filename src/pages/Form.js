import React from "react";
import { Formik, Form, Field } from "formik";
import { FormGroup, Button, Row, Col, Spinner } from "reactstrap";
import * as Yup from "yup";
import Maintain from "../images/Maintain.jpg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ReCaptcha } from 'react-recaptcha-google'
import { connect } from 'react-redux';
// import api from "helpers/api/applianceApi";
import axios from "axios";
import Config from "helpers/api/config";
const formSchema = Yup.object().shape({
  appliance: Yup.string().required("Required"),
});
const formSchema2 = Yup.object().shape({
  brand: Yup.string().required("Required"),
  issue: Yup.string().required("Required"),
});
const formSchema3 = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
});
class MultiForm extends React.Component {
  _isMounted = false
  constructor(props, context) {

    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  state = {
    appliance: "",
    form: 1,
    brand: "",
    issue: "",
    name: "",
    email: "",
    data: [],
    issues: [],
    appliances: [],
    brands: [],
    issuePrice: undefined,
    brandPrice: undefined,
    showForm: true,
    showSubmitButton: false
  };
  getCalculation = () => {
    try {
      const issues = this.state.data.filter((p) => {
        return p.title.rendered === this.state.issue;
      });
      const brands = this.state.brands.filter((p) => {
        return p.name === this.state.brand;
      });
      this.setState({ issuePrice: issues[0].acf.issues_price_factor, brandPrice: brands[0].acf.brands_price_factor, form: 3 });

    } catch (error) {
      console.log(error)
    }

  };



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
        this.setState({ brands: response.data });
      }
    } catch (error) {
      console.log(error)
    }
  };
  getVariablesData = async () => {
    try {
      const response = await axios(Config('get', '/pages'));
      if (response.status === 200) {
        var acf = { hourly_rate: response.data[3].acf.hourly_rate, service_rate: response.data[3].acf.service_rate, discount_value: response.data[3].acf.discount_value, discount_timer_range_start: response.data[3].acf.discount_timer_range_start, discount_timer_range_end: response.data[3].acf.discount_timer_range_end } = response.data[3].acf
        this.props.updateHandler(acf)
      }
    } catch (error) {
      console.log(error)
    }
  };



  async componentDidMount() {
    this._isMounted = true;
    await this.getAllAppliance();
    await this.getAllIssues();
    await this.getallbrands();
    await this.getVariablesData();
    const result = this.state.issues?.map((v) => ({ ...v, ...this.state.appliances?.find((sp) => sp.id === v.appliances[0]) }));
    this.setState({ data: result });
    this.setState({ showForm: false })

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
  nextHandler = () => {
    this.setState({ form: this.state.form + 1 });
  };
  backHandler = () => {
    this.setState({ form: this.state.form - 1 });
  };
  print = (e) => {
    e.preventDefault();
    const input = document.getElementById("formSubmit");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 25, 25, 150, 100);
      pdf.save("quote.pdf");
    });
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {

    return (
      <div className="  estimate-form-container maxWidth">
        {this.state.form !== 4 && (
          <Row>
            <Col className="d-flex justify-content-center align-items-center" sm="6">
              <img alt="Maintain" src={Maintain} />
            </Col>
            {/* {JSON.stringify(this.state.brands)} */}
            {this.state.showForm ? <Col sm="6" className="d-flex justify-content-center align-items-center form-spinner"><Spinner color="primary" /></Col> :
              <Col sm="6" className="d-flex justify-content-center align-items-center">
                {this.state.form === 1 && (
                  <Formik
                    onSubmit={this.nextHandler}
                    initialValues={{
                      appliance: this.state.appliance,
                    }}
                    validationSchema={formSchema}
                  >
                    {({ errors, touched }) => (
                      <Form className="w-100 text-center">
                        <label className="app-secondary-text" style={{ fontSize: "40px " }}>Choose your appliance</label>
                        <FormGroup onChange={(e) => this.setState({ appliance: e.target.value })} className="mb-0 customRadio">
                          {this.state.data?.filter((thing, index, self) => index === self.findIndex((t) => t.name === thing.name))
                            .map((item, index) => {
                              return (
                                <label className={`m-2 ${this.state.appliance === item.name && "custom"}`} key={index}>
                                  <Field name="appliance" size="md" type="radio" value={item.name} id="appliance" className={`form-control ${errors.appliance && touched.appliance && "is-invalid"} `} />
                                  {item.name}
                                </label>
                              );
                            })}
                          {errors.appliance && touched.appliance ? <div className="text-danger">{errors.appliance}</div> : null}
                        </FormGroup>

                        {this.state.appliance === "" ? null :
                          <Button type="submit" className="mt-2   polar-btn-bg" size="lg">
                            Next
                     </Button>
                        }
                      </Form>
                    )}
                  </Formik>
                )}
                {this.state.form === 2 && (
                  <Formik
                    onSubmit={this.getCalculation}
                    initialValues={{
                      brand: this.state.brand,
                      issue: this.state.issue,
                    }}
                    validationSchema={formSchema2}
                  >
                    {({ errors, touched }) => (
                      <Form className="w-100">
                        <label>Choose your brand</label>
                        <FormGroup
                          onChange={(e) => {
                            this.setState({ brand: e.target.value }, () => {

                            });

                          }} className="mb-0 d-flex flex-column mb-2">
                          <Field name="brand" size="md" as="select" id="brand" className={`form-control ${errors.brand && touched.brand && "is-invalid"}`}>
                            <option>Choose your brand</option>
                            {this.state.brands?.map((item, index) => {
                              return (
                                <option key={index} value={item.name}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </Field>
                        </FormGroup>
                        <label>Select Issue</label>
                        <FormGroup
                          onChange={(e) => {
                            this.setState({ issue: e.target.value }, () => {

                            });
                          }}
                          className="mb-0 d-flex flex-column mb-2" >
                          <Field name="issue" size="md" as="select" id="issue" className={`form-control ${errors.issue && touched.issue && "is-invalid"}`}>
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
                          </Field>
                          {errors.issue ? <div className="text-danger">{errors.issue}</div> : null}
                        </FormGroup>
                        <div className="d-flex justify-content-between">
                          <Button className="mt-2 polar-btn-bg" onClick={() => this.backHandler()} size="lg">
                            Back
                      </Button>
                          {this.state.brand === "" || this.state.issue === "" ? null :
                            <Button type="submit" className="mt-2  polar-btn-bg" size="lg">
                              Next
                     </Button>
                          }
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
                {this.state.form === 3 && (
                  <Formik
                    onSubmit={this.nextHandler}
                    initialValues={{
                      name: "",
                      email: "",
                    }}
                    validationSchema={formSchema3}
                  >
                    {({ errors, touched }) => (
                      <Form className="w-100 ">
                        <label>Name</label>
                        <FormGroup onChange={(e) => this.setState({ name: e.target.value })}>
                          <Field name="name" type="text" placeholder="Name" id="name" className={`form-control ${errors.name && touched.name && "is-invalid"}`} />
                          {errors.name && touched.name ? <div className="text-danger">{errors.name && touched.name}</div> : null}
                        </FormGroup>
                        <label>Email</label>
                        <FormGroup onChange={(e) => this.setState({ email: e.target.value })}>
                          <Field name="email" type="text" placeholder="Email" id="email" className={`form-control ${errors.email && touched.email && "is-invalid"}`} />
                          {errors.email && touched.email ? <div className="text-danger">{errors.email && touched.email}</div> : null}
                        </FormGroup>
                        <div className="d-flex justify-content-center align-items-center mt-2 ">
                          <ReCaptcha
                            ref={(el) => { this.captchaDemo = el; }}
                            size="normal"
                            data-theme="dark"
                            render="explicit"
                            sitekey={process.env.React_App_Captcha_Key}
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                          />
                        </div >
                        <div className="d-flex justify-content-between mt-2">
                          <Button className="mt-2 polar-btn-bg" onClick={() => this.backHandler()} size="lg">
                            Back
                     </Button>
                          {(this.state.name !== "" && this.state.email !== "") && this.state.showSubmitButton ? <Button type="submit" className="mt-2 app-secondary-bg" size="lg">
                            Submit
                     </Button> :
                            null
                          }

                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
              </Col>
            }
          </Row>
        )}
        {this.state.form === 4 && (
          <Row id="formSubmit" className="d-flex justify-content-center align-items-center p-2">
            <Col sm="12" md="8" lg="10" className=" ">
              <Row className="final-result-card ">
                <Col lg={12} className="" >
                  <Button color="primary polar-btn-bg" onClick={() => { this.setState({ form: 1 }) }} className="  ">
                    Back
                   </Button>
                </Col>
                <Col className="final-result-card-heading mb-5" lg={12}>
                  Appliance Repair Quote
                     </Col>
                <Col lg={6} md={12} sm={12}>
                  <h4 className="b-0 final-result-card-sub-heading">Customer Email   </h4>
                  <h5 className="b-0 final-result-card-sub-value">{this.state.email}</h5>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h4 className="b-0 final-result-card-sub-heading">Appliance  </h4>
                  <h5 className="b-0 final-result-card-sub-value">{this.state.appliance}</h5>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h4 className="b-0 final-result-card-sub-heading">Brand  </h4>
                  <h5 className="b-0 final-result-card-sub-value">{this.state.brand}</h5>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h4 className="b-0 final-result-card-sub-heading">Issue  </h4>
                  <h5 className="b-0 final-result-card-sub-value">{this.state.issue}</h5>
                </Col>
                <Col className="d-flex justify-content-center align-items-center  " lg={12} md={12} sm={12}>

                  <div className="quote-box">
                    <h4 onClick={() => {
                    }} className="b-0 final-result-card-sub-heading">Quote:     </h4>
                    <h5 style={{ borderBottom: "unset", fontSize: "20px", marginTop: "16px" }} className="b-0 final-result-card-sub-value pl-2">$ {(Number(this.props.globals.hourly_rate) + (this.state.issuePrice * this.state.brandPrice * Number(this.props.globals.service_rate))).toFixed(3)} </h5>
                  </div>
                </Col>
                <Col className="mt-3" lg={12}>
                  <Button color="primary polar-btn-bg" onClick={(e) => this.print(e)} className="m-auto btn-pdf-print d-block mt-3">
                    Download PDF
                   </Button>
                </Col>
                <Col lg={12} md={12} sm={12}>
                  <label className="d-block text-center mt-2 disclaimer-text">**Disclaimer: The quote value is approximate and subject to change based on the manual troubleshooting performed by our Technician.</label>
                </Col>
              </Row>
            </Col>
          </Row>

        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateHandler: (value) => dispatch({ type: "SAVE_GLOBALS", value: value }),
    handleIssuesApplinacesBrands: (value) => dispatch({ type: "UPDATE_ISSUES_APPLIANCE_BRANDS", value: value })
  };
};
const mapStateToProps = (state) => {
  return {
    globals: state.globals,
    issuesApplinacesBrands: state.issuesApplinacesBrands
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MultiForm);
