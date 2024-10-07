import { Row, Col, Button } from "react-bootstrap";
import doctorbnr from '../../../public/Image/sanarcare our doctor banner.jpg';
import './Doctors.css'
import SectionFirst from "./SectionFirst";
import Section10 from '../home/Section10';
import Section11 from '../home/Section11';
export default function Doctors() {

  
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center p-0">
                <img src={doctorbnr} className="img-fluid p-0" />
            </Row>
            <SectionFirst />
            <Section11 />
            <Section10 />
            <Row className="d-xl-none d-lg-none d-flex justify-content-center align-items-center my-3">
                <Col md={12} xs={10} className="fotter-first " >
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