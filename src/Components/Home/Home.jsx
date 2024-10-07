import { Row, Col,Carousel } from "react-bootstrap";
import './Home.css';
import SEctionFirst from "./SectionFirst";
import SectionNd from "./Sectionnd";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";
import { useState,useEffect } from "react";
import axios from "axios";
import Banner from "./bannerlayout";
export default function Home() {
  let api = import.meta.env.VITE_API_BASE_URL
 const [banners, setBanners] = useState([]);
    useEffect(() => {
      fetchBanners();
    }, []);
  
    const fetchBanners = async () => {
      try {
        const response = await axios.post(api, {}, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
          setBanners(response.data.response.banners)
      } 
      catch (error) {
        console.error("Error fetching banners:", error.message);
      }
    };
    
    return (
        <>
      <Row className="px-0">
          <Carousel className="px-0">
            {banners.map((banner, index) => (
              <Carousel.Item key={index}>
             <a href={banner.link}>
               <img
                  className="d-block w-100"
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                /></a>  
                <Carousel.Caption>
                  {/* <h3>Banner {index + 1}</h3> */}
                  {/* Add more caption details if needed */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
     
      </Row>     
            <Banner />
            <SectionThree />
            <Section12 />
            <SEctionFirst />
            <SectionNd />
           
         
    
            <SectionFive />
            <SectionFour />
           

            <Section9 />
         
     
      
            <Section8 />
            <SectionSix />
            <Section7 />
          
            <Section11 />

            <Section10 />
            <Section13 />
            <Row className="d-xl-flex d-none justify-content-center align-items-center">
        <Col md={12} className="fotter-first ">
          <h1 className="hed3 text-center pt-3 pb-1">Popular Radiology Scan's</h1>
          <div className="d-flex justify-content-center align-items-center gap-1">
            <p className="para text-left with-slash">Coronary CT Angiography In Gurugram</p>
            <p className="para text-left with-slash">X-Ray Neck Lateral View In Gurugram</p>
            <p className="para text-left with-slash">Color Doppler - Carotids In Gurugram</p>
            <p className="para text-left">Ultra Sound - Thyroid In Gurugram</p>
          </div>
        </Col>
      </Row>

        </>
    )
}
