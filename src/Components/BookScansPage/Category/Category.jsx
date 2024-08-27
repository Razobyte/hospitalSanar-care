import { Row, Col } from 'react-bootstrap';
import bannrScans from '../../../../public/Image/ultra sound.png';
import './Category.css';
import React, { useState, useEffect } from 'react';
import CategorySub from './CategorySub';
import Section11 from '../../Home/Section11';
import Section10 from '../../Home/Section10';
import CategorySection from './Section';
import BookAppo from './BookAppointment';
import Other from './Other';
import axios from 'axios';

export default function Category() {
  const [itemDetail, setItemDetail] = useState({});
  const [otherContent, setOtherContent] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const api = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const formData = new FormData();
        formData.append('view', 'scan_detail');
        formData.append('slug', 'knee-x-ray');
        
        const res = await axios.post(api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const responseData = res.data.response;
        setItemDetail(responseData.itemDetail || {});
        setOtherContent(responseData.labs.map(lab => lab.lab_name) || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItemDetail();
  }, []);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };

  return (
    <>
      <Row>
        <img src={bannrScans} alt="" className='px-0' />
      </Row>
      <CategorySub h4="Digital X-ray Lab Test in Gurugram" />
      <CategorySection
        Heading1={itemDetail.name}
        paragraph={itemDetail.description}
        image={itemDetail.image }
      />
      <Other otherHeading="Other Digital X-Ray" otherContent={otherContent} />
      <BookAppo headingapp="How To Book Digital X-Ray" />
    </>
  );
}
