import React, { useEffect, useState } from 'react'
import './reviews.css'
import Rdata from './Rdata'
const Reviews = () => {
const[people]=useState(Rdata);
const[index,setIndex] = useState(0);

useEffect(()=>{
const lastindex = people.length-1;
if(index < 0){
    setIndex(lastindex)
}
if(index>lastindex){
    setIndex(0);
}

},[index,people]);

useEffect(()=>{
    let slider=setInterval(()=>{
        setIndex(index+1);
    },3000)
    return()=>{
        clearInterval(slider);
    };
} ,[index])
    
  return (
    <div>
      <span>What our clients say about Shifa Beauty center</span>

      <div className="reviews-container">

        {
            people.map((curr ,indexPeople)=>{
                const{id,pic,bio ,designation}=curr;
                let position="nextSlide";
if(indexPeople===index){
    position="activeSlide";
}
if(indexPeople===index-1 ||(index===0 &&indexPeople===people.length-1)){
    position="lastSlide";
}
return(
    
    <article className={position} key={id}>
   
    <div className="review-card">
    <div className="Ist">Everything is possible   <br/>with shifa beauty center </div>
        <p className="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus porro voluptatem officia quasi est. Aut ipsum, saepe ea, nulla quaerat velit alias at dignissimos rerum maiores ipsa tenetur earum ut.</p>

        <img src={pic} alt="remote" />
        <div className="bio">{bio}</div>
        <div className="designation">{designation}</div>
    </div>
   
    </article>
   
)
            })
        }
        </div>
    </div>
  )
}

export default Reviews
