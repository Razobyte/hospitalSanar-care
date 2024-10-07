import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Section13() {
    let api = import.meta.env.VITE_API_BASE_URL
    const [blogdata, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(3); // Default is 3 blogs per page
    const navigate = useNavigate();

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

    // Listen for window resize and adjust the recordsPerPage accordingly
    useEffect(() => {
        const updateRecordsPerPage = () => {
            if (window.innerWidth < 768) {
                setRecordsPerPage(1); // Show 1 blog per page on mobile
            } else {
                setRecordsPerPage(3); // Default 3 blogs per page on larger screens
            }
        };

        // Call on component mount
        updateRecordsPerPage();

        // Listen for window resize
        window.addEventListener('resize', updateRecordsPerPage);

        // Clean up the event listener
        return () => window.removeEventListener('resize', updateRecordsPerPage);
    }, []);

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
                <h1 className="text-center hed1 pb-sm-5 pb-3 pt-sm-0 pt-3" style={{ color: "#46A4D9" }}>Our Blogs</h1>
                <Col md={10}>
                    <Row>
                        {visibleRecords.map((blogs, id) => (
                            <Col key={id} md={6} lg={4} xl={4} className="d-flex justify-content-center mb-4">
                                <div onClick={() => navigate(`/blog/blogdetails/${blogs.slug}`)}
                                    style={{
                                        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                                        border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                    <img src={blogs.image} alt={blogs.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                                    <h4 style={{ color: "#46A4D9", margin: '1rem 0' }} className='px-2 hed4'>{blogs.title}</h4>
                                    <p style={{ padding: '0 1rem', textAlign: 'center' }} className='px-2 para'> {blogs.short_description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className='mt-sm-0 mt-1 mb-sm-4 mb-3' style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <Button onClick={() => movePage('prev')} disabled={currentPage === 1}
                            style={{ backgroundColor: "#3b7fbf", border: "0px" }}>{'<'}</Button>
                        <Button onClick={() => movePage('next')} disabled={currentPage === numberOfPages}
                            style={{ backgroundColor: "#3b7fbf", border: "0px" }}>{'>'}</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
