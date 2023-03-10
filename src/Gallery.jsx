import React, { useState } from 'react'
import './gallery.css'
import Sdata from './Sdata'
const Gallery = () => {

    const[items ,setItems]=useState(Sdata)

const filterItem=(categItem)=>{
const updatedItems=Sdata.filter((currElem)=>{
 return currElem.category===categItem
});
setItems(updatedItems)


}
  return (
    <div>
      <h1 className="main-heading"> Gallery</h1>
     
      <div className="menu-container">
       <div className="menu-tab ">
       <button className='btn' onClick={()=>filterItem('Bridal')}>Bridal</button>

       <button className='btn' onClick={()=>filterItem('Party')}>Party</button>

       <button className='btn' onClick={()=>filterItem('Simple')}>Simple</button>

       <button className='btn' onClick={()=>filterItem('Facial')}>Facial</button>

     
       <button className='btn' onClick={()=>setItems(Sdata)}>All</button>
       </div>


      </div>

      <div className="main-items">
      
           
{
    
    items.map((elem)=>{
       const{id,image,para}=elem;
       return(
        <>
        <div className="card">
        <img src={image} alt="remote" />
           
            </div>
        </>
       )         
            })
}
        
      </div>
    </div>
  )
}

export default Gallery
