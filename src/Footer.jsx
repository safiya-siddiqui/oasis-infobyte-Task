import React from 'react'
import './footer.css'
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";
import{FiChevronRight} from "react-icons/fi";
import{BsPinterest}from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="main-footer">
        <div className="left1">
           <h1>Shifa </h1>
           <h3 className='beauty'>Center of Beauty</h3>
           <div className="para12">Beauty the nunc bibe endum in finibus elit the solli citudin elit. quaerat reiciendis fuga iste distinctio?</div>
           <h5><BsTwitter/>  <BsInstagram/>  <BsFacebook/>  <BsPinterest/> </h5>
        </div>
       
        <div className="center">
       <div className="onepart"> <h3>Useful Links</h3>
           <p><FiChevronRight/>Massage</p>
           <br />
           <p> <FiChevronRight/>Hair styles</p>
           <br />
           <p><FiChevronRight/>Makeup</p>
</div>
        
        <div className="twoparts">
        <h3>Get in touch</h3>
        <p>+1 203-123-0606

hello@shifacenter.com</p>
        </div>
       </div>
        <div className="right1">
      
      <div className="right-one">
      <h3>Locations</h3>
      <p>525 West Ave, <br />
      CT 06850  <br /> Connecticut — Norwalk <FiMapPin/></p>
      </div>
          
          <div className="right-two">
            <h3>Work Hours</h3>
            <p>Mon-Fri: 08.00 - 19.00 <br />
             Sunday: Closed</p>
          </div>
        </div>
       
       
        </div>
      
       
        <h6>© 2023, shifa web.</h6>
      </div>
      
    </div>
  )
}

export default Footer
