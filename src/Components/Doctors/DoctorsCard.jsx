import React, { useState } from 'react';
import { Card, Button, Accordion, Modal } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import './Doctors.css';
import wp from '../../../public/Image/whatsapp-icon-png.png';
import ContactForm from '../../Form';

const DoctorCard = ({ doctor }) => {
  const [showForm, setShowForm] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} color='#ff8f00' />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} color='#ff8f00' />);
      } else {
        stars.push(<FaRegStar key={i} color='#ff8f00' />);
      }
    }

    return stars;
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 d-flex flex-column align-items-center justify-content-center">
      <Card className='doctors-card d-flex flex-row align-items-center text-left p-0'>
        <Card.Img
          src={doctor.image || 'default-image.png'}
          className='img-fluid card-image-container'
          alt={doctor.name}
        />
        <Card.Body className='text-left ps-5'>
          <Card.Title>
            <h3 className='hed3'>{doctor.name}</h3>
          </Card.Title>
          <div className='p-0 m-0'>{renderStars(4)}</div> {/* You might want to add a rating field to your API */}
          <div className='p-0 m-0 des2 pt-1'>
            {doctor.desigination}, {doctor.hospital}
          </div>
          <div className='fw-normal exp pt-1'>
          <span className='fw-bold'>Experience</span> - {doctor.experience}
          </div>
          <div className='des pt-1'>
            <span className='fw-bold'>Designation</span> - {doctor.desigination}
          </div>
          <div className='hed4 pt-1'>{doctor.hospital}</div>
        </Card.Body>
        <div className='button-container d-lg-flex d-none flex-column align-items-center gap-1 pe-4 '>
          <div className='d-flex'>
            <Button className='mb-2 consult-now-btn py-2  bg-light' href="https://wa.me/7042148149" target="_blank">
              WhatsApp
              <img src={wp} alt="WhatsApp" className=' ms-2 img-fluid object-contain' style={{ height: "25px", maxWidth: "px" }} />
            </Button>
            
          </div>
          <Button variant="primary" onClick={openForm} className='py-2'>Book Appointment</Button>
        </div>
      </Card>

      <Modal show={showForm} onHide={closeForm} centered>
        <div className="custom-modal-content">
          <Button
            className="close-button position-relative top-5 left-0 mt-0 me-0"
            onClick={closeForm}
            variant="link"
          >
            <IoMdClose size={24} color='black' />
          </Button>
         <ContactForm data="Contact Us"/>
        </div>
      </Modal>

      <Accordion defaultActiveKey="0" className='mb-5 w-100'>
        <Accordion.Item eventKey="0" className="w-100">
          <Accordion.Header className='header-accordion'>
            <h2 className='text-lg hed4'>Doctor Profile</h2>
          </Accordion.Header>
          <Accordion.Body className='para' dangerouslySetInnerHTML={{ __html: doctor.profile_desc }} />
        </Accordion.Item>
        <div className="d-flex flex-column flex-lg-row">
          <Accordion.Item eventKey="1" className="flex-grow-1 flex-basis-0">
            <Accordion.Header>
              <h2 className='text-lg hed4'>Specialization</h2>
            </Accordion.Header>
            <Accordion.Body className='para' dangerouslySetInnerHTML={{ __html: doctor.specialization_desc }} />
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="flex-grow-1 flex-basis-0">
            <Accordion.Header>
              <h2 className='text-lg hed4'>Qualification</h2>
            </Accordion.Header>
            <Accordion.Body className='para' dangerouslySetInnerHTML={{ __html: doctor.qualification_desc }} />
          </Accordion.Item>
        </div>
      </Accordion>
    </div>
  );
};

export default DoctorCard;