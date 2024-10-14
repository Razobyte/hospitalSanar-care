import { Row, Col, Card, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; // Add Navigation module
import 'swiper/css';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'; // Icons for navigation
import './Home.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let api = import.meta.env.VITE_API_BASE_URL;

export default function SectionThree() {
  const [facilitiesData, setFacilitiesData] = useState([]);
  const [categories, setCategories] = useState([]); // State to hold categories
  const navigate = useNavigate();

  const navigationPrevRef = useRef(null); // Ref for previous button
  const navigationNextRef = useRef(null); // Ref for next button

  useEffect(() => {
    fetchFacilities();
    fetchCategories(); // Fetch categories as well
  }, []);

  // Fetch facilities (items)
  const fetchFacilities = async () => {
    try {
      const formData = new FormData();
      formData.append('view', 'home');
      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = response.data.response.items;
      setFacilitiesData(data);
    } catch (error) {
      console.error('Error fetching facilities:', error);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    const formData = new FormData();
    formData.append('view', 'scan_menu');
    try {
      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCategories(response.data.response.categories); // Assuming your categories are in a similar structure
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getSlidesPerView = () => {
    const numItems = facilitiesData.length;
    if (numItems <= 2) return numItems; // Show all items if there are 2 or fewer
    return window.innerWidth < 768 ? 2 : 4; // Otherwise, use your existing logic
  };

  // Get the category slug for a given item
  const getCategorySlug = (categorySlug) => {
    if (!categories || !Array.isArray(categories)) {
      console.error('Categories is not defined or not an array:', categories);
      return ''; // Return an empty string if categories is not defined
    }
    const category = categories.find(cat => cat.items.some(category => category.slug === categorySlug));
    return category ? category.slug : ''; // Return the category slug or an empty string
  };

  const handleItemClick = (itemSlug) => {
    const categorySlug = getCategorySlug(itemSlug); // Get the category slug
    navigate(`/book-scans/${categorySlug}/${itemSlug}/gurugram`);
  };

  return (
    <Row className="d-md-flex d-lg-flex d-xl-flex d-none justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-2">
      <Col md={10} xs={12}>
        <h1 className="hed1 text-center pb-xl-3 pb-lg-3 pb-md-3 pb-2 hover">Health Scans</h1>
        <Row className="py-lg-3 py-md-3 py-xl-3 py-1 d-flex justify-content-center align-items-center position-relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={getSlidesPerView()}
            loop={facilitiesData.length > getSlidesPerView()}
            modules={[Autoplay, Navigation]} // Include Navigation module
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 5 },
            }}
          >
            {facilitiesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Col md={12} xs={12} className="d-flex justify-content-center">
                  <Card className='scan-card-main'>
                    <img src={slide.image} alt={slide.name} className='img-fluid scan-image' />
                    <Card.Body className='scan-card-main-body'>
                      <Card.Title className="text-center hed3">{slide.lab_name}</Card.Title>
                      <Card.Text className="text-center para" style={{ color: "#46A4D9", fontSize: "18px", fontWeight: "600" }}>
                        <span>Starting@</span>
                        <span style={{ textDecoration: "line-through", color: '#46A4D9', fontSize: "16px", fontWeight: "500" }}>
                          {slide.mrp}
                        </span>
                        <span><span>{slide.price}</span></span>
                      </Card.Text>
                      <Card.Text className="text-center hed4">{slide.name}</Card.Text>
                      <div className="text-center mt-4 mb-0 d-flex justify-content-center align-items-center">
                        <Button
                          className="buttonfirst scan-button-sm m-0"
                          onClick={() => handleItemClick(slide.slug)} // Pass only item slug
                        >
                          {slide.buttonText || "Learn More"}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div ref={navigationPrevRef} className="custom-swiper-button-prev">
            <IoMdArrowDropleft />
          </div>
          <div ref={navigationNextRef} className="custom-swiper-button-next">
            <IoMdArrowDropright />
          </div>
        </Row>
      </Col>
    </Row>
  );
}
