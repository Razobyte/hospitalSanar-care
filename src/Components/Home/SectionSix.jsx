import React from 'react';
import logoImg6 from '../../../public/Image/patnrs1.webp';
import logoImg2 from '../../../public/Image/FifthsecimgTwo.png';
import logoImg3 from '../../../public/Image/FifthsecimgThree.png';
import logoImg4 from '../../../public/Image/th.jpg';
import logoImg5 from '../../../public/Image/pathlab-removebg-preview.png';
import logoImg7 from '../../../public/Image/patnrs3.jpeg';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";


export default function SectionSix() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow:6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };
  return (
    <Row className='d-flex justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-3 px-0'>
      <Col md={10} sm={10} xs={10} lg={12} xl={11} className='px-0'>
        <h2 className='hed1 text-center '>
         Our Proud Partners
        </h2>
        <p className='text-center para pb-lg-4 pb-md-4 pb-xl-4'>
        Our Trusted Diagnostic Lab Partnerships
        </p>
        <Slider {...settings}>
          <div className='slick-slides-partnrs'>
            <img src={logoImg4} alt="Logo 1" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg2} alt="Logo 2" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg3} alt="Logo 3" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg6} alt="Logo 5" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg5} alt="Logo 5" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg7} alt="Logo 5" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg4} alt="Logo 1" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg2} alt="Logo 2" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg3} alt="Logo 3" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg6} alt="Logo 5" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg5} alt="Logo 5" className='img-fluid' />
          </div>
          <div className='slick-slides-partnrs'>
            <img src={logoImg7} alt="Logo 5" className='img-fluid' />
          </div>
        </Slider>
      </Col>
    </Row>
  );
}
