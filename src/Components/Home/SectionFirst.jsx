import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let api = import.meta.env.VITE_API_BASE_URL;

export default function SectionFirst() {
    const [scansData, setScansData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetchScans();
    }, []);

    const fetchScans = async () => {
        try {
            const formData = new FormData();
            formData.append('view', 'home');

            const res = await axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            const data = res.data.response.category;
            setScansData(data);

        } catch (error) {
            console.error("Error fetching scans:", error.message);
        }
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <Row className="d-md-flex d-none justify-content-center align-items-center py-lg-5 py-md-5 py-xl-5 py-1" style={{ backgroundColor: "#ffff", zIndex: "1" }}>
            <h1 className="hed1 text-center pb-lg-0 pb-md-0 pb-xl-0 pb-0">Our Facilities</h1>
            <Col md={10} lg={10} xl={10} xs={10} sm={11}>
                <Slider {...settings} className='d-flex align-items-center justify-content-center'>
                    {scansData.map((scan, index) => (
                        <div key={index} className='radiologydiv d-flex align-items-center flex-column text-center'
                            onClick={() => navigate(`/book-scans/${scan.slug}/gurugram`)}>
                            <div className='radiology-data' style={{ border: `2px solid ${scan.borderColor || '#ccc'}` }}>
                                <img src={scan.image || 'fallback-image-url.jpg'} className='rd-img img-fluid' alt={scan.name} />
                            </div>
                            <p className="para text-center text-black pt-3">{scan.name}</p>
                        </div>
                    ))}
                </Slider>
            </Col>
        </Row>
    );
}
