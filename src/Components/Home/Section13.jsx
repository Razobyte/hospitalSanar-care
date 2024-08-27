import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Section13() {
    let api = import.meta.env.VITE_API_BASE_URL
    const [blogdata, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;

    const fetchBlogData = async () => {
        
        try {
            const response = await axios.post(api, {}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('API Response:', response);
            console.log('Response Data:', response.data);
            console.log('Banners:', response.data.response.banners);
            console.log('Items:', response.data.response.blogs);

            if (response.data && response.data.response && response.data.response.blogs) {
                setBlogData(response.data.response.blogs);
            } else {
                console.log("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.log('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const visibleRecords = blogdata.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(blogdata.length / recordsPerPage);

    const movePage = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>

            <Row className="justify-content-center">
                <h1  className="text-center hed1 pb-5 " style={{ color: "#46A4D9" }}>Our Blogs</h1>
                <Col md={10}>
                    <Row>
                        {visibleRecords.map((blogs, id) => (
                            <Col key={id} md={6} lg={4} xl={4} className="d-flex justify-content-center mb-4">
                                <div style={{ width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                    <img src={blogs.image} alt={blogs.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                                    <h4 style={{ color: "#46A4D9", margin: '1rem 0' }}>{blogs.title}</h4>
                                    <p style={{ padding: '0 1rem', textAlign: 'center' }}>{blogs.short_description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <Button onClick={() => movePage('prev')} disabled={currentPage === 1} style={{backgroundColor:"#3b7fbf",border:"0px"}}>{'<'}</Button>
                        <Button onClick={() => movePage('next')} disabled={currentPage === numberOfPages}
                           style= {{backgroundColor:"#3b7fbf",border:"0px"}}>{'>'}</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
