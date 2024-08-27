import { Row, Col, Button } from "react-bootstrap";
import doctorbnr from '../../../public/Image/sanarcare our doctor banner.jpg';
import FormLayout from "../ContactUs/Form";
import usericon from '../../../public/Image/Formicon1 (5).png';
import emailicon from '../../../public/Image/Formicon1 (4).png';
import phoneicon from '../../../public/Image/Formicon1 (3).png';
import messageicon from '../../../public/Image/Formicon1 (2).png';
import './Doctors.css'
import SectionFirst from "./SectionFirst";
import Section10 from '../Home/Section10';
import Section11 from '../Home/Section11';
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function Doctors() {
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const formData1 = [
        {
            type: 'text',
            placeholder: 'Name',
            required: true
        },

        {
            type: 'email',
            placeholder: 'Email',
            required: true
        },
        {
            type: 'number',
            placeholder: 'Phone',
            required: true
        },
        {
            type: 'textarea',
            placeholder: 'Message',
            required: true
        },
    ];
    const icons = {
        'text': usericon,
        'email': emailicon,
        'number': phoneicon,
        'textarea': messageicon,
    };
    const selectField1 = {
        type: 'select',
        placeholder: 'Subject',
        options: [
            { label: 'subject', value: 'disabled' },
            { label: 'General Enquiry', value: 'general_enquiry' },
            { label: 'Book an appointment', value: 'book_appointment' }
        ],
        required: true
    };
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center p-0">
                <img src={doctorbnr} className="img-fluid p-0" />
            </Row>
            {/* <Row className="d-md-flex d-none justify-content-evenly py-4 "
                style={{
                    backgroundImage: `url(${doctorbnr})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",

                }}>

                <Col md={6} lg={6} xl={6} className="d-flex justify-content-center pt-5">
                    <div className="doctos-banner-text pt-5">
                        <h1>Delivering Wellness</h1>
                        <p>With Our</p>
                        <h2>Team of Experties</h2>
                    </div>
                </Col>
                <Col md={5} lg={5} xl={5} className="d-flex justify-content-center align-items-center pt-3">
                    <FormLayout heading="Connect With Us" formData={formData1} form icons={icons} selectField={selectField1} />
                </Col>
            </Row> */}
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