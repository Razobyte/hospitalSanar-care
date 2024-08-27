import CategorySub from '../../Category/CategorySub';
import { Row } from 'react-bootstrap';
import bannrScans from '../../../../../public/Image/ultra sound 1.png';
import CategorySection from '../../Category/Section';
import img2 from '../../../../../public/Image/Group 2012.png';
import Section10 from '../../../Home/Section10';
import Other from "../../Category/Other";
import Digital from "../../Category/Digital";
import BookAppo from "../../Category/BookAppointment";

export default function PregnancyUltrasound() {
    const otherContent = [
        "Abdominal Ultrasound",
        "Breast Ultrasound",
        "Kidney Ultrasound",
        "Level 2 Ultrasound",
    ];

    return (
        <>
            <Row>
                <img src={bannrScans} alt="" className='px-0' />
            </Row>
            <CategorySub h4="Pregnancy Ultrasound in Gurugram" />
            <CategorySection 
                Heading1="What is Pregnancy Ultrasound?"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book."
                image={img2}
                secpara="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and 
                scrambled it to make a type specimen book."
                thirdpara="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and 
                scrambled it to make a type specimen book." 
            />
            <Other otherHeading="Other Ultrasounds" otherContent={otherContent} />
            <BookAppo headingapp="How To Book Pregnancy Ultrasound" />
            <Section10 />
            <Digital />
        </>
    );
}
