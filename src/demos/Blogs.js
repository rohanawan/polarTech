import React, { useState, useEffect } from "react";
import { Col, Spinner } from "reactstrap";
import BlogsView from "components/features/BlogsView.js";
import api from "helpers/api/applianceApi";
import NavBar from "components/headers/Navbar";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import WhatsApp from "components/misc/WhatsApp.js";
import { Helmet } from "react-helmet";
import PageTitlesAndDescription from "config/config.js";

const Blogs = () => {
    const [showForm, setShowForm] = useState(true)
    const [blogs, setBlogs] = useState()
    const [increaseMore, setIncreaseMore] = useState(3)
    const [blogLength, setBlogLength] = useState(0)
    const getBlogs = () => {
        let mounted = true;
        api.get('/posts?per_page=100').then(response => {
            try {
                var tempBlogsArray = []
                response.data.forEach(item => {
                    var tempObject = {}
                    tempObject["id"] = item?.id
                    tempObject["title"] = item.title?.rendered
                    tempObject["image"] = item.content.rendered?.match(/<img [^>]*src="[^"]*"[^>]*>/gm).map(x => x.replace(/.*src="([^"]*)".*/, '$1'))
                    var descriptionTemp = item.content.rendered?.replace(/<.*?>/g, "")
                    tempObject["description"] = descriptionTemp?.replace(/\n/g, "")
                    tempBlogsArray.push(tempObject)
                });
                if (mounted) {
                    setBlogLength(tempBlogsArray.length)
                    setBlogs(tempBlogsArray)
                    localStorage.setItem("blogs", JSON.stringify(tempBlogsArray));
                    setShowForm(showform => !showform)
                }

            } catch (error) {
                console.log(error)
            }
        })
        return () => mounted = false;
    };
    useEffect(() => {
        getBlogs()
    }, []);

    return (
        <AnimationRevealPage disabled>
            <Helmet>
                <title>{PageTitlesAndDescription.Bolgs.title} </title>
                <meta name="description" content={PageTitlesAndDescription.Bolgs.description} />
            </Helmet>
            <NavBar />
            <WhatsApp />

            { showForm ? <Col lg="12" className="d-flex justify-content-center align-items-center form-spinner">< Spinner color="primary" /></Col> :
                blogs?.slice(0, increaseMore).map((item) => (
                    <BlogsView
                        key={Math.random()}
                        heading={item.title}
                        description={item.description.substring(0, 150)}
                        dataObject={item}
                        primaryButtonText="Learn More"
                        imageSrc={item.image[0]}
                    />
                )
                )
            }
            <Col className="d-flex justify-content-center align-items-center mb-2" lg={12} md={12} sm={12}>

                <button onClick={() => {
                    if (blogLength > increaseMore) {
                        if (blogLength - increaseMore > 2) {
                            setIncreaseMore(increaseMore + 2)
                        }
                        else {
                            setIncreaseMore(increaseMore + 1)
                        }
                    }
                    else {
                        if (blogLength - increaseMore === 1) {
                            setIncreaseMore(increaseMore - 1)
                        }
                        else {
                            setIncreaseMore(3)
                        }
                    }
                }} style={{ color: "white", borderRadius: "5px" }} className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 pt-3 pb-3 pl-4 pr-4 rounded-full" >
                    {(blogLength > increaseMore) ? "Load More" : "Show Less"}
                </button>
            </Col>
            <Footer />
        </AnimationRevealPage >
    );
}

export default Blogs