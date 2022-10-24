import React from 'react'
// import { ReactComponent as WhatsAppIcon } from "../../images/svgs/whatsaap.svg";
import Call from "../../images/call.png"
export default function WhatsApp() {
    return (
        <a className="call-btn-container" href="tel:+14039738894">
            {/* <WhatsAppIcon className="whatsaap-btn" /> */}
            <img className="call-btn" src={Call} alt="polar-tech-contact" />
        </a>
    )
}


// {/* <a href="https://api.whatsapp.com/send?phone=+1(403)973-8894&text=Hello welcome to Polartech Appliance." rel="noreferrer" className="float" target="_blank">
//     <WhatsAppIcon className="whatsaap-btn" />
// </a>  */}