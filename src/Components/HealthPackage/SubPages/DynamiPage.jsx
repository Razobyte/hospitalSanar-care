
import { Row, Col, Button } from 'react-bootstrap';
import './Dynamic.css'; // Import the CSS file


export default function DynamicPage({ Image, url, mainheading, price, title, subheading, subprice, headingreviewsection }) {

  return (
    <>
      <Row className="dynamic-page d-flex align-items-center justify-content-center py-5">
        <Col md={5} xs={10} lg={5} className="image-container">
          <img src={Image} alt="img-main-card" />
        </Col>
        <Col md={5} xs={10} lg={5} className="content-container">
          <h1 className='hed2 fw-normal'>{mainheading}</h1>
          <h5>
            <span style={{ textDecoration: "line-through", fontWeight: "lighter", color: "#404040", opacity: '0.3' }}>{price}</span> {subprice}
          </h5>
          <h6 className='para'>{subheading}</h6>
          <div className='d-lg-block d-flex justify-content-center align-items-center'>
            <button className='mt-3'>Enquire Now</button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-lg-5">
        <Col md={8} lg={8} xs={10} className=' health-deatils'>
          <h1 className='hed1'>Health Test Details</h1>
          <h3 className="mb-lg-4 hed3">{headingreviewsection}</h3>
          <p className='para'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas vero dolore totam ex deleniti doloremque. Blanditiis, magnam, alias dolorum possimus eligendi quia ducimus nihil beatae a dolore officia veritatis libero, eaque accusamus? Quisquam, quas? Ab dolore possimus recusandae unde rerum praesentium, consequatur ducimus nesciunt. Officia itaque sed ipsa earum. Asperiores sed, quibusdam quia beatae voluptatibus accusamus porro commodi, ex laboriosam nihil officia fuga consectetur debitis iure laudantium recusandae, quaerat repellendus aperiam soluta eum quasi? Praesentium placeat soluta quae temporibus expedita eligendi voluptates necessitatibus atque eveniet aspernatur. Id quod suscipit atque quam voluptate fugiat eius vel, officia aliquam quaerat ipsa error!</p>

        </Col>
      </Row>



    </>
  )
}


