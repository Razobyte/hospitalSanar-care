import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';

export default function HealthPackageDetail() {
    const { slug } = useParams();
    const [packageDetail, setPackageDetail] = useState(null);
    const [status, setStatus] = useState('loading');
    const api = import.meta.env.VITE_API_BASE_URL;


    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                setStatus('loading');
                const formData = new FormData();
                formData.append('view', 'health_package_detail');
                formData.append('slug', slug);

                const res = await axios.post(api,
                     formData, {
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
        <Row className='d-flex justify-content-center mt-5'>
            <Col md={5} className="dynamic-page">
                <div className="image-container">
                    <img src={packageDetail.image} alt={packageDetail.title} className="img-fluid" />
                </div>
               <div className='mt-3 text-center'>
               <h2 className='hed2'>Package Details</h2>
               <div dangerouslySetInnerHTML={{ __html: packageDetail.description }}  className='para'/>
               </div>
            </Col>
            <Col md={5} className="content-container">
                <h1 className='hed2'>{packageDetail.title}</h1>
                <p>
                    Price: <span className="original-price para text-decoration-line-through text-muted">₹{packageDetail.mrp}</span> 
                    <span className="text-success fw-bold para">₹{packageDetail.price}</span>
                </p>
                <p className='hed3'>{packageDetail.short_description}</p>
                <Button  className="buttonfirst scan-button-sm m-0">Enquire Now</Button>
            </Col>
          
        </Row>
    );
}

