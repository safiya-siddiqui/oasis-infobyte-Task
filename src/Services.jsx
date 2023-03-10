import React from 'react'
import './services.css'
const Services = () => {


    const ServiseData=[
        {
            id:1,
            images:"./makeupimg/img1.jpg",
            intro:"Makeup",
            paragraph:"ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloribus nobis commodi eligendi accusamus, alias quis ullam nihil quas quisquam, voluptateto sint reprehenderit quasi neque!"
        },
       
    {
        id:4,
        images:"./makeupimg/img16.jpg",
        intro:"Hairstyle",
        paragraph:"ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloribus nobis commodi eligendi accusamus, alias quis ullam nihil quas quisquam, voluptateto sint reprehenderit quasi neque!"
    },
    {
        id:4,
        images:"./makeupimg/img19.jpg",
        intro:"Massages ",
        paragraph:"ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloribus nobis commodi eligendi accusamus, alias quis ullam nihil quas quisquam, voluptateto sint reprehenderit quasi neque!"
    }
    ]



  return (
    <div>
     <h4 className='serve'>Our Services </h4>
    <h1 className="choose1">We offer a wide range of beauty services</h1>
     <div className="service-container">
        {
            ServiseData.map((curelement)=>{
                return(
                    <>
                    <div className="service-card">
            <img src={curelement.images} alt="remote" />
            <div className="intro">
                <h2 className="intro-heading">{curelement.intro}</h2>
                <p className="intro-para">{curelement.paragraph}</p>
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

export default Services
