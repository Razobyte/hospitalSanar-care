import {Row,Col} from 'react-bootstrap';
import bgimg7 from '../../../public/Image/Secseven.png'

export default function Section7(){
    return(
        <>
        <Row className='d-md-flex d-xl-flex d-lg-flex d-none justify-content-center align-items-center py-lg-5  py-md-5 py-xl-5 py-3  gap-xl-5 gap-lg-5 gap-md-5 gap-2'>
        <Col md={5} xl={5} lg={5}  xs={10} sm={5}> 
        <h1 className='hed1'>Sanar Care 
        Diagnostic Centre 
        in Gurgaon</h1>
        <h4 className='hed4'>Top-notch PET CT Scan, Pathology Services, and 
        DEXA Scan in Gurgaon.</h4>
        <p className='para '>Our busy lifestyle often leave little room for physical activity, leading to 
        health issues like heart diseases, cancer, mental health issues, diabetes, 
        and hormonal imbalances. But we can prevent these problems by 
        planning and getting regular health check-ups. Whether it's yearly or 
        monthly, these check-ups increase our chances of early detection and 
        treatment. How often you need them depends on your age, family      
        history, and if you smoke.</p>
        </Col>
        <Col md={5} xl={5} lg={5}  xs={10} sm={5} > 
        <img src= {bgimg7} alt="" className='img-fluid' />
        </Col>
        </Row>

        </>
    )
}