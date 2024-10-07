import React, { useState, useEffect } from 'react';
import { Button, Modal, Col } from 'react-bootstrap';
import { FaWpforms, FaTimes } from 'react-icons/fa';
import ContactForm from './Form';

export default function FooterFormModel() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isModalShown = sessionStorage.getItem('isModalShown');
    if (!isModalShown) {
      setShow(true);
      sessionStorage.setItem('isModalShown', 'true');
    }
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="footer-model-button">
        <Button onClick={handleShow}>
          <FaWpforms size={20} color="#fff" /> Contact With Us
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Col className="d-flex align-items-center justify-content-between text-center p-3" style={{ backgroundColor: "#3b7fbf" }}>
          <h3 className="hed3 text-white">Schedule Your Appointment Today !</h3>
          <Button variant="link" onClick={handleClose} className="p-0 text-left">
            <FaTimes size={25} color="#fff" />
          </Button>
        </Col>
        {/* Pass hideHeading={true} to hide the heading in the modal */}
        <ContactForm onSubmit={handleClose} hideHeading={true} className="p-2" />
      </Modal>
    </>
  );
}
