import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";

export default function Section10() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };
  return (
    <>
      <Row className='d-md-flex d-lg-flex d-xl-flex d-none justify-content-center align-items-center pt-lg-5 pt-md-5 pt-xl-5 pt-3 pb-lg-5 pb-xl-5 pb-md-5 pb-0'>
        <Col md={10} xs={12} >
          <h1 className='text-center hed1 pb-lg-4 pb-md-4 pb-xl-4 pb-1'>Frequently Asked Questions</h1>
          <div className='card-header mb-3   d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(0)} style={{ backgroundColor: "#FFD0BB" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}> What makes Sanar Care the best diagnostic centre in Gurgaon?
            </h1>
            <span className='icon'>{expandedIndex === 0 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 0 && (
            <ul>
              <li>
                <span className='text-center para'>Sanar Care is widely recognized as the leading diagnostic centre in Gurgaon due to its state-of-the-art facilities, advanced technology, and highly experienced team of medical professionals. We offer a wide range of diagnostic services, including PET scans, PET-CT scans, DEXA scans, and pathology lab testing. Our commitment to accuracy, efficiency, and patient care sets us apart from the rest.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3 gap-5  px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(1)} style={{  backgroundColor: "#B3BDF1" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>How does a PET scan in Gurgaon at Sanar Care work?
            </h1>
            <span className='icon'>{expandedIndex === 1 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 1 && (
            <ul>
              <li>
                <span className='text-center para'>A PET scan at Sanar Care in Gurgaon utilizes a small amount of radioactive material to produce detailed images of the body's organs and tissues. This imaging technique helps detect various conditions, such as cancer, heart disease, and neurological disorders. Our PET scan procedure is safe, non-invasive, and performed by highly trained radiologists who ensure the utmost precision and patient comfort.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(2)} style={{ backgroundColor: "#99E6FF" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}> What is the difference between a PET scan and a PET-CT scan in Gurgaon?
            </h1>
            <span className='icon'>{expandedIndex === 2 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 2 && (
            <ul>
              <li>
                <span className='text-center para'>While both PET scans and PET-CT scans are valuable diagnostic tools, there is a slight difference between them. A PET scan primarily provides functional information about the body's organs and tissues, while a PET-CT scan combines the functional data from a PET scan with the anatomical information obtained from a CT scan. This combined approach offers a more comprehensive assessment of conditions, leading to more accurate diagnoses and treatment plans.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(3)} style={{ backgroundColor: "#B3BDF1" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>Where can I find a reliable pathology lab near me in Gurgaon?
            </h1>
            <span className='icon'>{expandedIndex === 3 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 3 && (
            <ul>
              <li>
                <span className='text-center para'>Sanar Care is your trusted destination for a pathology lab near you in Gurgaon. Our fully equipped pathology lab is staffed with skilled technicians and pathologists who perform a wide range of tests, including blood tests, urine tests, genetic testing, and more. We prioritize accuracy, efficiency, and quick turnaround time to ensure that you receive timely and reliable results for your diagnostic needs.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(4)} style={{ backgroundColor: "#B3E6BE" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>Are there any quality pathlabs near me in Gurgaon that offer affordable services?
            </h1>
            <span className='icon'>{expandedIndex === 4 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 4 && (
            <ul>
              <li>
                <span className='text-center para'>Sanar Care is known for offering high-quality pathology lab services at competitive prices in Gurgaon. We understand the importance of affordability without compromising on the accuracy and reliability of test results. Our transparent pricing policy ensures that you receive the best value for your money, making us a top choice for cost-effective diagnostic services in the region.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}

          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(5)} style={{ backgroundColor: "#FFD0BB" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>How much does a DEXA scan cost at   Sanar Care in Gurgaon? ?
            </h1>
            <span className='icon'>{expandedIndex === 5 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 5 && (
            <ul>
              <li>
                <span className='text-center para'>The cost of a DEXA scan at Sanar Care in Gurgaon depends on various factors, including the specific type of DEXA scan required and any additional services requested. However, we strive to offer competitive pricing without compromising on the quality of our services. For accurate and up-to-date information regarding DEXA scan costs, we recommend reaching out to our friendly staff who will provide you with the necessary details.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3  px-lg-3 px-xl-3 px-md-2' onClick={() => toggleAccordion(6)} style={{ backgroundColor: "#99E6FF" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>Does Sanar Care Diagnostic Centrein Gurgaon offer MRI scans?
            </h1>
            <span className='icon'>{expandedIndex === 6 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 6 && (
            <ul>
              <li>
                <span className='text-center para'>Yes, Sanar Care Diagnostic Centre is equipped with high-tech machines for MRI scans, among other diagnostic tests.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
        </Col>

      </Row>
    </>
  );
}
