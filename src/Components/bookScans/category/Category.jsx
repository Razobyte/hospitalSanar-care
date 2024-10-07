
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CategoryLab from './CategoryLab';
import ContactForm from '../../../Form';
import Nablimg from './../../../../public/Image/Mask group (1).png';
import patients from '../../../../public/Image/Mask group (2).png';
import reliable from '../../../../public/Image/Mask group (3).png';
import mri from '../../../../public/Image/Mask group.png'
import icons from '../../../../public/Image/doctor consultation.png';
import Faq from './Faq';
import Othercategory from './Othercategory';


export default function Category() {
  const [bannerData, setBanner] = useState(null)

 
  let api = import.meta.env.VITE_API_BASE_URL;

  const { category } = useParams();


  useEffect(() => {
    if (category) {
      fetchBanners();
    }
  }, [category]);

  const fetchBanners = async () => {
    const formdata = new FormData()
    formdata.append('view', 'category_detail')
    formdata.append('slug', category)
    try {
      const res = await axios.post(api, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      })
      const banner = res.data.response.categoryDetail;
      setBanner(banner)

    }
    catch (error) {
      console.log('error', error)

    }
  }
  return (
    <>
      <Row className='px-0 justify-content-center align-items-center'>
        {bannerData && (
          <div key={bannerData.slug} className='w-100 px-0'> {/* Use slug or another unique identifier */}
            <img src={bannerData.banner} alt={bannerData.name} className="d-block w-100 object-contain" /> 
          </div>
        )}
      </Row>
      <Row className='d-flex justify-content-center  py-5 gap-5'>

        <Col md={6} xl={6} lg={6} xxl={6} xs={12}>
          {bannerData && (
            <h4 className='hed3'>{`${bannerData.name} in Gurgaon`}</h4>
          )}
          <CategoryLab />
        </Col>
        <Col md={4} xs={10} xl={4} lg={4} xxl={4} className="d-flex flex-column form-scans-col px-0 ">
          <ContactForm data="Schedule Your Radiology Scan" className="border" />
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
            <img src={icons} alt="" className='img-fluid' style={{ width: "50px", height: "50px" }} />
            <h3 className='hed3 text-white ps-2 pt-lg-2 pt-md-2 pt-xl-2 pt-sm-2'>Don't have a prescription? Consult a doctor online</h3>
            <div>
              <Button className='button-white-bg'>Book an Appointment</Button>
            </div>
          </div>
        </div>
      </Row>
      <Row className="d-md-flex justify-content-center align-items-center py-5 sectionContainerHealth mb-xl-5 mb-md-5 mb-lg-5">
        <Col md={11} lg={12} xl={12} xs={10} sm={10} className="d-md-flex justify-content-center py-lg-0 py-md-0 py-xl-0 py-3">
          {bannerData && (
            <>
              <Col md={6}>
                <h2 className='hed1'>{`What is ${bannerData.name}?`}</h2>
                <p className='para pt-3'>
                  {bannerData.description}
                </p>
              </Col>
              <Col md={4}>
                <div className='d-flex justify-content-center'>
                  <img src={bannerData.image} alt="image" className='img-fluid' />
                </div>
              </Col>
            </>
          )}
        </Col>
      </Row>
      <Faq/>
      <Othercategory/>
      
      


    </>

  )

}
