import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Category.css'

export default function Othercategory() {
    const [category, setCategory] = useState([]);
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
            setCategory(data);
        } catch (error) {
            console.log('Error fetching categories:', error);
        }
    };

    // Get the current page slug from the URL
    const currentSlug = location.pathname.split('/')[2]; // Assuming the format is always /book-scans/[category]/[location]

    // Filter out the current category
    const filteredCategories = category.filter(cat => cat.slug.toLowerCase() !== currentSlug.toLowerCase());

    return (
        <Row className='d-flex justify-content-center align-items-center mb-5'>
            <Col md={10}>
                <h1 className='hed2 text-center pb-3 pt-3'>Other Categories</h1>
                <div className='otherlistitems gap-1 col-md-12 col-lg-12 col-xl-12 align-items-center justify-content-center'>
                    <ul className='flex-container'>
                        {filteredCategories.map((categorydata, indx) => (
                            <Link to={`/book-scans/${categorydata.slug.toLowerCase()}/gurugram`} key={indx} style={{textDecoration:"none"}}>
                                <li className='text-center'>
                                    {categorydata.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    );
}