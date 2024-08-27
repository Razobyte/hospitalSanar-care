import { Row, Col, } from 'react-bootstrap';
import blogBanner from '../../../public/Image/Blogs page banner.png';
import Section11 from '../Home/Section11';
import Section10 from '../Home/Section10';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Blog() {
    const [blogdata, setBlogData] = useState([]);

    let api = import.meta.env.VITE_API_BASE_URL

    const fetchBlogData = async () => {
        try {
            const response = await axios.post(api, {}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });


            if (response.data && response.data.response && response.data.response.blogs) {
                setBlogData(response.data.response.blogs);
            } else {
                // console.log("Unexpected response format:", response.data);
            }
        } catch (error) {
            // console.log('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);
    const navigate = useNavigate()
    return (
        <>
            <Row style={{
                backgroundImage: `url(${blogBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "400px"


            }} className='d-md-flex d-none justify-content-center align-items-center'>
                <Col md={12} className='d-flex align-items-center '>
                    <div className='px-5 '>
                        <h2 className='d-flex gap-4 pl-5 '><span className='hed2'>Explore Our</span>  <span className="hed1" style={{ color: "#FF631A" }}>Comprehensive</span></h2>
                        <h1 className='d-flex gap-4 pt-1'><span className="hed1" style={{ color: "#FF631A" }}>articles</span> <span className='hed2'>On everyth"ing from </span></h1>
                        <h2 className='d-flex gap-4 pt-1' ><span className="hed1" style={{ color: "#FF631A" }}>Preventive Care </span> <span className='hed2'>to </span></h2>
                        <h2 className='hed1 pt-2' style={{ color: "#46A4D9" }}>Cutting-edge treatments</h2>


                    </div>
                </Col>
            </Row>
            <Row style={{
                backgroundImage: `url(${blogBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",
            }} className='d-flex d-md-none align-items-center'>
                <Col xs={7} className='p-3'>
                    <h1 className='hed1'>Explore Our <span className="hed1" style={{ color: "#FF631A" }}>Blog Page Article </span>
                    </h1>

                </Col>
            </Row>
            <Row className="py-lg-5 py-md-5 py-xl-5 py-2 d-md-flex justify-content-center">
                <h1 className="hed1 pb-3 text-center">Our Blogs</h1>
                <Col md={10} xs={12} lg={10} xl={10} xxl={10} className="px-0 d-md-flex flex-wrap justify-content-center gap-4">
                    {blogdata.map((blog, index) => (
                        <Col key={index} md={4} xs={12} xl={3} className="mb-4">
                            <div
                                className="blog-height"
                                onClick={() => navigate(`/blog/blogdetails/${blog.slug}`)}
                            >
                                <img src={blog.image} alt={blog.title} className="img-fluid" />
                                <h3 className="hed4 text-center pt-3" style={{ color: "#46A4D9" }}>{blog.title}</h3>
                                <p className="para px-3">{blog.short_description}</p>
                            </div>
                        </Col>
                    ))}
                </Col>
            </Row>


            <br />
            <Section11 />
            <Section10 />
            <Row className="d-xl-none  d-flex justify-content-center align-items-center my-3">
                <Col md={12} className="fotter-first ">
                    <h1 className="hed3 text-center pt-3 pb-1">Popular Radiology Scan's</h1>
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <p className="para text-left with-slash">Coronary CT Angiography In Gurugram</p>
                        <p className="para text-left with-slash">X-Ray Neck Lateral View In Gurugram</p>
                        <p className="para text-left with-slash">Color Doppler - Carotids In Gurugram</p>
                        <p className="para text-left">Ultra Sound - Thyroid In Gurugram</p>
                    </div>
                </Col>
            </Row>

        </>

    )
}