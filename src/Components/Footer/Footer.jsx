import React from 'react';
import { Col, Row } from "react-bootstrap";
import logo from '../../../public/Image/sanar-care-logo.png';
import youTube from '../../../public/Image/youtube_1384060 1.png';
import Fb from '../../../public/Image/Fbicon.png';
import phone from '../../../public/Image/phoneIcon.png';
import mail from '../../../public/Image/mail.png';
import instr from './../../../public/Image/instagram (1) 1.png';

import './Footer.css';
import FooterFormModel from "../FooterFormModel";

export default function Footer() {
  return (
    <>
    {/* For desktop size */}
      
      <Row className="d-none justify-content-center align-items-center py-1">
        <Col md={12}>
          <h1 className="hed3 text-center pt-3">Scan's in Gurugram</h1>
          <div className="d-flex justify-content-center align-items-center gap-1">
            <p className="para text-left with-slash">Mri Scansc In Gurugram Sector48</p>
            <p className="para text-left with-slash">CT Scans In Gurugram Sector 55</p>
            <p className="para text-left with-slash">Pet Scans In Gurugram Sector 49</p>
            <p className="para text-left with-slash">Dexa Scans In Gurugram Sector 7</p>
            <p className="para text-left">Ecg Test In Gurugram Sector 22</p>
          </div>
        </Col>
      </Row>
      <Row className="d-md-flex d-xl-flex d-lg-flex d-none justify-content-center align-items-start gap-5 py-3" style={{ borderTop: "1px solid #c1c0c098" }}>
        <Col md={10} lg={10} xl={10} className="d-flex gap-5">
          <Col  md={4} xl={5} lg={5}>
            <div className="pt-2">
              <img src={logo} alt="" className="img-fluid" style={{ height: "50px", width: "200px" }} />
            </div>
          </Col>
          <Col md={3} xl={3} lg={3}>
            <h3 className="hed3 fw-bold pt-3" style={{ color: "#585454" }}>QUICK LINKS</h3>
          </Col>
          <Col md={3} xl={3} lg={3}>
            <h3 className="hed3 fw-bold pt-3" style={{ color: "#585454" }}>GET IN TOUCH</h3>
          </Col>
        </Col>
      </Row>
      <Row style={{ boxShadow: "0px 15px 20px 10px #00000040", backgroundColor: "#46A4D9" }} className="d-xl-flex d-lg-flex d-md-flex d-none justify-content-center py-5 align-items-center gap-5">
        <Col xl={10} md={10} lg={10} className="d-flex gap-5">
          <Col md={4} xl={5} lg={5}>
            <div>
              <p className="para text-white text-left">Sanar Care is a premier provider of radiology
                services dedicated to delivering precise
                diagnostics and compassionate care. With
                state-of-the-art technology and a team of
                experienced professionals, we ensure
                accurate and timely results for our patients.
                Our commitment extends beyond imaging;
                we prioritize patient comfort and well-being
                throughout their healthcare journey.
                Whether it's X-rays, CT scans, MRI scans, or
                ultrasound, Sanar Care offers comprehensive
                radiology services tailored to meet the
                individual needs of each patient, ensuring
                peace of mind and optimal outcomes.</p>
            </div>
          </Col>
          <Col md={4} xl={3} lg={3}>
            <div>
              <p className="para text-white text-left">Metropolis delhi <br />
                Mahajan Diagnostic Gurgaon <br />
                Mahajan Diagnostic Delhi <br />
                Rubik Imaging And Diagnostics <br />
                Indigo <br />
                Verizone <br />
                Nueclear</p>
            </div>
            <div>
              <h4 className="hed3 fw-bold text-white">FOLLOW US</h4>
              <div className="d-flex gap-3 cursor-pointer">
              <a href="https://www.facebook.com/p/SanarCare-100087633115742/?_rdr" target='_blank'><img src={Fb} alt="" className="img-fluid"  /></a>
          <a href='https://www.youtube.com/@Sanarcare' target='_blank'> <img src={youTube} alt="" className="img-fluid" /></a>
               <a href="https://www.instagram.com/sanar.care/?igsh=MTY2ZHlhOWRxdXQxag%3D%3D"  target='_blank'>  <img src={instr} alt="" className="img-fluid" /></a>
              </div>
            </div>
          </Col>
          <Col md={3} xl={3} lg={3}>
            <p className="text-white text-left para">
              <span className="d-flex gap-2 align-items-center pb-1">
                <img src={phone} alt="" className="img-fluid" />7042148149 (Delhi NCR)
              </span>
              <span className="d-flex gap-2 align-items-center pb-1">
                <img src={phone} alt="" className="img-fluid" />73031 99700 (Jaipur)
              </span>
              <span className="d-flex gap-2 align-items-center">
                <img src={mail} alt="" className="img-fluid" /> info@sanarcare.in
              </span>
            </p>
            <p className="fw-bold text-white text-left hed3">Locate Sanar Care</p>
            <p className="text-white text-left para">962, First Floor, Sector 7,
              Gurgaon, Haryana 122001
              Ground Times square
              Building, near Huda City
              Metro Station, Sushant Lok
              Phase I, Sector 43
              Gurugram, Haryana 122002
              165 P, Rd No D-13 A, Ardee
              City, Block D, Sector 52,
              Gurugram, Haryana 122003</p>
          </Col>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#46A4D9" }} className="d-lg-flex d-xl-flex d-md-flex d-none justify-content-center align-items-center pb-3">
        <Col className="d-flex justify-content-evenly align-items-center pt-3" style={{ borderTop: "1px solid white" }}>
          <p className="para text-white">Copyright 2023 | Sanar Care</p>
          <h6 className="para text-white">web-services by - <a href='https://razobyte.com' target='_blank' className="text-decoration-none text-black">razobyte.com</a></h6>
        </Col>
      </Row>
      <FooterFormModel />
     
  
      <Row style={{ boxShadow: "0px 15px 20px 10px #00000040", backgroundColor: "#46A4D9" }} className="d-flex d-md-none d-lg-none d-xl-none justify-content-center py-3 align-items-start gap-xl-5 gap-md-5 gap-lg-5 gap-0">
        <Col xs={11} md={10} lg={10} className=" d-block d-md-flex gap-xl-5 gap-lg-5 gap-md-5 gap-5">
          <Col md={4} xl={4} lg={4} xs={12}>
            <div className='d-flex justify-content-center flex-column'>
              <h1 className='hed4 d-md-none d-xl-none d-lg-none d-block text-light'>About Us</h1>
              <p className="para text-white text-left">Sanar Care is a premier provider of radiology
                services dedicated to delivering precise
                diagnostics and compassionate care. With
                state-of-the-art technology and a team of
                experienced professionals, we ensure
                accurate and timely results for our patients.
                Our commitment extends beyond imaging;
                we prioritize patient comfort and well-being
                throughout their healthcare journey.
                Whether it's X-rays, CT scans, MRI scans, or
                ultrasound, Sanar Care offers comprehensive
                radiology services tailored to meet the
                individual needs of each patient, ensuring
                peace of mind and optimal outcomes.</p>
            </div>
          </Col>
          <Col md={3} xl={3} lg={3}>  
            <div className='d-md-none d-flex col-xs-12 gap-4'>
            <div>
              <h1 className='hed4 d-md-flex d-xl-flex d-lg-flex d-block text-light'>Quick Links</h1>
              <p className="para text-white text-left">Metropolis delhi <br />
                Mahajan Diagnostic Gurgaon <br />
                Mahajan Diagnostic Delhi <br />
                Rubik Imaging And Diagnostics <br />
                Indigo <br />
                Verizone <br />
                Nueclear</p>
            </div>
            <div>
              <h4 className="hed4  text-white">Follow Us</h4>
              <div className="d-md-flex d-block gap-3 cursor-pointer">
                <img src={Fb} alt="" className="img-fluid" /> <br/>
                <img src={youTube} alt="" className="img-fluid" />
                <img src={instr} alt="" className="img-fluid" />
              </div>
            </div>
            <div>
            <div>
            <h1 className='hed4 d-md-none d-xl-none d-lg-none d-block text-light'>Get in Touch</h1>
            <p className="text-white text-left para">
              <span className="d-flex gap-2 align-items-center pb-1">
                <img src={phone} alt="" className="img-fluid" />7042148149 (Delhi NCR)
              </span>
              <span className="d-flex gap-2 align-items-center pb-1">
                <img src={phone} alt="" className="img-fluid" />73031 99700 (Jaipur)
              </span>
              <span className="d-flex gap-2 align-items-center">
                <img src={mail} alt="" className="img-fluid" /> info@sanarcare.in
              </span>
            </p>
            </div>
            </div>
            </div>
          </Col>
          <Col md={3} xl={3} lg={3} >
            <div className='d-md-flex d-none'>
            <h1 className='hed4 d-md-none d-xl-none d-lg-none d-block text-light'>Get in Touch</h1>
            <p className="text-white text-left para">
              <span className="d-flex gap-2 align-items-center pb-1">
                <img src={phone} alt="" className="img-fluid" />7042148149 (Delhi NCR)
              </span>
              <span className="d-flex gap-2 align-items-center pb-1">
                <img src={phone} alt="" className="img-fluid" />73031 99700 (Jaipur)
              </span>
              <span className="d-flex gap-2 align-items-center">
                <img src={mail} alt="" className="img-fluid" /> info@sanarcare.in
              </span>
            </p>
            </div>
           <div className='col-xs-12'>
           <p className="text-white text-left hed4">Locate Sanar Care</p>
            <p className="text-white text-left para">962, First Floor, Sector 7,
              Gurgaon, Haryana 122001
              Ground Times square
              Building, near Huda City
              Metro Station, Sushant Lok
              Phase I, Sector 43
              Gurugram, Haryana 122002
              165 P, Rd No D-13 A, Ardee
              City, Block D, Sector 52,
              Gurugram, Haryana 122003</p>
           </div>
          </Col>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#46A4D9" }} className=" d-flex d-lg-none d-md-none d-xl-none justify-content-center align-items-center pb-3">
        <Col className="d-flex justify-content-evenly align-items-center pt-3" style={{ borderTop: "1px solid white" }}>
          <p className="para text-white">Copyright 2023 | Sanar Care</p>
        </Col>
      </Row>
      
      <FooterFormModel />
    </>
  );
}
