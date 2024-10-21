import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import blogBanner from '../../../public/Image/Blogs page banner.png';
import Section11 from '../home/Section11';
import Section10 from '../home/Section10';

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const api = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const fetchBlogData = async (page) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('view', 'blog');
      formData.append('page', page);

      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { blogs, count } = response.data.response;
      setBlogData(blogs);
      setTotalCount(count);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(totalCount / 9); // Assuming 9 items per page
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          variant={currentPage === i ? 'primary' : 'outline-primary'}
          className="mx-1"
        >
          {i}
        </Button>
      );
    }

    return (
      <div className="d-flex justify-content-center my-4">
        {pageNumbers}
      </div>
    );
  };

  return (
    <>
      {/* Banner Section */}
      <Row style={{
        backgroundImage: `url(${blogBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px"
      }} className='d-md-flex d-none justify-content-center align-items-center'>
        <Col md={12} className='d-flex align-items-center '>
          <div className='px-5 '>
            <h2 className='d-flex gap-4 pl-5 '><span className='hed2'>Explore Our</span>  <span className="hed1" style={{ color: "#FF631A" }}>Comprehensive</span></h2>
            <h1 className='d-flex gap-4 pt-1'><span className="hed1" style={{ color: "#FF631A" }}>articles</span> <span className='hed2'>On everything from </span></h1>
            <h2 className='d-flex gap-4 pt-1' ><span className="hed1" style={{ color: "#FF631A" }}>Preventive Care </span> <span className='hed2'>to </span></h2>
            <h2 className='hed1 pt-2' style={{ color: "#46A4D9" }}>Cutting-edge treatments</h2>
          </div>
        </Col>
      </Row>

      {/* Blogs Section */}
      <div className="container">
  <Row className="justify-content-center align-items-center text-center">
  <h1 className="hed1 pt-3 pb-4">Our Blogs</h1>
    {blogData.map((blog, index) => (
      <Col key={blog.slug || index} xs={12} md={6} lg={4} className="mb-4">
        <div
          onClick={() => navigate(`/blog/blogdetails/${blog.slug}`)}
          style={{
            cursor: 'pointer',
            height: 'auto',
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
                marginBottom: '16px',
              }}
            />
          )}
          <h2 style={{ color: '#46A4D9' }} className="hed4 text-center">
            {blog.title}
          </h2>
          <p style={{ color: '#555' }} className="para text-center">
            {blog.short_description}
          </p>
        </div>
      </Col>
    ))}
  </Row>
</div>
      {/* Pagination */}
      {renderPagination()}

      <Section11 />
      <Section10 />

      {/* ... (The rest of the component remains the same) ... */}
    </>
  );
}