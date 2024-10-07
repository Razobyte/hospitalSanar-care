import { Row, Col } from "react-bootstrap";
import healthbnr from '../../../public/Image/Artboard 1.png'
import SectionFirstHealth from "./SectionFirstHealth";
import SectioniindHealth from "./SectioniindHealth";
import Section10 from '../home/Section10';
import Section13 from "../home/Section13";
export default function Health() {
    return (
        <>
        <Row className="d-lg-flex justify-content-center align-items-center px-0">
            <img src={healthbnr} alt="banner"  className="img-fluid p-0"/>
            </Row>
           
            <SectionFirstHealth />

            <SectioniindHealth />
         
            <Section10 />
            
            <Section13 />
            <Row className="d-flex justify-content-center align-items-center py-2">
          
                <Col md={10}  className="fotter-first rounded ">
                <h1  className="hed3 text-center pt-3 pb-1">Popular tests in Gurgaon</h1>
                <div className="d-flex justify-content-center align-items-center gap-1">  
                <p className="para text-left with-slash">Full Body Health Checkup in Gurgaon / Heart Test in Gurgaon / Kidney Test in Gurgaon / Liver Test in Gurgaon / Thyroid Test in Gurgaon /
                        Gastrointestinal Bone And Joint Prostate Test in Gurgaon / Infectious Disease Gynaecology Test in Gurgaon / Allergy Test in Gurgaon / Diabetes
                        Test in Gurgaon / Gastro Test Female Cancer Pregnancy Test Cancer Test Cardiology Test Nephrology Orthopedics Test Tuberculosis Test in
                        Gurgaon / Full Body Anemia Test in Gurgaon / Lung Test in Gurgaon</p>


                </div>
                    

                </Col>
            </Row>
           


        </>

    )
}