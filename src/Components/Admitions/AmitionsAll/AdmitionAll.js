import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import '../Admition.css';
import Admition2 from '../Admition2/Admition2';
const AdmitionAll = () => {
    const [admit, setAdmit] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)
   



    useEffect(()=>{
        fetch('http://localhost:5000/admition')
        .then(res=>res.json())
        .then(data =>{
            
     
            setAdmit(data);

         } )},[isDeleted])
 
    // console.log(image.image)
    // console.log(admit)

    const DeleteAdmition = (id) =>{


        const proceed = window.confirm('Are You Deleted This Admition?');
        if (proceed) {
           axios.delete(`http://localhost:5000/deleteAdmition/${id}`, {
         
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
        <>  <Header></Header>
        <div className='marg'>
          
             <h1 class="heading"> JIM <span>ADMITION</span> </h1>
             <section className="featured" id="featured">


<div className=" featured-slider">
    
{admit.length === 0 ?
<div className='text-center'><CircularProgress/></div>
:





<div className=" row">
{


[...admit].reverse().map(p=>
<>
 <Admition2 _id={p._id}
 p={p}
 isDeleted={isDeleted}
 DeleteAdmition={DeleteAdmition}
 
 >

 </Admition2>

   </>
    )}
       


    


   </div>

}

   

</div>



</section>

        </div></>
    );
};

export default AdmitionAll;