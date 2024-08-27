import { Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import blog1img from '../../../public/Image/BLO (4).png';
import blog2img from '../../../public/Image/BLO (3).png';
import blog3img from '../../../public/Image/BLO (2).png';
import blog4img from '../../../public/Image/BLO (2).png';
import blog5img from '../../../public/Image/blog6.jpg';
import deatilsimg1 from '../../../public/Image/blogdeatilspageimg (1).png';
import deatilsimg2 from '../../../public/Image/blogdeatilspageimg (2).png';
import deatilsimg3 from '../../../public/Image/blogdeatilspageimg (3).png';
import deatilsimg4 from '../../../public/Image/blogdeatilspageimg (4).png';
import deatilsimg5 from '../../../public/Image/blogdeatilspageimg (5).png';
import Section11 from '../Home/Section11';
import Section10 from '../Home/Section10';



export default function BlogDetails6() {
    return (
        <>
            <Row className='py-3 d-flex flex-column'>
                <Col md={12} xs={10} className="px-0 d-flex flex-column flex-md-row justify-content-evenly" >
                    <div className='col-md-6 d-flex flex-column  col-xs-5 para'>
                        <p>Embarking on the path to preventative health and precise medical evaluation, a DEXA scan emerges as an essential ally in bone health investigation. But knowing the procedure’s health benefits is only part of the equation; understanding the costs involved is equally important. That’s exactly what we, at Sanar Care, aim to deliver – comprehensive healthcare services that transparently address pricing for DEXA scans. Let’s explore the factors impacting “DEXA scan cost” and estimate the potential financial investment for this valuable diagnostic step.</p>
                   
                        <div>
                            <img src={blog5img} alt="" className='img-fluid' />
                            <h3 className='hed3 pt-4' style={{ color: "#46A4D9" }}>DECODING A DEXA SCAN</h3>
                            <p className='para'>
                            Imagine a DEXA scan  as an ultra-precise beam, capable of sifting through the body to gauge the strength of your bones. It’s the preferred method for detecting osteoporosis and evaluating breakage risks. And what’s more, it’s swift, non-intrusive, and recognized as the most effective early detector of bone degradation</p>
                        </div>
                        <div>
                            <h3 className='hed3  pt-2 ' style={{ color: "#46A4D9" }}>FINDING THE BEST PLACE FOR YOUR SCAN</h3>
                            <p className='para '>
                            When the moment arrives to choose your DEXA scan, CT scan, MRI scan, Ultrasound Scan, or pathology lab in Gurgoan, there’s more to think about than just the cost. The quality of service, precision of the scan results, and the medical team’s expertise are just as critical. At Sanar Care, we’re dedicated to providing exceptional care with transparent pricing. Make sure to have a conversation with your healthcare provider and insurance company to understand the complete cost breakdown of your DEXA scan.If you’re after a place that’s got your back without making you break the bank, give Sanar Care a look. We’re big on quality service that’s easy on your wallet.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg1} alt="" className='img-fluid' />
                            <img src={deatilsimg5} alt="" className='img-fluid d-md-flex' />

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