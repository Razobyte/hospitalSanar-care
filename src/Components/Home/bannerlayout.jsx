import imgnew4 from '../../../public/Image/fornew1 (5).png';
import imgnew1 from '../../../public/Image/fornew1 (6).png';
import imgnew2 from '../../../public/Image/fornew1 (7).png';
import imgnew3 from '../../../public/Image/fornew1 (8).png';
import { Row,Col } from 'react-bootstrap'

export default function Banner() {
    return (
        <>
     <Row className="d-md-flex d-none justify-content-center align-items-center py-xl-5 py-md-5 py-lg-5 py-0">
  <Col xs={10} md={10} className="d-flex justify-content-center align-items-center text-center gap-4">
    {/* Content for first column */}
    <div className="for-new" style={{backgroundColor:"#FFCBF1"}} >
      <img src={imgnew3} alt="" className="img-fluid"/>
      <h4 className=" text-center">Find Your scans</h4>
      <p className="para text-center">Scan with expert.</p>
    </div>

    {/* Content for second column */}
    <div className=" for-new " style={{backgroundColor:"#99E6FF"}} >
      <img src={imgnew2} alt="" className="img-fluid"  />
      <h4 className="text-center ">Health Packages</h4>
      <p className="para text-center ">1000 problems 1 Solution.</p>
    </div>

    {/* Content for third column */}
    <div className=" for-new" style={{backgroundColor:"#B3E6BE"}}>
      <img src={imgnew1} alt="" className="img-fluid"  />
      <h4 className=" text-center ">Our Doctors</h4>
      <p className="para text-center ">Experienced radiologist  Services</p>
    </div>
    {/* Content for fourth column */}
    <div className="  for-new"  style={{backgroundColor:"#B3BDF1"}}>
      <img src={imgnew4} alt="" className="img-fluid"  />
      <h4 className="text-center">Fill Enquiry Form</h4>
      <p className="para text-center ">Get Personalized Assistance.</p>
    </div>
  </Col>
</Row>
<Row className="d-md-none d-flex justify-content-center align-items-center py-0">
  <h1 className='hed1 text-center pt-4'>Test By Condition</h1>
  <Col xs={10} sm={10} className="d-flex">
    <div className="for-new">
      <img src={imgnew3} alt="" className="img-fluid"/>
      <h4 className=" text-center">Find Your scans</h4>
    </div>
    <div className=" for-new ">
      <img src={imgnew2} alt="" className="img-fluid"  />
      <h4 className="text-center ">Health Packages</h4>
    </div>

    {/* Content for third column */}
    <div className="for-new" >
      <img src={imgnew1} alt="" className="img-fluid"  />
      <h4 className=" text-center ">Our  Best Doctors</h4>
   
    </div>
    {/* Content for fourth column */}
    <div className="  for-new" >
      <img src={imgnew4} alt="" className="img-fluid"  />
      <h4 className="text-center">Fill Enquiry Form</h4>
 
    </div>
  </Col>
</Row>

        </>
    )
}