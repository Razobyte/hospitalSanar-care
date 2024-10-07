import React, { useState } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/Image/sanar-care-logo.webp';
import phone from '../../../public/Image/phone.png';
import log2 from '../../../public/Image/nabh-logo.png'
import './Header.css';
import BookScansDropdown from './Dropdown';
import MobileBookScansDropdown from './Mobiledrodown';
import WhatsAppButton from '../../Whbutton';
import SearchBar from './SerchBar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setExpanded(expanded ? false : "expanded");
    };
    return (
        <>
            <Navbar className='z-50 bg-light d-flex flex-column  justify-content-center align-items-center py-0' expanded={expanded} sticky='top'>
            <div className="container-fluid d-flex justify-content-evenly align-items-center">
                    <Navbar.Brand href="#home" className="sanar-desktop-brand">
                        <img src={logo} alt="Sanar Care Logo" className="img-fluid object-cover" />
                    </Navbar.Brand>
                    <SearchBar />
                    

                    <Nav.Link href="tel:+917042148149" className="d-flex align-items-center">
                        <img src={phone} alt="Phone" className="me-1 d-sm-flex d-none"  style={{maxWidth:"24px",maxHeight:"24px"}}/>
                        <div>
                            <p className="mb-0  para  text-muted  d-sm-flex d-none">Customer Support</p>
                            <p className="mb-0 fw-bold para ms-1">7042148149</p>
                        </div>
                    </Nav.Link>
                    <WhatsAppButton className="icon-wh" />
                    <div className='d-sm-none d-flex'>
                    <FaBars onClick={toggleMenu} color='#FF631A' /> 
                    </div>
                 
                </div>
                {isMenuOpen ? (
                    <div className={`sanar-header py-0 px-0 d-sm-none d-flex justify-content-between align-items-end ${isMenuOpen ? 'active' : ''}`}>

                        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu} />
                        <div className='d-flex align-items-center me-2 mt-1' onClick={toggleMenu} role="button">
                            <FaTimes color='#ffff' size={20} />
                        </div>
                        <Navbar.Collapse id="navbarScroll" className="sanar-navbar-collapse">
                            <Navbar.Brand href="#home" className='sanar-desktop-brand2 bg-light rounded-circle'>
                                <img src={log2} alt="Sanar Care Logo" className='img-fluid object-cover' />
                            </Navbar.Brand>
                            <Nav className="p-0 d-flex flex-column align-items-start gap-0">
                                <Nav.Link as={Link} to="/" className='sanar-nav-link'>Home</Nav.Link>

                                <Nav.Link as={Link} to="/our-doctors" className='sanar-nav-link'>Our Doctors</Nav.Link>
                                <Nav.Link as={Link} to="/health-package" className='sanar-nav-link'>Health Packages</Nav.Link>
                                <Nav.Link as={Link} to="/blog" className='sanar-nav-link'>Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className='sanar-nav-link'>Reach Us</Nav.Link>
                                <BookScansDropdown />

                            </Nav>
                            <MobileBookScansDropdown />
                        </Navbar.Collapse>
                    </div>

                ) : (
                    <div className={`sanar-header py-0 w-100 d-sm-flex d-none ${isMenuOpen ? 'active' : ''}`}>
                        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu} />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mx-auto p-0 d-flex align-items-center gap-3">
                                <Nav.Link as={Link} to="/" className='sanar-nav-link'>Home</Nav.Link>
                                <BookScansDropdown />
                                <Nav.Link as={Link} to="/our-doctors" className='sanar-nav-link'>Our Doctors</Nav.Link>
                                <Nav.Link as={Link} to="/health-package" className='sanar-nav-link'>Health Packages</Nav.Link>
                                <Nav.Link as={Link} to="/blog" className='sanar-nav-link'>Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className='sanar-nav-link'>Reach Us</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                )}

            </Navbar>
        </>
    );
}
