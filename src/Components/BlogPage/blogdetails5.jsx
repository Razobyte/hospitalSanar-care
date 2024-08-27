import { Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import blog1img from '../../../public/Image/BLO (4).png';
import blog2img from '../../../public/Image/BLO (3).png';
import blog3img from '../../../public/Image/BLO (2).png';
import blog4img from '../../../public/Image/BLO (2).png';
import blog5img from '../../../public/Image/blog5.jpg';
import deatilsimg1 from '../../../public/Image/blogdeatilspageimg (1).png';
import deatilsimg2 from '../../../public/Image/blogdeatilspageimg (2).png';
import deatilsimg3 from '../../../public/Image/blogdeatilspageimg (3).png';
import deatilsimg4 from '../../../public/Image/blogdeatilspageimg (4).png';
import deatilsimg5 from '../../../public/Image/blogdeatilspageimg (5).png';
import Section11 from '../Home/Section11';
import Section10 from '../Home/Section10';



export default function BlogDetails5() {
    return (
        <>
            <Row className='py-3 d-flex flex-column'>
                <Col md={12} xs={10} className="px-0 d-flex flex-column flex-md-row justify-content-evenly" >
                    <div className='col-md-6 d-flex flex-column  col-xs-5 '>
                        <p className='para'>Delve into the inner workings of a foremost MRI facility, where advanced Magnetic Resonance Imaging (MRI) Center in Gurgoan is not just about technology—it’s about human connection. Sanar Care, a beacon of healthcare services, invites you on a journey through our day at the Gurgaon MRI center, where we blend caring service with cutting-edge diagnostics.</p>
                   
                        <div>
                            <img src={blog5img} alt="" className='img-fluid' />
                            <h3 className='hed3 pt-4' style={{ color: "#46A4D9" }}>
                            DAWN’S PREPARATIONS: SETTING THE TONE FOR EXCELLENCE
                            </h3>
                            <p className='para'>
                            With the break of dawn, the corridors of Sanar Care’s MRI center in Gurgoan stir with dedicated purpose. Technicians diligently calibrate our sophisticated machinery, ensuring that every component is in prime condition. This meticulous start reflects our holistic approach to patient care, emphasizing safety and comfort from the outset.</p>
                        </div>
                        <div>
                            <h3 className='hed3  pt-2 ' style={{ color: "#46A4D9" }}>A WARM WELCOME FOR OUR PATIENTS</h3>
                            <p className='para '>
                            Our reception area resonates with the warmth of our staff, welcoming patients with open arms. Recognizing the potential for nervousness, our specialists provide reassuring explanations about what to expect from an MRI in Gurgaon, fostering a sense of ease.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg1} alt="" className='img-fluid' />
                            <img src={deatilsimg5} alt="" className='img-fluid d-md-flex' />

                        </div>
                        <div>
                            <h3 className='hed3  pt-3' style={{ color: "#46A4D9" }}>THE NERVE CENTER: WHERE DIAGNOSTICS COME ALIVE</h3>
                            <p className='para'>
                            A heavy door opens to the nerve center of our operations—the control room. This is where our seasoned radiologists and technicians command the MRI process, their eyes fixed on high-resolution displays that reveal the body’s secrets, layer by layer, contributing valuable insights for medical diagnoses.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg4} alt="" className='img-fluid' />
                            <img src={deatilsimg3} alt="" className='img-fluid' />

                        </div>
                        <div >
                            <h3 className='hed3  pt-3 pb-1' style={{ color: "#46A4D9" }}>THE ART OF MEDICAL IMAGING</h3>
                            <p className='para'>
                            It’s a dance of expertise at Sanar Care, as radiologists partner with referring doctors. The images captured are not mere pictures; they are keys to understanding a patient’s health narrative, informing future care decisions.</p>
                            <img src={deatilsimg2} alt="" className='img-fluid' />
                        </div>

                    </div>
                    <div className='col-md-3  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                        <Form className="d-flex flex-column p-3">
                            <h4 className='hed3 px-2' style={{ color: "#585454" }}>Categories</h4>
                            <div className="position-relative">
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    placeholder='Search by Categories..'
                                    className='form-control-search-page'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>

                        </Form>
                        <div className='doctors-name'>
                            <ul>
                                <li>Pediatrics</li>
                                <li>Surgery</li>
                                <li>Vaccination</li>
                                <li>Diagnostics</li>
                                <li>Ultrasound</li>
                                <li>MRI Scan</li>
                                <li>CT Scan</li>
                                <li>X ray</li>
                                <li>DEXA Scan</li>
                                <li>ECG Scan</li>
                            </ul>
                        </div>
                        <Form className="d-flex flex-column p-3">
                            <h4 className='hed3 px-2' style={{ color: "#585454" }}>RECENT POSTS</h4>
                            <div className="position-relative">
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    placeholder='Search..'
                                    className='form-control-search-page'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>

                        </Form>
                        <div className='doctors-name px-4  d-flex flex-column justify-content-center align-items-center'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                                <div>
                                    <img src={blog1img} alt="" />
                                </div>
                                <p className='para fw-bold'>Revaccination against coronavirus
                                    will help to stay healthy</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div>
                                    <img src={blog4img} alt="" />
                                </div>
                                <p className='para fw-bold'>Prevention of colds with vitamins
                                    from natural products</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div>
                                    <img src={blog3img} alt="" />
                                </div>
                                <p className='para fw-bold'>Breathing disorders in sleep led
                                    to thedevelopment of heart
                                    arrhythmias</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div>
                                    <img src={blog2img} alt="" />
                                </div>
                                <p className='para fw-bold'>Doctors give advice on the
                                    frequency of tests and diagnostics</p>
                            </div>
                        </div>
                    </div>

                </Col>







            </Row>
            <br />
            <br />
            <br />


            <Section11 />
            <Section10 />


        </>
    )
}