import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import masterHealthImage from '../../../public/Image/Untitled-2.png';

const SectionFour = () => {
  return (
  
      <Row className="d-xl-flex d-lg-flex d-none  justify-content-center align-items-center sectionContainer">
        <Col md={10}  xs={10} sm={10} className=" d-md-flex align-items-center  justify-content-evenly gap-5 py-lg-5 py-md-5 py-xl-5 py-3">
        <div className='col-md-4 col-xs-4 col-lg-5 col-xl-5'>
          <h1  className='hed1'>
              Stay Ahead with Preventive Health Check-Up
            </h1>
            <div>
            <p className='para'>Our busy lifestyle often leave little room for physical activity, leading to health issues like heart diseases, cancer, mental health issues, diabetes, and hormonal imbalances. But we can prevent these problems by planning and getting regular health check-ups. Whether it's yearly or monthly, these check-ups increase our chances of early detection and treatment. How often you need them depends on your age, family history, and if you smoke.</p>
            </div>
          </div>
            <div className='col-md-4 col-xs-4 col-lg-5 col-xl-5 d-flex align-items-center justify-content-center' >
            <img src={masterHealthImage} alt="" className='img-fluid' />
            </div>
          
    
        </Col>
      </Row>
 
  );
};

export default SectionFour;
