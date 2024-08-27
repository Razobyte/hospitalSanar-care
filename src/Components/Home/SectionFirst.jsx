import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import radi1 from '../../../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';
import radi6 from '../../../public/Image/First.png';
import eCG from '../../../public/Image/First4.png';
import radi8 from '../../../public/Image/first(3).png';
import pft from '../../../public/Image/pf.png';

export default function SectionFirst() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    return (
        <Row className="d-md-flex d-none justify-content-center align-items-center py-lg-5  py-md-5 py-xl-5 py-1"
            style={{ backgroundColor: "#ffff", zIndex: "1" }}>
            <h1 className="hed1 text-center pb-lg-0 pb-md-0 pb-xl-0 pb-0">Health Scans</h1>
            <Col md={10} lg={10} xl={10} xs={10} sm={11}>
                <Slider {...settings} className='d-flex align-items-center justify-content-center'>
                    <div className='radiologydiv d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #FFD0BB" }}>
                            <img src={radi1} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">X-Rays</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #FFCBF1" }}>
                            <img src={radi2} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">MRI test</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #99E6FF" }}>
                            <img src={radi3} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">PET Scans</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #B3BDF1" }}>
                            <img src={radi4} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">EEG Test</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #B3E6BE" }}>
                            <img src={eCG} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">ECG test</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #99E6FF" }}>
                            <img src={radi5} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">UltraSounds</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #FFD0BB" }}>
                            <img src={radi6} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">CBCT</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center ' >
                        <div className='radiology-data' style={{ border: "2px solid #FFCBF1" }}>
                            <img src={radi8} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">CT Scan</p>
                    </div>
                    <div className='radiologydiv  d-flex align-items-center flex-column text-center '>
                        <div className='radiology-data' style={{ border: "2px solid #B3BDF1" }}>
                            <img src={pft} className='rd-img img-fluid' />
                        </div>
                        <p className="para text-center text-black pt-3">PFT</p>
                    </div>
                </Slider>
            </Col>
        </Row>
    )
}
