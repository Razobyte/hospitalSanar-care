import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import usericon from '../../../public/Image/Formicon1 (5).png';
import emailicon from '../../../public/Image/Formicon1 (4).png';
import phoneicon from '../../../public/Image/Formicon1 (3).png';
import messageicon from '../../../public/Image/Formicon1 (2).png';
import { FaBookMedical } from "react-icons/fa";

export default function FormLayout() {
    let api = import.meta.env.VITE_API_BASE_URL
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
        subject: ''
    });
    const [formStatus, setFormStatus] = useState(null);

    const fetchContactData = async (data) => {
        try {
            const formData = new FormData();
            formData.append('view', 'inquiry');
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('mobile', data.mobile);
            formData.append('message', data.message);
            formData.append('subject', data.subject);

            const res = await axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            // Check response and set status
            if (res.data && res.data.msgcode === "1") {
                setFormStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: '',
                    subject: ''
                });
                
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submitted Successfully!',
                    text: res.data.message || 'Your inquiry has been received.',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                throw new Error(res.data.message || 'Submission failed');
            }
        } catch (error) {
            setFormStatus('error');
            // console.error('Error submitting form:', error);
            
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed!',
                text: error.message || 'Please try again later.',
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchContactData(formData);
    };

    const formDataFields = [
        { type: 'text', placeholder: 'Name', name: 'name', required: true, value: formData.name, icon: usericon },
        { type: 'email', placeholder: 'Email', name: 'email', required: true, value: formData.email, icon: emailicon },
        { type: 'number', placeholder: 'Phone', name: 'mobile', required: true, value: formData.mobile, icon: phoneicon },
        { type: 'textarea', placeholder: 'Message', name: 'message', required: true, value: formData.message, icon: messageicon },
    ];

    const selectField = {
        type: 'select',
        placeholder: 'Subject',
        name: 'subject',
        options: [
            { label: 'Select Subject', value: '' },
            { label: 'General Enquiry', value: 'general_enquiry' },
            { label: 'Book an Appointment', value: 'book_appointment' }
        ],
        required: true,
        value: formData.subject
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className='main-form-page'>
                <h1 className='hed3 text-center pt-xl-5 pt-md-5 pt-lg-5 pt-3'>Connect With Us</h1>
                {formDataFields.map((field, index) => (
                    <Form.Group key={index} className='d-flex justify-content-center align-items-center py-2'>
                        <img src={field.icon} alt={field.name} className='img-fluid img-form' />
                        <Form.Control
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                            as={field.type === 'textarea' ? 'textarea' : 'input'}
                            value={field.value}
                            onChange={handleChange}
                            className='form-control-main-page para'
                        />
                    </Form.Group>
                ))}
                {selectField && (
                    <Form.Group className='d-flex justify-content-center align-items-center pt-1'>
                        <FaBookMedical color='#FF851B' size={18} className='img-form' />
                        <Form.Control
                            as='select'
                            name={selectField.name}
                            placeholder={selectField.placeholder}
                            required={selectField.required}
                            value={selectField.value}
                            onChange={handleChange}
                            className='form-control-main-page para'
                        >
                            {selectField.options.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                <div className='w-100 d-flex justify-content-center align-items-center pt-3'>
                    <Button type="submit" variant='outline-dark' className='formbutton' style={{ backgroundColor: "#FF851B" }}>
                        Submit
                    </Button>
                </div>
            </Form>
        </>
    );
}