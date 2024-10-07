import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../home/Home.css'

export default function SectionFirstHealth() {
    const [displayCount, setDisplayCount] = useState(9);
    const [healthData, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const api = import.meta.env.VITE_API_BASE_URL;

    const fetchDoctorsData = async () => {
        try {
            const res = await axios.post(api, {}, {
                headers: { 'Content-Type': 'application/json' },
            });
            setData(res.data.response.packages || []);
        } catch (error) {
            console.error('Error fetching doctors data:', error);
        }
    };

    useEffect(() => {
        fetchDoctorsData();
    }, []);

    const handleLoadMore = () => setDisplayCount(prevCount => prevCount + 6);

    const filteredData = healthData.filter(data =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-5">
            <h1 className='text-center mb-4 hed2'>
                <span style={{ color: "#FF851B" }}>SANAR CARE</span> Health Tests Packages
            </h1>
            <Form className="mb-4">
                <div className="position-relative">
                    <Form.Control
                        type="search"
                        placeholder='Search Health Packages'
                        className='form-control-searchbar'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ color: '#4085AD' }} />
                </div>
            </Form>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {filteredData.slice(0, displayCount).map((data, index) => (
                    <Col key={index}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={data.image} alt={data.title} />
                            <Card.Body className="d-flex flex-column text-center">
                                <Card.Title className="hed3" style={{color:"#4085AD"}}>{data.title}</Card.Title>
                                <Card.Text className="text-muted small para">{data.short_description}</Card.Text>
                                <div className="mt-auto text-center">
                                    <p className="text-success fw-bold mb-2">
                                        <small className="text-muted text-decoration-line-through me-2">₹{data.mrp}</small>
                                        ₹{data.price}
                                    </p>
                                    <Link to={`/health-package/${data.slug}`} className="btn btn-outline-primary btn-sm w-100 buttonfirst">
                                        Enquire Now
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {filteredData.length > displayCount && (
                <div className="text-center mt-4">
                    <Button onClick={handleLoadMore} variant="primary">Load More</Button>
                </div>
            )}
        </div>
    );
}