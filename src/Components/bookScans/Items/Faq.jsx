import React, { useEffect, useState } from 'react'
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Faq() {
    const [faqData, setFaqData] = useState([])
    const [expandedIndex, setExpandedIndex] = useState(null);
    const { category, item } = useParams();
    
    const api = import.meta.env.VITE_API_BASE_URL;
    const toggleAccordion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse if clicked again
        } else {
            setExpandedIndex(index); // Expand if not expanded
        }
    };
   
    useEffect(() => {
        if (category && item) {
          fetchFaqData();
        }
      }, [category, item]);

    const fetchFaqData = async () => {
        try {
            const formData = new FormData()
            formData.append('view', 'scan_detail')
            formData.append('slug',item)
            const res = await axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },

            })
            const faqdata = res.data.response.faq
            setFaqData(faqdata)

        }
        catch (error) {
            console.log('error message', error)

        }
    }

    return (
        <>

            <Row className='d-md-flex d-lg-flex d-xl-flex d-none justify-content-center align-items-center pt-lg-5 pt-md-5 pt-xl-5 pt-3 pb-lg-5 pb-xl-5 pb-md-5 pb-0'>
                <Col md={10} xs={12}>
                    <h1 className='text-center hed1 pb-lg-4 pb-md-4 pb-xl-4 pb-1'>Frequently Asked Questions</h1>

                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <div
                                className='card-header mb-3 d-flex justify-content-between px-lg-3 px-xl-3 px-md-2 rounded'
                                onClick={() => toggleAccordion(index)}
                                style={{ backgroundColor: index % 2 === 0 ? "#FFD0BB" : "#B3BDF1" }}
                            >
                                <h1 className='text-center hed3' style={{ color: "#585454" }}>
                                    {faq.question}
                                </h1>
                                <span className='icon'>
                                    {expandedIndex === index ? (
                                        <FaMinus className='p-1 rounded-5' size={25} style={{ border: "1px solid black", color: "#585454" }} />
                                    ) : (
                                        <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black", color: "#585454" }} />
                                    )}
                                </span>
                            </div>
                            {expandedIndex === index && (
                                <ul>
                                    <li>
                                        <span className='text-center para'>{faq.answer}</span>
                                        <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ))}
                </Col>
            </Row>

        </>
    )
}
