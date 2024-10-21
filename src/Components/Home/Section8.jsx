import React, { useEffect, useState, useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import './Section13.css'; // Make sure this file contains the CSS for custom navigation

export default function Section8() {
  const navigate = useNavigate();
  const [datadoctors, setData] = useState([]);
  const api = import.meta.env.VITE_API_BASE_URL;

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const DoctorsData = async () => {
    try {
      const res = await axios.post(api, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(res.data.response.doctors || []);
    } catch (error) {
      console.error('Error fetching doctors data:', error);
    }
  };

  useEffect(() => {
    DoctorsData();
  }, []);

  return (
    <Row className="justify-content-center">
      <h1 className="text-center hed1 pb-sm-2 pb-3 pt-sm-0 pt-3">Meet Our Expert Team of Doctors</h1>
      <h4 className="hed4 text-center pb-lg-4 pb-xl-4 pb-md-4 pb-0">Our Team of Diverse Specialists</h4>
      <Col md={10} xs={10} className="position-relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
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
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400:{
              slidesPerView: 3,
              spaceBetween: 20,

            }

          }}
          className="pb-4"
        >
          {datadoctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <Card className="border-0 doctor-card-container-main-page
               text-center" onClick={() => navigate('./our-doctors')}>
                <img src={doctor.image} alt={doctor.name} className="doctor-image img-fluid" />
                <Card.Body>
                  <Card.Title className="hed4" style={{color:"#46A4D9"}}>{doctor.name}</Card.Title>
                  <Card.Text className="para">{doctor.designation}</Card.Text>
                </Card.Body>
              </Card>
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