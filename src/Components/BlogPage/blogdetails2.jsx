import { Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import blog1img from '../../../public/Image/BLO (4).png';
import blog2img from '../../../public/Image/BLO (3).png';
import blog3img from '../../../public/Image/BLO (2).png';
import blog4img from '../../../public/Image/BLO (2).png';
import deatilsimg1 from '../../../public/Image/blogdeatilspageimg (1).png';
import deatilsimg2 from '../../../public/Image/blogdeatilspageimg (2).png';
import deatilsimg3 from '../../../public/Image/blogdeatilspageimg (3).png';
import deatilsimg4 from '../../../public/Image/blogdeatilspageimg (4).png';
import deatilsimg5 from '../../../public/Image/blogdeatilspageimg (5).png';
import Section11 from '../Home/Section11';
import blog6img from '../../../public/Image/image 4 (4).png';
import Section10 from '../Home/Section10';



export default function BlogDetails2() {
    return (
        <>
            <Row className='py-3 d-flex flex-column'>
                <Col md={12} xs={10} className="px-0 d-flex flex-column flex-md-row justify-content-evenly" >
                    <div className='col-md-6 d-flex flex-column  col-xs-5'>
                        <div>
                            <img src={blog6img} alt="" className='img-fluid' />
                            <h3 className='hed3 pt-4' style={{ color: "#46A4D9" }}>UNVEILING THE BEST ULTRASOUND CENTERS PATIENT SATISFACTION RATES REVEALED</h3>
                            <p className='para'>
                            Selecting a premier ultrasound facility transcends mere convenience; it is about affirming the quality of care and establishing confidence in diagnostic procedures. For those on the hunt for a local “ultrasound center near me,” the level of patient satisfaction serves as a key benchmark for excellence. Sanar Care, a distinguished provider of healthcare services, shines in its delivery of patient-focused experiences and care</p>
                        </div>
                        <div>
                            <h3 className='hed3  pt-2 ' style={{ color: "#46A4D9" }}>TTHE SIGNIFICANCE OF EXCEPTIONAL ULTRASOUND PROCEDURES</h3>
                            <p className='para '>
                            In the realm of contemporary healthcare, ultrasound center near me imaging is a vital tool, delivering a harmless peek at the internal structures of the body. Essential for monitoring pregnancies, examining the cardiovascular system, and identifying a spectrum of medical conditions, ultrasound scans are a cornerstone of accurate medical assessments. The caliber of ultrasound procedures can greatly influence diagnostic accuracy and bolster patient assurance.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg1} alt="" className='img-fluid' />
                            <img src={deatilsimg5} alt="" className='img-fluid d-md-flex' />

                        </div>
                        <div>
                            <h3 className='hed3  pt-3' style={{ color: "#46A4D9" }}>LOCATING YOUR IDEAL ‘ULTRASOUND CENTER NEAR ME’</h3>
                            <p className='para'>
                            Uncovering a trusted ultrasound facility requires diligent investigation. Begin by scouting for local centers online, evaluating their patient reviews, and perusing feedback. Accreditation by esteemed healthcare organizations is another hallmark of a center’s commitment to excellence.</p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4 '>
                            <img src={deatilsimg4} alt="" className='img-fluid' />
                            <img src={deatilsimg3} alt="" className='img-fluid' />

                        </div>
                        <div >
                            <h3 className='hed3  pt-3 pb-1' style={{ color: "#46A4D9" }}>SANAR CARE: PIONEERING IN PATIENT-FOCUSED ULTRASOUND SOLUTIONS</h3>
                            <p className='para'>
                            Sanar Care distinguishes itself by not only meeting but surpassing patient anticipations. We value our patients by minimizing wait times and delivering expedient yet comprehensive services. Our dedication to superior quality is mirrored in our outstanding patient satisfaction metrics, placing us at the forefront of ultrasound services. </p>
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