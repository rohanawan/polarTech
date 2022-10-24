import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { Container, Row, Col, Spinner } from 'reactstrap';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import api from "../../helpers/api/applianceApi";
import { SectionHeading, } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import SanitizedHTML from 'react-sanitized-html';
import NavBar from "../headers/Navbar";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import WhatsApp from "components/misc/WhatsApp";
import PageTitlesAndDescription from "config/config";
import { Helmet } from "react-helmet";
const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;


const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default function SingleBlogsViewCopy(props) {
  const [blogs, setBlogs] = useState([])
  const [showBlogs, setShowBlogs] = useState(false)
  const [blogHTML, setBlogHTML] = useState('<h1>waleed</h1>')
  const history = useHistory();
  const getBlogs = async (postID) => {
    await api.get('/posts?per_page=100').then(response => {
      try {
        var tempBlogsArray = []
        response.data?.forEach(item => {
          if (item.id === postID) {
            var tempObject = {}
            tempObject["title"] = item.title?.rendered
            tempObject["image"] = item.content.rendered?.match(/<img [^>]*src="[^"]*"[^>]*>/gm).map(x => x.replace(/.*src="([^"]*)".*/, '$1'))
            var descriptionTemp = item.content.rendered?.replace(/<.*?>/g, "")
            tempObject["description"] = descriptionTemp?.replace(/\n/g, "")

            setBlogHTML(item.content.rendered)
            tempBlogsArray.push(tempObject)

          }
        });
        setBlogs(tempBlogsArray)
        setShowBlogs((true))
      } catch (error) {
        console.log(error)
      }
    })
  };
  useEffect(() => {
    var url = new URL(window.location.href)
    var postID = parseInt(url.href.split("-").slice(-1)[0]);
    getBlogs(postID);
  }, []);



  return (
    <AnimationRevealPage disabled>
      <Helmet>
        <title>{PageTitlesAndDescription.SingleBolg.title} </title>
        <meta name="description" content={PageTitlesAndDescription.SingleBolg.description} />
      </Helmet>
      <NavBar />
      <WhatsApp />
      <Container className="mt-3">
        <Row>
          {!showBlogs ? <Col lg="12" className="d-flex justify-content-center align-items-center form-spinner"><Spinner color="primary" /></Col> :
            <>

              <Col className="mt-4 " lg={12} md={12} sm={12}>
                <Heading className="d-flex justify-content-center align-items-center mt-5  app-secondary-text">{blogs[0]?.title}</Heading>
              </Col>
              <Col lg={12} md={12} sm={12} className="mt-2 p-5">
                <SanitizedHTML
                  allowedAttributes={{ 'a': ['href'], 'img': ['src', 'width', 'height'] }}
                  allowedTags={['b', 'i', 'em', 'strong', 'a', 'img', 'table', 'tr', 'td', 'figure', '\n', 'tbody']}
                  html={blogHTML} />
                {props.imageDecoratorBlob && <DecoratorBlob css={props.imageDecoratorBlobCss} />}
              </Col>
              <Col lg={12} md={12} sm={12} className="   p-1">
                <TextContent >
                  <PrimaryButton onClick={() => { history.push("/blogs") }} buttonRounded={props.buttonRounded} >
                    Back
                </PrimaryButton>
                </TextContent>
              </Col>

            </>
          }
        </Row>

      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
