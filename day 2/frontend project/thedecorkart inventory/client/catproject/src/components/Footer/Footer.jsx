import React from 'react'
import './footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
function Footer() {
  return (
      <div style={{backgroundColor:'rgb(116, 107, 97)',color:'white'}}>
            <div className='footer__container'>
           <div className='footer__title'>
                    <h4>Support</h4>
             <ul>
                <li>Contact Us</li>
                <li>Returns + Refunds</li>
                <li>Shipping</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Refund policy</li>
            </ul>
           </div>
           <div className='footer__title'>
                    <h4>Quick Links</h4>
             <ul>
                <li>Track Order</li>
                <li>About Us</li>
                <li>Shipping</li>
                <li>Stores</li>
                <li>the BLOG</li>
                <li>Gift Cards</li>
            </ul>
           </div>
           <div className='footer__title'>
                <h4>Get In Touch</h4>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px',cursor:'pointer'}}>
                         <FaWhatsapp />
                        <p>9977665592</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px',cursor:'pointer'}}>
                         <TfiEmail />
                        <p>thedecorkart@gmail.com</p>
                </div>
           </div>
          
    </div>
    <div className='footer__heading'>
               <h1>Thedecorkart</h1>
    </div>
 </div>
  )
}

export default Footer