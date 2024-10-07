import { Row, Col, Button } from 'react-bootstrap';
import blogBanner from '../../../public/Image/Blogs page banner.png';
import Section11 from '../home/Section11';
import Section10 from '../home/Section10';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const [blogdata, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Start at the first page
  const recordsPerPage = 8; // Show 9 blogs per page

  let api = import.meta.env.VITE_API_BASE_URL;

  const fetchBlogData = async () => {
    try {
      const response = await axios.post(api, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data && response.data.response && response.data.response.blogs) {
        setBlogData(response.data.response.blogs);
      }
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const navigate = useNavigate();
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const visibleRecords = blogdata.slice(firstIndex, lastIndex); // Get blogs for the current page
  const numberOfPages = Math.ceil(blogdata.length / recordsPerPage); // Total number of pages

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <div className='d-flex justify-content-center align-items-center'>
        <h1 className='hed1 pt-3'>Our Blogs</h1>
      </div>
      
      <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
        {visibleRecords.map((blog,index) => (
          <div
          key={blog.id || blog.slug || index}// Assuming `blog` has a unique `id`
            onClick={() => navigate(`/blog/blogdetails/${blog.slug}`)}
            style={{
              width: '400px',
              cursor: 'pointer',
              height: 'auto', // Allows the height to adjust based on content
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff'
            }}
          >
            {blog.image && (
              <img
                src={blog.image} // URL of the image
                alt={blog.title} // Alt text for accessibility
                style={{
                  width: '100%', // Full width of the card
                  height: 'auto', // Maintain aspect ratio
                  borderRadius: '8px',
                  objectFit: 'cover', // Cover the area without distortion
                  marginBottom: '16px' // Space between image and text
                }}
              />
            )}
            <h2 style={{ color: "#46A4D9" }} className='hed4 text-center'>{blog.title}</h2>
            <p style={{ color: '#555' }} className='para text-center'>{blog.short_description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className='mt-4 mb-4' style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            style={{
              backgroundColor: currentPage === pageNumber ? '#46A4D9' : '#3b7fbf', 
              border: "0px"
            }}
          >
            {pageNumber}
          </Button>
        ))}
      </div>

      <Section11 />
      <Section10 />
      
      <Row className="d-xl-none d-flex justify-content-center align-items-center my-3">
        <Col md={12} className="fotter-first">
          <h1 className="hed3 text-center pt-3 pb-1">Popular Radiology Scan's</h1>
          <div className="d-flex justify-content-center align-items-center gap-1">
            <p className="para text-left with-slash">Coronary CT Angiography In Gurugram</p>
            <p className="para text-left with-slash">X-Ray Neck Lateral View In Gurugram</p>
            <p className="para text-left with-slash">Color Doppler - Carotids In Gurugram</p>
            <p className="para text-left">Ultra Sound - Thyroid In Gurugram</p>
          </div>
        </Col>
      </Row>
    </>
  );
}
