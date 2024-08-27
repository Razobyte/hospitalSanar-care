import { Row, Col } from 'react-bootstrap';

export default function CategorySection({ Heading1, paragraph, image, secpara, thirdpara }) {
  return (
    <>
      <Row className="d-md-flex justify-content-center align-items-center py-5 sectionContainerHealth mb-xl-5 mb-md-5 mb-lg-5">
        <Col md={11} lg={12} xl={12} xs={10} sm={10} className="d-md-flex justify-content-center py-lg-0 py-md-0 py-xl-0 py-3">
          <Col md={6}>
            <h1 className='hed1'>
              {Heading1}
            </h1>
            <div className='d-flex justify-content-center'>
              <p className='para pt-3'>
                {paragraph}
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='d-flex justify-content-center'>
              <img src={image} alt="image" className='img-fluid' />
            </div>
          </Col>
        </Col>
        <Col md={10} className='para' style={{ marginTop: '-55px' }}>
          <p>
            {secpara}
          </p>
          <p>
            {thirdpara}
          </p>
        </Col>
      </Row>
    </>
  );
}
