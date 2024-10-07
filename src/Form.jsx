import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

export default function ContactForm({ data, hideHeading, className }) {
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const api = import.meta.env.VITE_API_BASE_URL;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    test_name: '',
    message: '',
    date_of_appointment: '',
    subject: '',
    remarks: '',
    check_point:true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setIsSubmitting(true);
    console.log("Form Data to Send: ", formData);

    const formDataToSend = new FormData();
    formDataToSend.append('view', 'inquiry');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', formData.subject); 
    formDataToSend.append('subject', formData.subject); 
    formDataToSend.append('test_name', formData.test_name);
    formDataToSend.append('date_of_appointment', formData.date_of_appointment);
    formDataToSend.append('remarks', formData.remarks);
    formDataToSend.append('check_point', formData.check_point ? '0' : '1');

    try {
      const response = await axios.post(api, formDataToSend, {
        
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      });

      if (response.status === 200) {
        swal({
          title: "Successfully Submitted",
          text: "Your form has been submitted successfully.",
          icon: "success",
          button: "OK",
        }).then(() => {
          setFormData({
            name: '',
            email: '',
            mobile: '',
            test_name: '',
            message: '',
            date_of_appointment: '',
            subject: '',
            remarks: '',
            check_point: false,
          });
          setValidated(false);
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      swal({
        title: "Submission Failed",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        button: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={`p-0 ${className}`}>
      <div className={`p-3 rounded shadow-sm ${className}`} style={{ backgroundColor: '#f8f9fa' }}>
        {!hideHeading && (
          <div style={{ backgroundColor: "#FF631A" }} className='py-3 rounded'>
            <h3 className="text-center hed3" style={{ color: "#FFFF", margin: 0 }}>{data}</h3>
          </div>
        )}
        
        <Form.Group controlId="formName" className="my-3">
          <Form.Control
            type="text"
            placeholder="Enter your name*"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="my-3">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMobile" className="my-3">
          <Form.Control
            type="tel"
            placeholder="Enter your mobile number*"
            required
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid mobile number.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTestName" className="my-3">
          <Form.Select
            required
            name="test_name"
            value={formData.test_name}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select your scan*</option>
            <option value="Knee X ray">Mri scan</option>
            <option value="Knee X ray">Open Mri</option>
            <option value="Knee X ray">PET Scan</option>
            <option value="Knee X ray">CT Scan</option>
            <option value="Knee X ray">UltraSounds</option>
            <option value="Knee X ray">Other</option>


          </Form.Select>
          <Form.Control.Feedback type="invalid">Please select a scan.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDate" className="my-3">
          <Form.Control
            type="date"
            name="date_of_appointment"
            value={formData.date_of_appointment}
            onChange={handleChange}
            placeholder="Date of Appointment"
          />
        </Form.Group>

        <Form.Group controlId="formSubject" className="my-3">
          <Form.Control
            type="text"
            placeholder="Enter subject*"
            required
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Please provide a subject.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage" className="my-3">
          <Form.Control
            as="textarea"
            placeholder="Message"
            rows={2}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formRemarks" className="my-3">
          <Form.Control
            as="textarea"
            placeholder="Specific remarks"
            rows={1}
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCheckPoint" className="my-3">
          <Form.Check
            type="checkbox"
            label="You hereby affirm & authorize SanarCare to process the personal data as per the T&C."
            name="check_point"
            checked={formData.check_point}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button 
            type="submit" 
            className="buttonfirst px-5" 
            style={{ backgroundColor: "#46A4D9" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>
    </Form>
  );
}