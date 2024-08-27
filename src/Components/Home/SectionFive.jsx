import{Row,Col} from 'react-bootstrap';
import fifthsecimg6 from '../../../public/Image/sixthsecimg1.png';
import fifthsecimg5 from '../../../public/Image/sixthsecimg2.png';
import fifthsecimg4 from '../../../public/Image/sixthsecimg3.png';
import fifthsecimg3 from '../../../public/Image/sixthsecimg4.png';
import fifthsecimg2 from '../../../public/Image/sixthsecimg5.png';
import fifthsecimg1 from '../../../public/Image/sixthsecimg6.png';


export default function SectionFive(){
    return(
        <>
        <Row  className='d-md-flex flex-sm-row justify-content-center align-items-center gap-4 py-xl-5  py-lg-5 py-md-5 py-4  '
       
       >
        <Col md={10}>
        <h1 className='text-center hed1 pb-xl-4 pb-lg-4 pb-md-4 pb-3'>Are you keeping up with your preventive care?</h1>
        <div className='d-flex  flex-sm-row align-items-center gap-xl-4  gap-lg-4 gap-md-4 gap-2  justify-content-center'>
        <div className='fifthsec' style={{backgroundColor:"#FF5F1B4d"}}>
        <img src={fifthsecimg1} alt="" className='img-fluid' />
        <h4 className='hed3 text-center'>Early Detection</h4>
        <p className='para text-center'>Early Detection
        Radiology screenings can detect health 
        issues at their earliest stages, allowing 
        for prompt treatment and better 
        outcomes.</p>
        </div>
        <div className='fifthsec'  style={{backgroundColor:"#FF50CE4d"}}>
        <img src={fifthsecimg2} alt="" className='img-fluid' />
        <h4 className='hed3 text-center'>Disease Prevention</h4>
        <p className='para text-center'>Regular check-ups can identify risk 
        factors for diseases such as cancer or 
        heart disease, enabling interventions 
        to prevent their development.</p>
        </div>
        <div className='fifthsec d-md-flex d-none'  style={{backgroundColor:"#99E6FF"}}>
        <img src={fifthsecimg3} alt="" className='img-fluid'   style={{width:"76px"}}/>
        <h4 className='hed3 text-center'>Peace of Mind</h4>
        <p className='para text-center'>Knowing that you're taking proactive 
        steps to monitor your health can provide 
        reassurance and peace of mind.</p>
        </div>

        </div>
        <div className='d-flex  flex-sm-row align-items-center gap-xl-4  gap-lg-4 gap-md-4 gap-2 justify-content-center pt-4 '>
        <div className='fifthsec ' style={{backgroundColor:"#99E6FF"}}>
        <img src={fifthsecimg4} alt="" className='img-fluid'  style={{width:"62px"}} />
        <h4 className='hed3 text-center'>Cost Savings</h4>
        <p className='para text-center'>Detecting health problems early can 
        often lead to less expensive and less 
        invasive treatments, saving money in 
        the long run.</p>
        </div>
        <div className='fifthsec'  style={{backgroundColor:"#00AC264d"}}> 
        <img src={fifthsecimg5} alt="" className='img-fluid' />
        <h4 className='hed3 text-center'>Personalized Care</h4>
        <p className='para text-center'>Radiology check-ups can be tailored to individual needs based on factors like  age, gender,ensuring personalized and targeted Healthcare.</p>
        </div>
        <div className='fifthsec d-md-flex d-none' style={{backgroundColor:"#0021ce4d"}}>
        <img src={fifthsecimg6} alt="" className='img-fluid'   style={{width:"85px"}}/>
        <h4 className='hed3 text-center'>Improved Quality of Life</h4>
        <p className='para text-center'>By identifying and addressing health 
        issues early, preventive check-ups can 
        help maintain or improve your overall 
        quality of life.</p>
        </div>

        </div>
        </Col>
        </Row>
        </>

    )
}