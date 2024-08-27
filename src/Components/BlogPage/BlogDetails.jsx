import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Section10 from '../Home/Section10';
import Section11 from '../Home/Section11';

export default function BlogDetail() {
    const { slug } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categorySearch, setCategorySearch] = useState('');
    const [recentPostSearch, setRecentPostSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    let api = import.meta.env.VITE_API_BASE_URL


    const fetchBlogDetail = async () => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('view', 'blog_detail');
            formData.append('slug', slug);
            formData.append('category', categorySearch);

            const response = await axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data?.msgcode === "1") {
                const data = response.data.response;
                if (data?.blogDetail) {
                    setBlogDetail(data.blogDetail);
                    setCategories(data.blog_categories || []);
                    setRecentPosts(data.recent_blogs || []);
                } else {
                    setError('No blog details found in the response');
                }
            } else {
                setError('API response did not indicate success');
            }
        } catch (err) {
            setError('Error fetching blog details: ' + (err.message || 'Unknown error'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchBlogDetail();
        }
    }, [slug, categorySearch]);

    const handleCategorySearchChange = (e) => {
        setCategorySearch(e.target.value);
    };

    const handleRecentPostSearchChange = (e) => {
        setRecentPostSearch(e.target.value);
    };

    const filteredRecentPosts = recentPosts.filter(post => 
        post.title.toLowerCase().includes(recentPostSearch.toLowerCase())
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!blogDetail) return <div>No blog details found. Slug: {slug}</div>;

    return (
        <>
            <Row className='py-4 d-flex justify-content-center align-items-start gap-5'>
                <Col md={5} xl={5} xs={12} className="px-0">
                    <Card className="border-0  rounded">
                        <Card.Img variant="top" src={blogDetail.image} alt={blogDetail.title} />
                        <Card.Body>
                            <Card.Title className="text-primary">{blogDetail.title}</Card.Title>
                            <Card.Text>{blogDetail.short_description}</Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: blogDetail.description }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} xl={3} className='p-3'>
                    <div className='mb-4 shadow-sm rounded p-4 bg-white'>
                        <Form>
                            <Form.Group controlId="categorySearch">
                                <Form.Label className="text-muted hed3">Categories</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search categories..." 
                                    value={categorySearch} 
                                    onChange={handleCategorySearchChange} 
                                    className="rounded-pill"
                                />
                            </Form.Group>
                        </Form>
                        <ul className='list-unstyled mt-3'>
                            {categories.map((cat, index) => (
                                <li key={index} className="mb-2 hed4" style={{cursor:"pointer"}}>{cat.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='shadow-sm rounded p-4 bg-white'>
                        <Form>
                            <Form.Group controlId="recentPostSearch">
                                <Form.Label className="text-muted hed3">Recent Posts</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search recent posts..." 
                                    value={recentPostSearch} 
                                    onChange={handleRecentPostSearchChange} 
                                    className="rounded-pill"
                                />
                            </Form.Group>
                        </Form>
                        {filteredRecentPosts.map((post, index) => (
                            <div key={index} className='recent-post d-flex gap-3 mb-3 align-items-center'>
                                <div>
                                    {post.image && (
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="img-fluid rounded" 
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                        />
                                    )}
                                </div>
                                <p className='mb-0 hed4' style={{cursor:"pointer"}}>{post.title}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Section11 />
            <Section10 />
        </>
    );
}