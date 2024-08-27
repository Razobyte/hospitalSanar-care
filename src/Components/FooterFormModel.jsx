import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { FaWpforms, FaTimes } from 'react-icons/fa';
import swal from 'sweetalert';

export default function FooterFormModel() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // Prevent default form submission
      // Show success alert
      swal({
        title: "Successfully Submitted",
        text: "Your form has been submitted successfully.",
        icon: "success",
        button: "OK",
      }).then(() => {
        // Close the modal after the alert is closed
        handleClose();
      });
    }
    setValidated(true);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setValidated(false); // Reset validation state on close
  };

  return (
    <>
      <div className="footer-model-button" >
        <Button onClick={handleShow}>
          <FaWpforms size={20} color='#fff' /> Contact With Us
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-container" >
          <Col className='d-flex align-items-center justify-content-evenly text-center p-3' style={{ backgroundColor: "#3b7fbf" }} >
            <h3 className='hed3 text-white text-center'>Contact Our Lab Experts</h3>
            <Form.Control.Feedback type="invalid">You must choose an option.</Form.Control.Feedback>
            <Button variant="link" onClick={handleClose} className="p-0 text-left">
              <FaTimes size={25} color='#fff' />
            </Button>
          </Col>
          <div className='p-3'>
            <Form.Group controlId="formName" className='mt-2 mb-3 form-group' style={{ backgroundColor: "#fff" }}>
              <Form.Control type="text" placeholder="Enter your name*" required className='para' />
              <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMobile" className='mb-3'>
              <Form.Control type="tel" placeholder="Enter your mobile number*" required className='para' />
              <Form.Control.Feedback type="invalid">Please provide a valid mobile number.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formScans" className='mb-3 para'>
              <Form.Control as="select" required className='para'>
                <option value="" className='para'>Select your scans*</option>
                <option value="scan1">Mri Scan</option>
                <option value="scan2">Ct Scan</option>
                <option value="scan3">X-Ray</option>
                <option value="scan4">BMT</option>
                <option value="scan5">UltraSounds</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">Please select a scan.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMobile" className='mb-3 '>
              <Form.Control type="file" placeholder="upload your scan here*" required 
              className='para' />
              <Form.Control.Feedback type="invalid">upload your scan prescreption</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDate" className='mb-3'>
              <Form.Label className='para'>Enter the date</Form.Label>
              <Form.Control
                type="date"
                className='para'
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className='mb-3  d-flex'>
              <Form.Control
                as="textarea"
                placeholder="Enter your Test Requirments"
                rows={2}
                className='para'
              // adjust maxWidth as needed
              />
            </Form.Group>


            <Form.Group controlId="formCheckbox " className='para my-3' style={{ fontSize: "14px", fontWeight: "400" }}>
              <Form.Check
                type="checkbox"
                label="You hereby a firm & authorise Healthians to process the personal data as per the T&C."
                required
                className='d-flex gap-2'
              />
              <Form.Control.Feedback type="invalid" className='hed4'>You must agree before submitting.</Form.Control.Feedback>
            </Form.Group>
            <div className='footer-form-button my-3'>
              <Button type="submit" className='buttonfirst'>Submit</Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
