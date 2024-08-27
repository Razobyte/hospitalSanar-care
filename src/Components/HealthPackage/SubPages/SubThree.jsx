import React from 'react';
import DynamicPage from './DynamiPage';
import health1Img from '../../../../public/Image/Health1.png';
import health6Img from '../../../../public/Image/Health6.png';
import health3Img from '../../../../public/Image/Health3.png';
import health7Img from '../../../../public/Image/Health7.png'
import RemainCard from './RemainCard';

export default function SubThree(){
    
    const RemainCardData = [
        {
            img: health6Img,
            titile: "RUBIK HEALTH CHECK UP FOR ALL AGE GROUP",
            packages: "Health Packages",
            price: "₹2,510.00"
        },
        {
            img: health7Img,
            titile: "OFFER BY MAHAJAN IMAGING ON CARDIAC AND DIABETIC CARE PACKAGE",
            packages: "Health Packages",
            price: "₹2,510.00"
        },
        {
            img: health1Img,
            titile: "OFFER BY MAHAJAN IMAGING ON CARDIAC AND DIABETIC CARE PACKAGE",
            packages: "Health Packages",
            price: "₹2,510.00"
        }
    ]
    return(
        <>
        <DynamicPage
        Image={health3Img}
        url="
        Home / Health Packages /Offer by Metropolis on Women Package"
        title="Health Packages"
        mainheading="OFFER BY METROPOLIS ON WOMEN PACKAGE"
        price="₹11,555.00"
        subprice=" ₹1,800.00"
        subheading="mahajan imaging offering 20% off on advance arthritis"
        button="enquiry now"
        headingreviewsection="Be the first to review “Offer by Metropolis on Women Package”"
      
      />
      <RemainCard ReaminCardData={RemainCardData}/>

    

    


        </>
    )
}
