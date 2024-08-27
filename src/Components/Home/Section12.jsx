import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bgImg from '../../../public/Image/group.png';
import firstImg from '../../../public/Image/WEBSITE (1).png';
import secondImg from '../../../public/Image/Sectw4.png';
import thirdImg from '../../../public/Image/Sectw3.png';
import fourthImg from '../../../public/Image/Sectw2.png';

const TestBooking = () => {
  return (
    <Row className="py-xl-5 py-md-5 py-lg-5 py-0 justify-content-center align-items-center howtobookyourtest" style={{backgroundColor:"#f7f7f7"}}>
      <h1 className="hed1 text-center pb-lg-4 pb-xl-4 pb-md-4">How to Book Your Test</h1>
      <Col md={10} xl={10} lg={12}>
        <img src={bgImg} alt="" className="img-fluid" />
        <Row className="justify-content-center align-items-center">
          <Col md={3}>
            <div className="step-column">
              <img src={firstImg} alt="" className="img-fluid" />
              <div className="hed4 pt-3">
                Visit SanarCare <br/> Website
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="step-column">
              <img src={thirdImg} alt="" className="img-fluid" />
              <div className="hed4 pt-3">
                Select Your <br/>Test Type
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="step-column">
              <img src={fourthImg} alt="" className="img-fluid" />
              <div className="hed4 pt-3">
                Fill in your <br/> Details
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="step-column">
              <img src={secondImg} alt="" className="img-fluid" />
              <div className="hed4 pt-3">
                Confirm Your <br/> Appointment 
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TestBooking;