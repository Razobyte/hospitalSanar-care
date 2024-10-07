import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./Whbutton.css";

const WhatsAppButton = ({ className = "" }) => {
  const whatsappUrl = "https://wa.me/7042148149";

  return (
    <>
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}  d-md-flex  d-none `}
      aria-label="Chat on WhatsApp"
    >
        <div 
        className="d-md-flex  d-none  bg-green-500 text-white py-2 px-1 rounded-l-lg hover:bg-green-600  items-center gap-1"
      >
        <span className="hed4 text-white font-normal">Chat Now</span>
        <BsWhatsapp   className="wh-icon"/>
      </div>
     
      
      
    </a>
    
        <div 
        className="d-md-none  d-flex  bg-green-500 text-white py-2 px-1 rounded-l-lg hover:bg-green-600  items-center gap-1"
      >
        <BsWhatsapp   className="wh-icon"/>
      </div>
     
      
      

    </>
    
    
  );
};

export default WhatsAppButton;