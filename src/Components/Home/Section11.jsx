import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sec11img from '../../../public/Image/sec114.png';
import sec2img from '../../../public/Image/sec113.png';
import sec3img from '../../../public/Image/sec112.png';
import thumbimg from '../../../public/Image/thumb.png';
import IMG1 from '../../../public/Image/test.png';
import '../home/Home.css'

export default function Section11() {
  const testimonials = [
    {
      id: 0,
      image: sec11img,
      name: 'Laxman Dang',
      quote: 'I recommend you to select Sanar Care while booking any test. It gives you a very huge discount and you may save your money.',
    },
    {
      id: 1,
      image: sec2img,
      name: 'Naman Wasan',
      quote: "I'm really impressed with how this amazing platform makes availing any medical service required a convenient and a hassle free process. I would strongly recommend for any Diagnostic lab in gurgaon!",
    },
    {
      id: 2,
      image: sec11img,
      name: 'Vinay Kalra',
      quote: 'Great service SANAR CARE-  Diagnostic and Pathology Lab in Gurgaon',
    },
    {
      id: 3,
      image: sec11img,
      name: 'Nikhil Dang',
      quote: 'Thank you so much SANAR CARE-  Diagnostic and Pathology Lab in  Gurgaon, I do really appreciate your services and timing.Thank you!',
    },
    {
      id: 4,
      image: sec2img,
      name: 'Navdeep Kaur',
      quote: "Its really amazing platform of providing the facilities in such a fantabulous manner. I'm so happy with the service, I would love to recommend this to each and everyone.",
    },
    {
      id: 5,
      image: sec3img,
      name: 'Laxmi Kalra',
      quote: 'Such a nice experience.Higly recommended for all the blood tests, CT Scan and MRI in gurgaon.',
    },
  ];

  return (
    <Row className="section11-container">
      <h1 className='hed1 text-center text-white pt-lg-5 pt-md-5 pt-xl-5 pt-3 pb-xl-4 pb-lg-4 pb-md-4 py-lg-0 py-0 pb-0'>Patient Testimonials</h1>
      <Col md={5} xs={8} lg={5} xl={5} xxl={5} className='d-xl-block d-none'>
        <h3 className="hed3 text-white text-center">
          Hear from our customers about their experiences with Sanar Care's services. We value feedback regarding their visits to our labs.
        </h3>
        <img src={IMG1} alt="" className='img-fluid'/>
      </Col>
      <Col md={5} xs={5} lg={5} xl={5} xxl={5}> 
        <div className="swiper-container mb-lg-5 mb-md-5 mb-xl-5 mb-xxl-5 mb-0">
          <Swiper
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
              1400:{
                slidesPerView:3,
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="d-flex justify-content-center  mb-lg-5 mb-md-5 mb-xl-5 mb-xxl-5 mb-0">
                <Card className="testimonial-card">
                  <div style={{ position: "relative" }}>
                    <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />
                  </div>
                  <div style={{ position: "absolute", top: "170px" }}>
                    <img
                      src={thumbimg}
                      alt=""
                      className="img-fluid"
                      style={{ backgroundColor: "#46A4D9", borderRadius: "50%", padding: "6px" }}
                    />
                  </div>
                  <Card.Body>
                    <h4 className="hed3" style={{ color: "#585454" }}>
                      {testimonial.name}
                    </h4>
                    <p className="para">{testimonial.quote}</p>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
    </Row>
  );
}
