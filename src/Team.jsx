import React, { useState } from 'react'
import './team.css'
import Tdata from './Tdata'

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest} from "react-icons/bs";
const Team = () => {
   const[team ,setTeams]=useState(Tdata)

  
  return (
    <div>
     <h4>Meet Our Artist </h4>
    <h1 className="choose">Choose best for you</h1>
      <div className="team-container">
      
      {
        team.map((Elemen)=>{
            const{id ,img ,tittle}=Elemen;
            return(
                <>
                <div className="team-card">
            <img src={img} alt="remote" />
       
        <div className="tittle">{tittle}</div>
        <div className="icons"><BsTwitter/> <BsInstagram/> <BsFacebook/> <BsPinterest/>   
         
       
         
       </div> 
        </div>
                </>
            )
        })
      }
      </div>
    </div>
  )
}

export default Team
