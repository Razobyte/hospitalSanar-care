import { Row, Col, Form, Button } from 'react-bootstrap';
import CategoryFirst from './CategoryFirst';
import doctoimg from '../../../../public/Image/Doctor.png';
import Nablimg from './../../../../public/Image/Mask group (1).png';
import patients from '../../../../public/Image/Mask group (2).png';
import reliable from '../../../../public/Image/Mask group (3).png';
import mri from '../../../../public/Image/Mask group.png'
import icons from '../../../../public/Image/doctor consultation.png';


export default function CategorySub({ h4, h3 }) {


 

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center py-5 gap-5'>
        <Col md={6}  xl={6} lg={6} xxl={6} xs={12}>
          <h4 className='hed4 text-black'>{h4}</h4>
          <CategoryFirst />
        </Col>
        <Col md={4} xs={10}  xl={4} lg={4} xxl={4} className="d-flex flex-column form-scans-col px-0 ">
      <div className='form-scans'>
        <div className="d-flex pt-2" style={{
          backgroundColor: "#46A4D9", borderTopRightRadius: "25px",
          borderTopLeftRadius: "25px",
        }}>
          <img src={doctoimg} alt="Scan Banner" className="img-fluid" />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-white hed3 pb-2 m-0">Schedule Your Radiology Scan</h3>
            <h3 className='text-center hed3 text-white'>Appointment Today!</h3>
          </div>
        </div>
        <Form className='p-4'>
          <Form.Group controlId="formPatientName" className="mb-4">
            <Form.Label className='hed4'>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Patient Name" />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mb-4">
            <Form.Label className='hed4'>Your Mobile Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter Your Mobile No." />
          </Form.Group>

          <Form.Group controlId="formLocation" className="mb-4">
            <Form.Label className='hed4'>Location</Form.Label>
            <Form.Control type="text" placeholder="Gurugram" />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-4">
            <Form.Label className='hed4'>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Typing..." />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mb-2">
            <span className='d-flex gap-3 mt-2'>
              <Form.Check type="checkbox" className='para' />
              <Form.Label className='para'>You hereby affirm & authorise Sanarcare to
                process the personal data as per the T&C.</Form.Label>
            </span>
          </Form.Group>
          <div className="text-center d-flex justify-content-center align-items-center mt-4">
            <Button variant="primary" type="submit" className="px-5 buttonfirst">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Col>


      </Row>
      <Row className='d-md-flex d-xl-flex d-lg-flex d-none align-items-center justify-content-center'>
        <h1 className='hed1 text-center pb-3'>Why Choose Sanarcare</h1>
        <Col md={10} className=" d-flex  flex-column justify-content-center align-items-center">
          <div>
            <p className='para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione! Asperiores repellat vitae accusantium cum voluptate? Ullam alias maxime at illo ratione. Laborum quasi commodi dicta, voluptas sint ipsum in necessitatibus quas nihil repudiandae eius reprehenderit hic optio. Ad neque recusandae quaerat ut! Vero deleniti numquam porro possimus laudantium qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas alias quos deserunt totam libero magnam laborum autem facere sint dicta. Voluptatum dolore facilis odio nostrum recusandae at dolorum, nam cupiditate earum nihil architecto iusto aperiam officia facere exercitationem mollitia, consequuntur repellendus maxime, tenetur vero sit laborum consectetur esse quibusdam. Velit.</p>
          </div>
          <div className='col-md-10 d-flex justify-content-center align-items-center gap-5 pt-3 pb-4'>
            <div className='scan-div1st '>
              <img src={Nablimg} alt="" className='img-fluid' />
              <h4 className='para'>ISO and NABH <br />
                certified scan centers</h4>
            </div>
            <div className='scan-div1st'>
              <img src={reliable} alt="" className='img-fluid' />

              <h4 className='para'>100% reliable and  <br />
                accurate reports</h4>
            </div>


            <div className='scan-div1st'>
              <img src={patients} alt="" className='img-fluid' />
              <h4 className='para'>Patients save an a <br />
                verage of ₹700 <br />
                on each scan</h4>
            </div>
            <div className='scan-div1st'>
              <img src={mri} alt="" className='img-fluid' />
              <h4 className='para'>1.5 lakh+ patients <br />
                test with us every  <br />
                month</h4>
            </div>
          </div>


        </Col>
        <div className='filed-div col-md-12 col-xl-12 col-lg-12  mt-3 rounded-3 '>
          <div className='col-md-9 d-flex justify-content-center align-items-center ps-lg-5 ps-md-5 ps-xl-5  gap-xl-2 gap-md-3 gap-lg-3'  >
            <img src={icons} alt="" className='img-fluid' style={{width:"50px",height:"50px"}} />
            <h3 className='hed3 text-white ps-2 pt-lg-2 pt-md-2 pt-xl-2 pt-sm-2'>Don't have a prescription? Consult a doctor online</h3>
            <div>
            <Button className='button-white-bg'>Book an Appointment</Button>
          </div>
          </div>
        </div>
      </Row>
     
    </>
  )
}