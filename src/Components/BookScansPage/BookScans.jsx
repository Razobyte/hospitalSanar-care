import banner from '../../../public/Image/sanar care scans.png';
import { Row, Col, Button, Card, CardBody } from 'react-bootstrap';
import IMG from '../../../public/Image/scanPage (1).png';
import IMG1 from '../../../public/Image/scanPage (2).png';
import IMG2 from '../../../public/Image/scanPage (3).png';
import IMG3 from '../../../public/Image/scanPage (4).png';
import IMG4 from '../../../public/Image/scanPage (5).png';
import IMG5 from '../../../public/Image/scanPage (6).png';
import Section10 from '../Home/Section10';
import radi1 from '../.././../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import ultrasoundImg from '../../../public/Image/ultraSoun.jpg'
import xrayImg from '../../../public/Image/doctor-patient-watching-x-ray.jpg';
import ctScanImg from '../../../public/Image/FileCtScan.jpg';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';
import '../Home/Home.css'



import { useState } from 'react';
import BookAppo from './Category/BookAppointment';
import Digital from './Category/Digital';

export default function BookScans() {
  const [displayCount, setDisplayCount] = useState(6);

  const scansData = [
    {
      img: xrayImg,
      title: "X-Ray",
      icon: radi1,
      disprice: "₹600",
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "Ultra Sound",
      icon: radi3,
      disprice: "₹800",
      center: "Prohealth Imaging Gurgaon",
      price: " ₹496",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "CT Scan",
      icon: radi2,
      disprice: "₹1600",
      center: "Prohealth Imaging Gurgaon",
      price: " ₹600",
      buttonText: "Book Appointment",
    },
    {
      img: xrayImg,
      title: "PT SCAN",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      disprice: "₹1100",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "MRI Test",
      icon: radi4,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹700",
      disprice: "₹900",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "ECG Test",
      icon: radi5,
      center: "Prohealth Imaging Gurgaon",
      price: "₹600",
      disprice: "₹500",
      buttonText: "Book Appointment",
    },
    {
      img: xrayImg,
      title: "X-Ray",
      icon: radi1,
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      disprice: "₹600",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "Ultra Sound",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹496",
      disprice: "₹650",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "CT Scan",
      icon: radi2,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹600",
      disprice: "₹800",
      buttonText: "Book Appointment",
    },
    {
      img: xrayImg,
      title: "PT SCAN",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      disprice: "₹1000",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "MRI Test",
      icon: radi4,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹700",
      disprice: "₹900",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "ECG Test",
      icon: radi5,
      center: "Prohealth Imaging Gurgaon",
      price: "₹600",
      disprice: "₹2600",
      buttonText: "Book Appointment",
    },
    // Add more scans here if needed
  ];
  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 3); // Increase the count by 6 when the user clicks "View More Scans"
  };
  return (
    <>
      <Row className='d-block d-md-none'>
        <img src={banner} alt="" className='img-fluid p-0' />

        <h1 className='hed1  bannertext'>Book <span className='hed1' style={{ color: '#46A4D9' }} >Your </span> <span className="hed1" style={{ color: "#FF631A", }}>Scans</span>
        </h1>
      </Row>
      <Row
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Use 'cover' for responsive background image
          backgroundPosition: "center",
          overflow: "visible",
        }}
        className="d-xl-flex d-none align-items-center"
      >
        <Col className="p-0 col-md-6 col-sm-12 ps-5"> {/* Adjusted column sizes for responsiveness */}
        <div className="pt-2">
  <div>
    <span className="hed1">We're</span> <span className='hed2' style={{ color: '#46A4D9' }}>Commited to</span>
    <div>
      <div>
        <span className="hed1 " style={{ color: '#46A4D9' }}>empowering</span>  <span className="hed2">you with the</span>{" "}
      </div>

      <div>
        <span className="hed1" style={{ color: '#46A4D9' }}>Information  and </span> <span className='hed2' style={{ color: "#FF631A", }}> resources </span>
      </div>

      <div>
        <span className='hed1'>you need </span> <span className='hed2'>to</span>  <span className='hed1' style={{ color: "#FF631A", }}>take Control</span>     <span className='hed2' >of your</span>
      </div>
    </div>

    <div className="hed2" style={{ color: "#FF631A", }}>Health Journey</div>
  </div>
