import React, { useEffect, useState, useRef } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import './Section13.css'
import 'swiper/css';

export default function HealthPackages() {
  const [healthData, setHealthData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const api = import.meta.env.VITE_API_BASE_URL;

  const fetchHealthPackagesData = async () => {
    try {
      const res = await axios.post(api, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setHealthData(res.data.response.packages || []);
      setTotalCount(res.data.response.count || 0);
    } catch (error) {
      console.error('Error fetching health packages data:', error);
    }
  };

  useEffect(() => {
    fetchHealthPackagesData();
  }, [currentPage]);

  return (
    <Row className='justify-content-center py-5'>
      <Col md={10} className="text-center">
        <h1 className="mb-4 hed2" style={{ color: "#46A4D9" }}>Our Health Packages</h1>
      </Col>
      
      <Col md={10} className="d-flex justify-content-center position-relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            loop: true,
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          style={{ width: '100%', padding: '0 40px' }}
        >
          {healthData.map((data, index) => (
            <SwiperSlide key={index}>
              <Link to={`/health-package/${data.slug}`} className="text-decoration-none">
                <Card className="h-100 shadow-sm border-light">
                  <Card.Img
                    variant="top"
                    src={data.image}
                    alt={data.title}
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="text-center" style={{ color: "#46A4D9" }}>
                        {data.title}
                      </Card.Title>
                      <Card.Text className="text-center mt-2">
                        {data.short_description}
                      </Card.Text>
                      <Card.Text className="text-center mt-2" style={{ color: "#00AC26", fontWeight: "bold" }}>
                        <span style={{ color: "#585454", textDecoration: "line-through", fontWeight: "normal" }}>
                          ₹{data.mrp}
                        </span> ₹{data.price}
                      </Card.Text>
                    </div>
                    <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst scan-button-sm m-0">Enquire Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
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