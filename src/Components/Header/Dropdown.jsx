import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

const BookScansDropdown = () => {
  const [menuData, setMenuData] = useState({ categories: [] });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const api = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [closeTimeout, setCloseTimeout] = useState(null);

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

  const handleMouseEnter = (category) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout); // Clear any pending close timeouts if re-entered
    }
    setIsDropdownOpen(true); // Open dropdown immediately
    setHoveredCategory(category); // Set the currently hovered category
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsDropdownOpen(false); // Close dropdown after a delay
      setHoveredCategory(null); // Reset hovered category
    }, 500); // Delay time in milliseconds (500ms)

    setCloseTimeout(timeoutId); // Store the timeout ID
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    navigate(path);
  };

  return (
    <div
      className="sanar-dropdown d-sm-block d-none"
      ref={dropdownRef}
      onMouseEnter={() => handleMouseEnter(null)}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/book-scans" className="sanar-nav-link sanar-dropdown-toggle d-flex align-items-center">
        Book Scans
        <FaChevronDown />
      </Link>
      {isDropdownOpen && (
        <div className="sanar-dropdown-menu">
          <div className="sanar-category-list">
            {menuData.categories.map((category, index) => (
              <div
                key={index}
                className={`sanar-category-item ${hoveredCategory === category ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(category)}
              >
                <Link 
                  to={`/book-scans/${category.slug}/gurugram`}
                  onClick={(e) => handleLinkClick(e, `/book-scans/${category.slug}/gurugram`)}
                >
                  {category.name}
                </Link>
                <FaChevronRight className="sanar-category-item-icon" color='#474747' size={15} />
              </div>
            ))}
          </div>
          <div className="sanar-nested-dropdown">
            {hoveredCategory && hoveredCategory.items && hoveredCategory.items.length > 0 && (
              hoveredCategory.items.map((item, itemIndex) => (
                <Link
                  to={`/book-scans/${hoveredCategory.slug}/${item.slug}/gurugram`}
                  key={itemIndex}
                  className="sanar-nested-item"
                  onClick={(e) => handleLinkClick(e, `/book-scans/${hoveredCategory.slug}/${item.slug}/gurugram`)}
                >
                  {item.name}
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookScansDropdown;
