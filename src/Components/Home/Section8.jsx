import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Section8() {
  const navigate=useNavigate()
  const [datadoctors, setData] = useState([]);
  let api = import.meta.env.VITE_API_BASE_URL
  

  const DoctorsData = async () => {
    try {
      const res = await axios.post(api, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log('Full Response:', res);
      // console.log('Response data:', res.data);

      // Set the response data to state
      setData(res.data.response.doctors || []);
    } catch (error) {
      // console.error('Error fetching doctors data:', error);
    }
  };

  useEffect(() => {
    DoctorsData();
  }, []);

  return (
    <Row className="py-lg-5 py-md-5 py-xl-5 py-1 d-flex justify-content-center align-items-center">
      <Col lg={10} xs={12}>
        <h1 className="hed2 text-center pt-xl-0 pt-lg-0 pt-md-0 pt-3">Meet Our Expert Team of Doctors</h1>
        <p className="hed4 text-center pb-lg-4 pb-xl-4 pb-md-4 pb-0">Our Team of Diverse Specialists</p>
        <Swiper 
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 5,  // Space between slides for small screens
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,  // Space between slides for medium screens
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,  // Space between slides for large screens
            },
          }}
        >
          {datadoctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="doctor-card-wrapper d-flex justify-content-center align-items-center">
                <div className="doctor-card-container-main-page" onClick={()=>navigate('./our-doctors')}>
                  <img src={doctor.image || 'default-image-url'} alt={doctor.name} className='img-fluid ' />
                  <Card className="doctor-card-main-page pb-4">
                    <Card.Title>
                      <h3 className="doctor-name hed3 text-center pt-3 text-black">{doctor.name}</h3>
                    </Card.Title>
                    <Card.Text as="div" className="doctor-specialty para text-center mt-0 p-0 text-black">
                      {doctor.designation}
                    </Card.Text>
                  </Card>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  );
}
