import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";

export default function FaqHealthPackegs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };

  const faqs = [
    {
      question: "What are health packages?",
      answer: "Health packages are comprehensive sets of tests designed to evaluate your overall health or address specific health concerns. They include various blood tests and diagnostic assessments tailored to your needs."
    },
    {
      question: "How do I choose the right health package?",
      answer: "Choosing the right package depends on your health goals and any symptoms you may have. Our team can assist you in selecting the most appropriate option based on your individual circumstances."
    },
    {
      question: "How can I book a health package?",
      answer: "You can easily book a health package through our website by contacting us. We’ll guide you through the booking process to ensure a smooth experience."
    },
    {
      question: "How long will it take to get my test results?",
      answer: "Most tests are completed within 24 hours."
    },
    {
      question: "Are my test results confidential?",
      answer: "Yes, all test results are kept confidential. We adhere to strict privacy regulations to protect your personal health information."
    },
  ];

  return (
    <>
      <Row className='d-md-flex d-lg-flex d-xl-flex d-none justify-content-center align-items-center pt-lg-5 pt-md-5 pt-xl-5 pt-3 pb-lg-5 pb-xl-5 pb-md-5 pb-0'>
        <Col md={10} xs={12}>
          <h1 className='text-center hed1 pb-lg-4 pb-md-4 pb-xl-4 pb-1'>Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className='card-header mb-3 d-flex justify-content-md-between justify-content-xl-between justify-content-lg-between justify-content-center px-lg-3 px-xl-3 px-md-2' 
                onClick={() => toggleAccordion(index)} 
                style={{ backgroundColor: index % 2 === 0 ? "#FFD0BB" : "#B3BDF1" }}>
                <h1 className='text-center hed3' style={{ color: "#585454" }}>{faq.question}</h1>
                <span className='icon'>{expandedIndex === index ? <FaMinus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
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
  );
}
