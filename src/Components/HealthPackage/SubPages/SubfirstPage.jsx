import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';
import './Dynamic.css'; // Make sure this path is correct

export default function HealthPackageDetail() {
    const { slug } = useParams();
    const [packageDetail, setPackageDetail] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                setStatus('loading');
                const formData = new FormData();
                formData.append('view', 'health_package_detail');
                formData.append('slug', slug);

                const res = await axios.post('https://www.shopifysolutions.in/website/sanarcare/androidApi/index.php', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                console.log('Full Response of package details:', res.data);

                if (res.data?.response?.PackageDetail?.length > 0) {
                    setPackageDetail(res.data.response.PackageDetail[0]);
                    setStatus('loaded');
                } else {
                    setStatus('error');
                }
            } catch (error) {
                console.error('Error fetching package detail:', error);
                setStatus('error');
            }
        };

        fetchPackageDetail();
    }, [slug]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>No package details available or an error occurred.</div>;
    }

    if (!packageDetail) {
        return <div>No package details available.</div>;
    }

    return (
        <Row className='d-flex justify-content-center'>
            <Col md={6} className="dynamic-page">
                <div className="image-container">
                    <img src={packageDetail.image} alt={packageDetail.title} className="img-fluid" />
                </div>
                
            </Col>
            <Col md={6} className="content-container">
                <h1>{packageDetail.title}</h1>
                <p>
                    Price: <span className="original-price text-decoration-line-through text-muted">₹{packageDetail.mrp}</span> 
                    <span className="text-success fw-bold">₹{packageDetail.price}</span>
                </p>
                <p>{packageDetail.short_description}</p>
                <Button>Enquire Now</Button>
            </Col>
            <Col md={6} xl={8}>
            <h2>Package Details</h2>
                <div dangerouslySetInnerHTML={{ __html: packageDetail.description }} />
            </Col>
        </Row>
    );
}

