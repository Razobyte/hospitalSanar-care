import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import './Section13.css'; // Make sure this file contains the CSS provided earlier

export default function Section13() {
  const api = import.meta.env.VITE_API_BASE_URL;
  const [blogdata, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const fetchBlogData = async (page) => {
    try {
      const formData = new FormData();
      formData.append('view', 'blog');
      formData.append('page', page);

      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.response && response.data.response.blogs) {
        setBlogData((prevData) => [...prevData, ...response.data.response.blogs]);
        setTotalCount(response.data.response.count);
      } else {
        console.log('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.log('Error fetching blog data:', error);
    }
  };

  useEffect(() => {
    fetchBlogData(currentPage);
  }, [currentPage]);


  return (
    <Row className="justify-content-center">
      <h1 className="text-center hed1 pb-sm-5 pb-3 pt-sm-0 pt-3">Our Blogs</h1>
      <Col md={10}  xs={10} lg={10} xxl={10} className="position-relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
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
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400:{
              slidesPerView: 4,
              spaceBetween: 30,

            }
          }}
          className="pb-4"
        >
          {blogdata.map((blog, id) => (
            <SwiperSlide key={blog.slug || id}>
              <div
               onClick={() => navigate(`/blog/blogdetails/${blog.slug}`)}

                className="blog-slide"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-image"
                />
                <h4 className="px-2 hed4 blog-title text-center">{blog.title}</h4>
                <p className="px-2 para blog-description text-center">{blog.short_description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={navigationPrevRef} className="custom-swiper-button-prev">
          <IoMdArrowDropleft />
        </div>
        <div ref={navigationNextRef} className="custom-swiper-button-next">
          <IoMdArrowDropright />
        </div>
      </Col>
    </Row>
  );
}