import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import './Header.css';

const MobileBookScansDropdown = ({ onClose }) => {
    const [menuData, setMenuData] = useState({ categories: [] });
    const [openCategory, setOpenCategory] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const api = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetchMenuData();
        
        // Event listener to close dropdown when clicking outside
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.mobile-menu-item')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const fetchMenuData = async () => {
        try {
            const formData = new FormData();
            formData.append('view', 'scan_menu');

            const response = await axios.post(api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data && response.data.message === 'success' && response.data.response) {
                setMenuData(response.data.response);
            }
        } catch (error) {
            console.error('Error fetching menu data:', error);
        } finally {
            setLoading(false); // Hide loader after fetching data
        }
    };

    const handleCategoryClick = (category) => {
        setOpenCategory(openCategory === category ? null : category); // Toggle category
    };

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        setIsDropdownOpen(false);
        navigate(path);
    };

    return (
        <li className="mobile-menu-item">
            {/* Book Scans Main Header */}
            <div
                className="mobile-menu-header"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <span className="mobile-menu-title">Book Scans</span>
                <FaChevronDown className={`mobile-menu-icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </div>

            {/* Show loader if data is still loading */}
            {loading ? (
                <div className="mobile-menu-loading">Loading...</div>
            ) : (
                // Show Categories on Clicking Book Scans
                isDropdownOpen && (
                    <div className="mobile-menu-categories">
                        {/* List of Categories */}
                        {menuData.categories.map((category, index) => (
                            <div key={index} className="mobile-menu-category">
                                {/* Category Name with Arrow */}
                                <div
                                    className="mobile-category-header"
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <Link 
                                         to={`/book-scans/${category.slug}/gurugram`}
                                        onClick={(e) => handleLinkClick(e, `/book-scans/${category.slug}/gurugram`)}
                                        className='mobile-category-title'
                                    >
                                        {category.name}
                                    </Link>
                                    <FaChevronDown className={`mobile-category-icon ${openCategory === category ? 'rotate' : ''}`} />
                                </div>

                                {/* Nested items for the selected category */}
                                {openCategory === category && category.items && category.items.length > 0 && (
                                    <div className="mobile-category-item">
                                        {category.items.map((item, itemIndex) => (
                                            <Link
                                            to={`/book-scans/${category.slug}/${item.slug}/gurugram`}
                                                key={itemIndex}
                                                className="mobile-category-items"
                                                onClick={(e) => handleLinkClick(e,`/book-scans/${category.slug}/${item.slug}/gurugram`)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )
            )}
        </li>
    );
};

export default MobileBookScansDropdown;
