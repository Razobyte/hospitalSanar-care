import Section13 from "../home/Section13";
import SectionFirst from "../home/SectionFirst";
import SectionThree from "../home/SectionThree";
import banner from '../../../public/Image/sanar care scans.png';
import { Row, Col } from "react-bootstrap";

export default function BookScans() {
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
            <SectionFirst />
            <SectionThree />
            <Section13 />
        </>
    )
}