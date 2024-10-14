import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Section10 from '../home/Section10';
import Section11 from '../home/Section11';
import '../home/Home.css'

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
            <Row className='py-sm-4 py-2 d-flex justify-content-center align-items-start gap-sm-5 gap-0'>
                <Col md={5} xl={5} xs={12} className="px-0">
                    <Card className="border-0  rounded">
                        <Card.Img variant="top" src={blogDetail.image} alt={blogDetail.title} />
                        <Card.Body>
                            <Card.Title className="text-primary">{blogDetail.title}</Card.Title>
                            <Card.Text className='hed4'>{blogDetail.short_description}</Card.Text>
                            <div  className="para" dangerouslySetInnerHTML={{ __html: blogDetail.description }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} xl={3} className='p-sm-3'>
                    <div className='mb-sm-4  mb-2 shadow-sm rounded p-sm-4 p-2 bg-white'>
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
                                <Form.Label className="text-muted hed3">Recent Blogs</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search recent posts..." 
                                    value={recentPostSearch} 
                                    onChange={handleRecentPostSearchChange} 
                                    className="rounded-pill mb-2"
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
                                            className=" recent-blog-img" 
                                        />
                                    )}
                                </div>
                                <p className='mb-0 para' style={{cursor:"pointer"}}>{post.title}</p>
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
