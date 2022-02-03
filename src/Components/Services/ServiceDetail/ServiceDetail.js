import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';


const ServiceDetail = () => {
    const {ID} = useParams();
    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${ID}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])
    return (
        <div className='marg'>
<Header></Header>
            <div className='BOOK mt-8 pt-5 mx-auto'>
           
     
           
           
           <section className="vehicles " id="vehicles">
           
           <h1 style={{color:'white' , textShadow: '2px 2px 4px #000000'}} className="heading ">   <span style={{color:'yellow'}}>{singleData.serviceName} </span> </h1>
           
           <div className="swiper vehicles-slider align-content-center ">
           
               <div className="swiper-wrapper row mx-auto BG justify-content-center align-content-center">

                   <div className='col-md-6'>
<img src={singleData.image} alt="" />
                   </div>
                   <div className='col-md-6 container'>
                <div>
                <h1 style={{color:'yellow' , textShadow: '2px 2px 4px #000000'}}>{singleData.serviceName} </h1>
                   <p>{singleData.about}</p>
                </div>
                   </div>
           
           
            
               

               
               
           
           
                   
           
               </div>
           
               
           
           </div>
           
           </section>
           
           
           
           
                        
                     
                   </div>
        </div>
    );
};

export default ServiceDetail;