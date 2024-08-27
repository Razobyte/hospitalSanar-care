import { Row, Col } from 'react-bootstrap';


export default function Other({ otherHeading, otherContent = [] }) {
    return (
        <Row className='d-flex justify-content-center align-items-center mb-5'>
            <Col md={10}>
                <h1 className='hed2 text-center pb-3 pt-3'>{otherHeading}</h1>
                <div className='otherlistitems gap-1 col-md-12 col-lg-12 col-xl-12 align-items-center justify-content-center'>
                    <ul className='flex-container'>
                        {otherContent.map((item, ind) => (
                            <li key={ind} className='text-center'>{item}</li>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    );
}
