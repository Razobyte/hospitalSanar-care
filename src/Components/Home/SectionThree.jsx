import { Row, Col, Card, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ultrasoundImg from '../../../public/Image/ultraSoun.jpg';
import xrayImg from '../../../public/Image/doctor-patient-watching-x-ray.jpg';
import ctScanImg from '../../../public/Image/FileCtScan.jpg';
import radi1 from '../.././../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';

export default function SectionThree() {
  const slidesData = [
    {
      img: xrayImg,
      title: "X-Ray",
      icon: radi1,
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      disprice:"₹900",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "Ultra Sound",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹496",
      disprice:"₹800",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "CT Scan",
      icon: radi2,
      center: "Prohealth Imaging Gurgaon",
      disprice:"₹700",
      price: " ₹600",
      buttonText: "Book Appointment",
    },
    {
      img: xrayImg,
      title: "PT SCAN",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      disprice:"₹600",
      price: "₹496",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "MRI Test",
      icon: radi4,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹700",
      disprice:"₹1100",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "ECG Test",
      icon: radi5,
      center: "Prohealth Imaging Gurgaon",
      price: "₹600",
      disprice:"₹800",
      buttonText: "Book Appointment",
    },
  ];
  const slidesPerView = window.innerWidth < 768 ? 2 : 4;
  return (
    <Row className="d-md-flex  d-lg-flex d-xl-flex d-none justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-2" >
      <Col md={10} xs={12}>
        <h1 className="hed1 text-center pb-xl-3 pb-lg-3 pb-md-3 pb-2 hover">Our Facilities</h1>
        <Row className="py-lg-3 py-md-3 py-xl-3 py-1  d-flex justify-content-center align-items-center">
          <Swiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false
             }}
           
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
             {slidesData.map((slide, index) => (
              <SwiperSlide key={index} >
                <Col md={12} xs={12} className="d-flex justify-content-center ">
                  <Card  className='scan-card-main '>
                    <img src={slide.img} alt={slide.title}  className='img-fluid scan-image' />
                    <Card.Body className='scan-card-main-body'>
                      <Card.Title className="text-center hed3" >{slide.title}</Card.Title>
                      <Card.Text className="text-center para" style={{color:"#46A4D9",fontSize:"18px",fontWeight:"600"}}>  
                      <span>Starting@</span><span style={{textDecoration:"line-through",color:'#46A4D9',fontSize:"16px" ,fontWeight:"500"}}>{slide.disprice}</span>
                      <span >
                        <span>{slide.price}</span></span></Card.Text>
                      <Card.Text className="text-center hed4">{slide.center}</Card.Text>
                    
                      <div className="text-center mt-4 mb-0 d-flex justify-content-center align-items-center">
                        <Button className="buttonfirst scan-button-sm m-0">{slide.buttonText}</Button>
                      </div>
                    </Card.Body>
                  
                  </Card>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
       
      </Col>
           
         
        
    </Row>
  );
}
