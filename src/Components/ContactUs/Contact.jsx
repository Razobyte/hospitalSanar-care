
import { Row, Col} from 'react-bootstrap';
import bannerPage from '../../../public/Image/ContactBanner.png';
import { FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { CgMail } from 'react-icons/cg';
import ContactForm from '../../Form';
import '../home/Home.css'
export default function Contact() {
    
    return (
        <>
            {/* Banner Section */}
            <Row className='px-0 d-flex justify-content-center align-items-center banner-contact'
             style={{ 
                backgroundImage: `url(${bannerPage})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                color: "#fff", 
                textAlign: "center", 
                padding: "2rem 0" 
            }}>
                <Col xs={12}>
                    <h1 className='display-sm-4 text-white fw-sm-bold  fw-semibold ms-sm-0 ms-5'>Get in Touch</h1>
                    <p className='para text-white d-sm-block d-none'>We're here to help and answer any questions you might have.</p>
                </Col>
            </Row>

            <Row className='py-sm-5  py-2 justify-content-center align-items-center'>
                <h1 className='hed1 text-center pb-sm-5 pb-2'>Find Us Near You</h1>
                <Col xl={12} lg={12} xxl={12} className='d-flex flex-sm-row flex-column justify-content-center align-items-center gap-5'>
                    <div className=' col-md-6 d-sm-flex d-none'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.634361038108!2d77.0756377752824!3d28.460436575759076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e86fe8d3d7%3A0xbbecdbff8df2ebcf!2sTime%20Square%20Building!5e0!3m2!1sen!2sin!4v1715851716572!5m2!1sen!2sin"
                            width="100%"
                            height="530"
                            style={{ border: 0, borderRadius: "10px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className='col-md-4 '>
                  <ContactForm data="Schedule Your Appointment Today !" className="border"/>
                  
                 
                       
                    </div>
                </Col>
            </Row>

            <Row className='py-sm-5 py-3 text-center justify-content-center align-items-center'>
    <Col xl={8} lg={8} md={8}>
        <div className='d-flex gap-sm-3 gap-2'>
            <div className='shadow p-sm-4 p-1 col-md-4 col-xl-4'>
                <FaMapMarkerAlt size={40} color="#FF631A" />
                <h4 className='mt-3 hed3' style={{color:"#46A4D9"}}>Our Location</h4>
                <p className='para'>962, First Floor, Sector 7, Gurgaon, Haryana 122001</p>
            </div>
            <div className='shadow p-sm-4 p-2 col-md-4 col-xl-4'>
                <FaPhoneAlt size={40} color="#FF631A" />
                <h4 className='mt-3 hed3' style={{color:"#46A4D9"}}>Call Us</h4>
                <p className='para'>
                    <a href="tel:+917042148149" style={{ textDecoration: 'none', color: 'inherit' }}>
                        7042148149
                    </a>
                </p>
            </div>
            <div className='shadow p-sm-4 p-2 col-md-4 col-xl-4'>
                <CgMail size={50} color="#FF631A" />
                <h4 className='mt-3 hed3' style={{color:"#46A4D9"}}>Email Us</h4>
                <p className='para'>
                    <a href="mailto:info@sanarcare.in" style={{ textDecoration: 'none', color: 'inherit' }}>
                        info@sanarcare.in
                    </a>
                </p>
            </div>
        </div>
    </Col>
</Row>


            
        </>
    );
}
