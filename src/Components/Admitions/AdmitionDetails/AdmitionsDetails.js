import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';


const AdmitionsDetails = (id) => {
    const {booking} = useParams();
    const [singleData, setSingleData] = useState({});
    const [isDeleted, setIsDeleted] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/admition/${booking}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])


const DeleteAdmition = () =>{


    const proceed = window.confirm('Are You Deleted This Admition?');
    if (proceed) {
        fetch(`http://localhost:5000/deleteAdmition/${id}`, {
        method: 'DELETE',
        headers: {
            content: 'application/json'
        }
    }).then(res => res.json())
        .then(result => {
           console.log(result)
           if (result.acknowledged) {
            setIsDeleted(true)
            console.log(result.data)
            alert('Deleted successfully');
           
        }else{
            setIsDeleted(false)
        }
        })
    // console.log(id);
    }



}






    return (
        <div className='marg '>
        <Header></Header>
                    <div className='BOOK mt-8 pt-5 mx-auto'>
                   
             
                   
                   
                   <section className="vehicles " id="vehicles">
                   
                   <h1 style={{color:'white' , textShadow: '2px 2px 4px #000000'}} className="heading ">   <span style={{color:'yellow'}}>{singleData.title} </span> </h1>
                   
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
                   
                       <button  onClick={() => DeleteAdmition(singleData._id)} type="button" class="btn btn-danger">Delete</button>
                   
                   </div>
                   
                   </section>
                   
                   
                   
                   
                                
                             
                           </div>
                </div>
    );
};

export default AdmitionsDetails;