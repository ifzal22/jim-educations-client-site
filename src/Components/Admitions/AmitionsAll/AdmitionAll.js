import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import '../Admition.css';
import Admition2 from '../Admition2/Admition2';
const AdmitionAll = () => {
    const [admit, setAdmit] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/admition')
        .then(res=>res.json())
        .then(data =>setAdmit(data))
    },[])
 
    // console.log(image.image)
    console.log(admit)


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

 <Admition2 key={p._id}
 p={p}
 isDeleted={isDeleted}>

 </Admition2>
    )}
       


    


   </div>

}

   

</div>



</section>

        </div></>
    );
};

export default AdmitionAll;