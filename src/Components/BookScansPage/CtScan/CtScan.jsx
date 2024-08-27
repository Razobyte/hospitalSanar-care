
import CategorySub from "../Category/CategorySub";
import { Row, Col } from 'react-bootstrap'
import bannrScans from '../../../../public/Image/ultra sound 1.png'
import CategorySection from "../Category/Section";
import img2 from '../../../../public/Image/Group 2012.png';
import Section10 from "../../Home/Section10";
import Other from "../Category/Other";
import Digital from "../Category/Digital";
import BookAppo from "../Category/BookAppointment";


export default function CtScan({otherContent}) {



    return (
        <>
            <Row>
                <img src={bannrScans} alt="" className='px-0' />
            </Row>
            <CategorySub h4="CT Scan in Gurugram" />

            <CategorySection 
            />
            <Other otherHeading="Other CT Scan" otherContent={otherContent} />
            <BookAppo headingapp="How To Book CT Scans" />
            <Section10 />
            <Digital />

        </>
    )

}