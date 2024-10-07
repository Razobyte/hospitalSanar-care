import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null); // To detect clicks outside the search bar

  const api = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchCategories();
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]); // Close the dropdown when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  const fetchData = async (searchQuery) => {
    const formData = new FormData();
    formData.append('view', 'search');
    formData.append('search', searchQuery);

    try {
      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.message === 'success' && response.data.response?.items) {
        setSearchResults(response.data.response.items);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search data:', error);
      setSearchResults([]);
    }
  };

  const fetchCategories = async () => {
    const formData = new FormData();
    formData.append('view', 'scan_menu');
    try {
      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCategories(response.data.response.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      fetchData(value);
    } else {
      setSearchResults([]);
    }
  };

  const getCategorySlug = (itemSlug) => {
    if (!categories || !Array.isArray(categories)) {
      console.error('Categories is not defined or not an array:', categories);
      return ''; 
    }
    const category = categories.find(cat => cat.items.some(item => item.slug === itemSlug));
    return category ? category.slug : '';
  };

  const handleItemClick = (item) => {
    const categorySlug = getCategorySlug(item.slug);
    
    // Check if the result is a category or an item
    if (item.isCategory) {
      // Navigate to the category page
      navigate(`/book-scans/${item.slug}`);
    } else {
      // Navigate to the specific item page
      navigate(`/book-scans/${categorySlug}/${item.slug}/gurugram`);
    }

    setSearchTerm(''); // Clear the search input
    setSearchResults([]); // Close the dropdown
  };

  return (
    <div ref={searchRef} className="search-main-div position-relative">
      <Form className="d-flex align-items-center">
        <Form.Control
          type="search"
          placeholder="Search your scans.."
          className="pe-5 sanar-search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="position-absolute end-0 top-50 translate-middle-y pe-2 search-icon-div">
          <FaSearch className="search-icon" color="#ffff" />
        </div>
      </Form>

      {searchResults.length > 0 && (
        <ul className="search-results-unlist list-unstyled position-absolute w-100 bg-white shadow-sm mt-1 rounded">
          {searchResults.map((item) => (
            <li key={item.slug} className="py-2 px-3 border-bottom">
              <div
                onClick={() => handleItemClick(item)}
                className="text-decoration-none text-dark cursor-pointer"
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
