import CategorySub from '../../Category/CategorySub';
import { Row } from 'react-bootstrap';
import bannrScans from '../../../../../public/Image/ultra sound 1.png';
import CategorySection from '../../Category/Section';
import img2 from '../../../../../public/Image/Group 2012.png';
import Section10 from '../../../Home/Section10';
import Other from "../../Category/Other";
import Digital from "../../Category/Digital";
import BookAppo from "../../Category/BookAppointment";

export default function AbdominalUltrasound({ otherContent }) {


    return (
        <>
            <Row>
                <img src={bannrScans} alt="" className='px-0' />
            </Row>
            <CategorySub h4="Abdominal Ultrasound in Gurugram" />
            <CategorySection />
            <Other otherHeading="Other Ultrasounds" otherContent={otherContent} />
            <BookAppo headingapp="How To Book Abdominal Ultrasound" />
            <Section10 />
            <Digital />
        </>
    );
}
