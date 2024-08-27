import ndsec1img from '../../../public/Image/2ndsecimg (1).png';
import ndsec2img from '../../../public/Image/2ndsecimg (2).png';
import ndsec3img from '../../../public/Image/2ndsecimg (3).png';
import ndsec4img from '../../../public/Image/2ndsecimg (4).png';
import ndsec5img from '../../../public/Image/2ndsecimg (5).png';
import ndsec6img from '../../../public/Image/2ndsecimg (6).png';
import ndsec7img from '../../../public/Image/2ndsecimg (7).png';
import ndsec8img from '../../../public/Image/2ndsecimg (8).png';
import ndsec9img from '../../../public/Image/2ndsecimg (9).png';
import ndsec10img from '../../../public/Image/2ndsecimg (10).png';
import ndsec11img from '../../../public/Image/2nsecimg11.png';
import { Row, Col } from 'react-bootstrap'

export default function SectionNd() {
  
    
    return (
        <>

            <Row className="d-flex justify-content-center align-items-center py-lg-5 py-3 sectionnsrow" >
                <Col md={10} xs={10} sm={10}>
                    <h1 className="hed1 pb-lg-3 pb-xl-3 pb-md-3 pb-2 text-center">Why Choose Sanar Care</h1>
                    <p className="para pb-lg-3 pb-3">Sanar Care all about giving you the best care possible when it comes to radiology. We're not just about scans; we're here to support you every step
                        of the way in your health journey. From the moment you walk in, we'll make sure you feel taken care of and provide you with the most advanced
                        services available. Your health is our priority, and we're committed to making sure you get the superior care you deserve.</p>
                    <div>
                        <div className='d-flex flex-col flex-sm-row  gap-lg-3 gap-md-3 gap-xl-3  gap-1 justify-content-center'>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec10img} alt="" className='img-fluid' />
                                <p className='para text-black text-center '>100% Vacinated
                                    Staff</p>
                            </div>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec9img} alt="" className='img-fluid ' />
                                <p className='para text-black text-center'>Hassle-free booking
                                    </p>
                            </div>
                            <div className='ndsectionwhysanarCare d-md-flex d-none'>
                                <img src={ndsec2img} alt="" className='img-fluid ' />
                                <p className=' para text-black text-center'>Home blood sample
                                    collection </p>

                            </div>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec8img} alt="" className='img-fluid ' />
                                <p className='para text-black text-center'>24X7 Supports</p>

                            </div>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec11img} alt="" className='img-fluid ' />
                                <p className='para text-black  text-center'>Cost-effective </p>

                            </div>
                        </div>
                        <div className='d-flex flex-col flex-sm-row   gap-lg-3 gap-md-3 gap-xl-3  gap-1 pt-3 justify-content-center'>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec3img} alt="" className='img-fluid' />
                                <p className=' para text-black text-center pt-2'>
                                    High
                                    Tech Machines
                                </p>

                            </div>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec4img} alt="" className='img-fluid ' />
                                <p className=' para text-black text-center pt-2 pt-md-0'> Pick & Drop Facility</p>

                            </div>
                            <div className='ndsectionwhysanarCare  d-md-flex d-none'>
                                <img src={ndsec5img} alt="" className='img-fluid '/>
                                <p className=' para text-black text-center'> NABL
                                    Accredited-Labs 
                                    </p>

                            </div>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec6img} alt="" className='img-fluid ' />
                                <p className=' para text-black text-center pt-1'>Trained & efficient
                                    staff </p>

                            </div>
                            <div className='ndsectionwhysanarCare'>
                                <img src={ndsec7img} alt="" className='img-fluid ' />
                                <p className='para text-black text-center pt-1'>Expert Radiologist</p>

                            </div>
                        </div>
                    </div>
                </Col>





            </Row>
        </>
    )
}