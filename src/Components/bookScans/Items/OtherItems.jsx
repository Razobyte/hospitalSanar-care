import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../category/Category.css';

export default function OtherItems() {
    const [categories, setCategories] = useState([]);
    const api = import.meta.env.VITE_API_BASE_URL;
    const location = useLocation();
    useEffect(() => {
        fetchOtherCategories();
    }, []);
    const fetchOtherCategories = async () => {
        const formdata = new FormData();
        formdata.append('view', 'scan_menu');
        try {
            const response = await axios.post(api, formdata);
            const data = response.data.response.categories;
            setCategories(data);
        } catch (error) {
            console.log('Error fetching categories:', error);
        }
    };

    // Get the current page slug from the URL
    const currentSlug = location.pathname.split('/')[2]; // Assuming the format is always /book-scans/[category]/[location]

    // Filter out the current category and find the items
    const filteredItems = categories
        .filter(cat => cat.slug.toLowerCase() !== currentSlug.toLowerCase()) // Remove current category
        .flatMap(cat => cat.items.map(item => ({ ...item, categorySlug: cat.slug }))); // Extract items from each category and add the category slug

    return (
        <Row className='d-flex justify-content-center align-items-center mb-5'>
            <Col md={10}>
                <h1 className='hed2 text-center pb-3 pt-3'>Other Items</h1>
                <div className='otherlistitems gap-1 col-md-12 col-lg-12 col-xl-12 align-items-center justify-content-center'>
                    <ul className='flex-container'>
                        {filteredItems.map((item, index) => (
                            <Link to={`/book-scans/${item.categorySlug}/${item.slug.toLowerCase()}/gurugram`} key={index} style={{ textDecoration: "none" }}>
                                <li className='text-center'>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    );
}
