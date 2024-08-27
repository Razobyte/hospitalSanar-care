import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhone, FaSearch, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { MdArrowRight } from "react-icons/md";
import logo from '../../../public/Image/sanar-care-logo.png';
import Logo2 from '../../../public/Image/NABH-150x150.jpg';
import user from '../../../public/Image/user.png';
import phone from '../../../public/Image/phone.png';
import logo3 from '../../../public/Image/nabh-logo.png';
import './Header.css';
import callimg from '../../../public/Image/blue call.png';
import axios from 'axios';

export default function Header() {
    const [menuData, setMenuData] = useState({ categories: [] });
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    const api = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetchMenuData();
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
        }
    };

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            const filtered = menuData.categories
                .flatMap(category => category.items || [])
                .filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
            setSearchTerm('')
        }
    };
    const handleNavLinkClick = () => {
        setExpanded(false); // Collapse the navbar after a link is clicked
    };

    const handleTitleClick = () => {
        setExpanded(!expanded); // Toggle the expanded state
    };

    return (
        <>
            {/* Mobile Navbar */}
            <Navbar className="sanar-mobile-nav d-lg-none py-2">
                <Container fluid className='px-0'>
                    <Navbar.Brand href="#home" className='sanar-mobile-brand'>
                        <img src={logo3} alt="Sanar Care Logo" />
                    </Navbar.Brand>
                    <Nav className="mr-auto d-flex">
                        <div className="sanar-mobile-contact">
                            <div className="sanar-mobile-contact-icon">
                                <img src={callimg} alt="Call" />
                            </div>
                            <span className='sanar-mobile-contact-number'>+91-0128790452</span>
                        </div>
                    </Nav>
                </Container>
            </Navbar>

            {/* Desktop Navbar */}
            <Navbar className="sanar-desktop-nav d-none d-lg-flex">
                <Container fluid className='px-3'>
                    <div className="d-flex justify-content-between w-100 align-items-center px-5">
                        <Navbar.Brand href="#home" className='sanar-desktop-brand'>
                            <img src={logo} alt="Sanar Care Logo" className='img-fluid' />
                        </Navbar.Brand>
                        <Nav className="sanar-desktop-secondary-nav d-flex align-items-center">
                            <Nav.Link className='d-flex align-items-center mx-3'>
                                <img src={Logo2} alt="NABH Logo" style={{ height: "80px", width: "80px" }} />
                            </Nav.Link>
                            <Nav.Link href="#home" className='d-flex align-items-center mx-3'>
                                <img src={user} alt="User" className='img-fluid' />
                                <p className='mb-0 ms-2'>Login/Register</p>
                            </Nav.Link>
                            <Nav.Link href="#home" className='d-flex align-items-center mx-3'>
                                <img src={phone} alt="Phone" className='img-fluid' style={{ height: "20px" }} />
                                <div className='ms-2'>
                                    <p className="sanar-desktop-support-text mb-0">Customer Support/ <span className="sanar-desktop-support-number">7042148149</span></p>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>

            {/* Main Navbar */}
            <Navbar expand="lg" className='sanar-header py-0' expanded={expanded} sticky='top'>
                <Container fluid className='m-0 px-0'>
                    <Navbar.Brand href="#home" className='d-lg-none'>
                        <img src={logo} alt="Sanar Care Logo" style={{ height: "30px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto p-0 d-flex align-items-center gap-3">
                            <Nav.Link as={Link} to="/" onClick={handleNavLinkClick} className='sanar-nav-link'>Home</Nav.Link>
                            <div className="sanar-dropdown">
                                <Nav.Link className='sanar-nav-link sanar-dropdown-toggle' onClick={handleTitleClick}>
                                    Book Scans <FaChevronDown />
                                </Nav.Link>
                                <div className="sanar-dropdown-menu">
                                    {menuData.categories.map((category, index) => (
                                        <div key={index} className="sanar-category-item">
                                            <Link to={`/bookscans/${category.slug}/gurugram`} onClick={handleNavLinkClick}>
                                                {category.name}
                                            </Link>
                                            <FaChevronRight className="sanar-category-item-icon" />
                                            <div className="sanar-nested-dropdown">
                                                {category.items && category.items.length > 0 ? (
                                                    category.items.map((item, itemIndex) => (
                                                        <Link
                                                            to={`/bookscans/${category.slug}/${item.slug}/gurugram`}
                                                            key={itemIndex}
                                                            className="sanar-nested-item"
                                                            onClick={handleNavLinkClick}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))
                                                ) : (
                                                    <div className="sanar-empty-items">No items available</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Nav.Link as={Link} to="/doctors" onClick={handleNavLinkClick} className='sanar-nav-link'>Our Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/health-package" onClick={handleNavLinkClick} className='sanar-nav-link'>Health Packages</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className='sanar-nav-link' onClick={handleNavLinkClick}>Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='sanar-nav-link' onClick={handleNavLinkClick}>Reach Us</Nav.Link>


                            <Form className="sanar-search-form d-lg-flex align-items-center d-none position-relative py-0 " >
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    placeholder="Search your scans"
                                    className="sanar-search-input"
                                    value={searchTerm}
                                    onChange={handleSearchChange}

                                />
                                <FaSearch className='search-icon' color='#47474750' />
                            </Form>

                            {filteredItems.length > 0 && (
                                <ul className="search-results-unlist">
                                    {filteredItems.map((item) => (
                                        <li key={item.slug}
                                            className='search-items-link'>
                                            <Link to={`/bookscans/digital-xray/${item.slug}/gurugram`} onClick={handleNavLinkClick} className='search-item-data'>
                                                {item.name}
                                            </Link>
                                        </li>


                                    ))}
                                </ul>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}