</div>
        </Col>
      </Row>
      <Row className="d-md-flex justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-1">
        <Col md={10} xs={12}>
          <h1 className="hed1 text-center pb-xl-4 pb-lg-4 pb-md-4 pb-0  pt-0 hover">Our Facilites</h1>
          <Row className="py-lg-3 py-md-3 py-xl-3 py-0 d-flex justify-content-center align-items-center">
            {scansData.slice(0, displayCount).map((slide, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center">
                <Card className='scan-card-main my-lg-4 my-md-4 my-xl-4 my-xxl-4 my-1'>
                  <img src={slide.img} alt={slide.title} className='img-fluid scan-image' />
                  <Card.Body className='scan-card-main-body'>
                    <Card.Title className="text-center hed3">{slide.title}</Card.Title>
                    <Card.Text className="text-center para" style={{ color: "#46A4D9", fontSize: "18px", fontWeight: "600" }}>
                      <span>Starting@</span><span style={{ textDecoration: "line-through", color: '#46A4D9', fontSize: "16px", fontWeight: "500" }}>{slide.disprice}</span>
                      <span >
                        <span>{slide.price}</span></span></Card.Text>
                    <div className="text-center mt-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst scan-button-sm">{slide.buttonText}</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {displayCount < scansData.length && ( // Show Load More button if there are more cards to load
            <div className="text-center mt-lg-1  mt-xl-1 mt-md-1 mt-3 d-flex justify-content-center align-items-center">
              <Button onClick={handleLoadMore} className='buttonfirst'>Load More</Button>
            </div>
          )}
        </Col>
      </Row>


      <Row className='d-flex justify-content-center align-items-center pb-lg-5 pb-xl-5 pb-md-5 pb-2'>
        <Col md={10}>
          <h1 className='hed1 text-center pb-lg-4 pb-xl-4 pb-md-4 pb-3'>Sanar Care Scans</h1>
          <p className='text-center para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </Col>
      </Row>
      <BookAppo headingapp="How to Book An Appointment"/>

     
     

      <Row className='d-flex justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-3'>
        <Col md={10} xs={10}>
          <h1 className='hed1 text-center'>Why Sanar Care Scans</h1>
          <div className='d-flex justify-content-center align-items-center gap-lg-5 gap-xl-5 gap-md-5 gap-3 py-lg-5 py-xl-5 py-md-5 py-3'>
            <div className='scan-main-page-div d-md-flex d-none'>
              <img src={IMG5} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>7+ Years Experience Diagnostic Services</p>

            </div>
            <div className='scan-main-page-div'>
              <img src={IMG4} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>20 Lakh Satisfied Customers & Counting</p>

            </div>
            <div className='scan-main-page-div'>
              <img src={IMG3} alt="" className='img-fluid' style={{ width: "120px" }} />
              <p className='hed4 text-center pt-1'>Honest Pricing of Customers</p>

            </div>

          </div>
          <div className='d-flex justify-content-center align-items-center gap-lg-5 gap-xl-5 gap-md-5 gap-3'>
            <div className='scan-main-page-div d-md-flex d-none'>
              <img src={IMG} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>Experienced & Dedicated Specialists</p>

            </div>
            <div className='scan-main-page-div'>
              <img src={IMG1} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>350+ Diagnostic Centers  Across 30+ Cities</p>

            </div>
            <div className='scan-main-page-div'>
              <img src={IMG2} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-1'>3-Layer  COVID Safe Labs & Centers</p>
            </div>

          </div>
        </Col>
      </Row>
   
      <Section10 />
      <Digital/>

     



    </>
  )
}