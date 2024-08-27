import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function RemainCard({ ReaminCardData }) {
  const navigate=useNavigate()
  const routes = [
    '/firstcard',
    '/secondcard',
    '/thirdcard',
    '/fourthcard',
    '/fifthcard',
    '/sixthcard',
    '/sevencard',
    '/eightcard'
    // Add more routes as needed
  ];

  return (
    <Row className="d-flex justify-content-center align-items-center pb-5">
      <Col  md={8} lg={8}  xs={10} className="d-flex justify-content-center align-items-center flex-column">
      <h1 className='hed1'>Related Products</h1>
        <Row className='py-3'>
          {ReaminCardData.map((data, index) => (
            <Col key={index} md={4}  lg={4} xs={12} className='py-3 d-flex justify-content-center align-items-center flex-column'  onClick={() => navigate(routes[index])}
             >
              <div className='remaincard-div border'>
                <img src={data.img} alt="" className='img-fluid' />
                <h4 className='hed4 text-center pt-5 fw-bold' style={{ color: "#46A4D9" }}>{data.titile}</h4>
                <p className='para text-center'>{data.packages}</p>
                <p className='para text-center pt-1' style={{ color: "#00AC26", fontWeight: "800" }}>
                  <span style={{ color: "#585454", textDecoration: "line-through", fontWeight: "500" }}>₹8,655.00</span> {data.price}
                </p>
                <div className='d-flex justify-content-center align-items-center text-center'>
                  <Button className='buttonfirst mb-3'>Enquire Now</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
