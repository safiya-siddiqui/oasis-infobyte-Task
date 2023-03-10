import React from 'react'

import './Navbar.css'
import { WhatsappShareButton , LinkedinShareButton , TwitterShareButton, TelegramShareButton} from 'react-share'
import{WhatsappIcon ,  LinkedinIcon ,  TwitterIcon, TelegramIcon  } from 'react-share'
import{BsHouseDoor} from "react-icons/bs";
const Navbaar = () => {
  return (
    <div>
   <header>
   <nav>
   
            <ul>
                <li><a href="">Mail</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
                <li><a href=""> <BsHouseDoor/> Home</a></li>
            </ul>
            <img  src="./makeupimg/SHIFA.png" alt="" />
        </nav>
        </header>

   <section>
   <div className="main-div">
        <img src="./makeupimg/img5.jpg" alt="" />
        <div className="text">Everything is possible <br />
          with Shifa Beauty Center </div>

        <button className="btn2">Connect with us
         <WhatsappShareButton url="https://www.linkedin.com/in/safiyah-siddiqui-566009214/"
quote={"Hey it is very interesting website"}
hashtag="#React"> 
<WhatsappIcon logoFillColor="white" size={22} round={true}></WhatsappIcon>
</WhatsappShareButton>


        
        </button> 
       
    </div>
   





   </section>
   
   
    </div>
  )
}

export default Navbaar
