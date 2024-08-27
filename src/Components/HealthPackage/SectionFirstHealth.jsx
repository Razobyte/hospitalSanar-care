import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SectionFirstHealth() {
    const navigate = useNavigate();
    const [displayCount, setDisplayCount] = useState(6);
    const [healthData, setData] = useState([]);
    let api = import.meta.env.VITE_API_BASE_URL

    const fetchDoctorsData = async () => {
        try {
            const res = await axios.post(api, {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // console.log('Full Response:', res);
            // console.log('Response data:', res.data);

            setData(res.data.response.packages || []);
        } catch (error) {
            // console.error('Error fetching doctors data:', error);
        }
    };

    useEffect(() => {
        fetchDoctorsData();
    }, []);

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 3);
    };

    return (
        <>
            <Row className='d-flex justify-content-center align-items-center pt-5'>
                <h1 className='text-center pb-4'>
                    <span className="hed2" style={{ color: "#FF851B" }}>SANAR CARE</span>
                    <span className="hed2"> Health Tests Packages</span>
                </h1>
                <Form className="d-flex justify-content-center">
                    <div className="position-relative" style={{ width: '83%' }}>
                        <Form.Control
                            type="search"
                            aria-label="Search"
                            placeholder='Search Health Packages'
                            className='form-control-seacrhbar'
                        />
                        <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y"
                            style={{ marginRight: "15px" }} />
                    </div>
                </Form>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pb-5">
                <Col md={10}>
                    <Row className='py-3'>
                        {healthData.slice(0, displayCount).map((data, index) => (
                            <Col key={index} md={4} className='py-3'>
                                <Link to={`/health-package/${data.slug}`} className="text-decoration-none">
                                    <div className='health-div-iind'>
                                        <img src={data.image} alt="" className='img-fluid' />
                                        <h4 className='hed4 text-center pt-5 fw-bold' style={{ color: "#46A4D9" }}>{data.title}</h4>
                                        <p className='para text-center'>{data.short_description}</p>
                                        <p className='para text-center pt-1' style={{ color: "#00AC26", fontWeight: "800" }}>
                                            <span style={{ color: "#585454", textDecoration: "line-through", fontWeight: "500" }}>₹{data.mrp}</span> {data.price}
                                        </p>
                                        <div className='d-flex justify-content-center align-items-center text-center'>
                                            <Button className='buttonfirst'>Enquire Now</Button>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    {healthData.length > displayCount && (
                        <div className="text-center d-flex justify-content-center align-items-center">
                            <Button onClick={handleLoadMore} className='buttonfirst'>Load More</Button>
                        </div>
                    )}
                </Col>
            </Row>
        </>
    )
}