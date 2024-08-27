
import {Row,Col} from 'react-bootstrap';
import IMGEDIT from '../../../../public/Image/Group 2181.png';

export default function BookAppo({headingapp}){
    return(
        <>
         <Row className='d-flex justify-content-center align-items-center py-5 mb-5' style={{ backgroundColor: "#DEF0FF" }}>
        <Col md={10}>

          <h1 className='hed1 text-center pb-3'>{headingapp}</h1>
          <div className='d-flex justify-content-center gap-5'>
            <div>
              <h4 className='hed4' style={{ color: "#00C3E6" }}>We will reach out to
                <br />
                you to understand your <br />
                requirements. <br />
              </h4>

            </div>
            <div  >
              <h4 className='hed4' style={{ color: "#FF9D00" }}>Well book your test  <br />
                as per your preferred
                <br />
                date and time slot.</h4>

            </div>
          </div>
          <img src={IMGEDIT} alt="" className='img-fluid' />


          <div className='d-flex justify-content-evenly gap-5 align-items-center  pt-4'>

            <div>
              <h4 className='hed4 ps-5 text-center' style={{ color: "#FF3654" }}>Leave your name & <br />
                Phone number with us.</h4>

            </div>
            <div>
              <h4 className='hed4' style={{ color: "#00a0a8" }}>Lab details & Charges will  <br />
                be shared with you <br />
                over the call.</h4>

            </div>




          </div>
        </Col>

      </Row>
        </>
    )
}