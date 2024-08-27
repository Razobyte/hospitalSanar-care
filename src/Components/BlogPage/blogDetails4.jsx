import { Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import blog1img from '../../../public/Image/BLO (4).png';
import blog2img from '../../../public/Image/BLO (3).png';
import blog3img from '../../../public/Image/BLO (2).png';
import blog4img from '../../../public/Image/BLO (2).png';
import deatilsimg1 from '../../../public/Image/blogdeatilspageimg (1).png';
import deatilsimg2 from '../../../public/Image/blogdeatilspageimg (2).png';
import deatilsimg3 from '../../../public/Image/blogdeatilspageimg (3).png';
import deatilsimg4 from '../../../public/Image/blog4.jpg';
import deatilsimg5 from '../../../public/Image/blogdeatilspageimg (5).png';
import Section11 from '../Home/Section11';
import Section10 from '../Home/Section10';



export default function BlogDetails4() {
    return (
        <>
            <Row className='py-3 d-flex flex-column'>
                <Col md={12} xs={10} className="px-0 d-flex flex-column flex-md-row justify-content-evenly" >
                    <div className='col-md-6 d-flex flex-column  col-xs-5 para'>
                        <p>In an era where technological innovation is paramount, healthcare stands on the brink of a revolution, and at the heart of this transformation is artificial intelligence (AI). Sanar care embraces this change, merging the timeless virtues of empathy and care with the precision of AI. We are not just participants in this new wave of medical evolution; we are the architects and advocates, pioneering a future where technology and human touch converge to offer an unmatched caliber of healthcare.</p>
                   
                        <div>
                            <img src={deatilsimg4} alt="" className='img-fluid' />
                            <h3 className='hed3 pt-4' style={{ color: "#46A4D9" }}>THE IMPERATIVE INTEGRATION OF AI IN ULTRASOUND DIAGNOSTICS</h3>
                            <p className='para'>
                            The realm of ultrasound price in Gurgaon imaging is one that has consistently provided safe and multifaceted diagnostic options. However, classical methodologies of ultrasound operation are hampered by their heavy reliance on the skill and experience of the sonographer. In this context, artificial intelligence emerges as a pivotal innovation that drastically shifts the paradigm of ultrasound diagnostics.</p>
                        </div>
                        <div>
                            <h3 className='hed3  pt-2 ' style={{ color: "#46A4D9" }}>GURGAON: EMERGING HUB FOR AI-ENHANCED DIAGNOSTICS</h3>
                            <p className='para '>
                            In the technologically burgeoning city of Gurgaon, the inception of AI into medical imaging signifies a monumental shift. As health informatics advances, AI is pivotal in offering speedy and accurate diagnostic capabilities, a critical step towards individualized healthcare. The implementation of AI within ultrasound procedures unlocks the detection of intricate details that traditionally evade human analysis, thus amplifying diagnostic specificity.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg1} alt="" className='img-fluid' />
                            <img src={deatilsimg5} alt="" className='img-fluid d-md-flex' />

                        </div>
                        <div>
                            <h3 className='hed3  pt-3' style={{ color: "#46A4D9" }}>REVOLUTIONIZING MRI PROCEDURES WITH AI TECHNOLOGIES</h3>
                            <p className='para'>
                            The landscape of MRI diagnostics in Gurgaon is undergoing a transformative upgrade through the adoption of AI. Algorithms powered by AI tirelessly optimize and refine the process of imaging, considerably cutting down the duration of scans without compromising the integrity of the images. By embracing AI, organizations like Sanar Care are not merely following a trend but are elevating the standards of patient care.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg1} alt="" className='img-fluid' />
                            <img src={deatilsimg3} alt="" className='img-fluid' />

                        </div>
                        <div >
                            <h3 className='hed3  pt-3 pb-1' style={{ color: "#46A4D9" }}>STEP INTO THE FUTURE OF MEDICAL EXCELLENCE WITH SANAR CARE</h3>
                            <p className='para'>
                            As Gurgaon approaches a pivotal point in medical progression, it is the power of AI that is set to redefine the healthcare experience. Sanar Care is at the heart of this change, offering unparalleled accuracy in AI-powered ultrasound assessments and outstanding sharpness in AI-refined MRI scans. We are your gateway to next-generation medical diagnostics and care.</p>
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