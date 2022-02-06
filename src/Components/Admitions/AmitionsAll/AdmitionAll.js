import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdmitionAll = () => {
    const [admit, setAdmit] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/admition')
        .then(res=>res.json())
        .then(data =>setAdmit(data))
    },[])
    return (
        <div>
             <h1 class="heading"> JIM <span>ADMITION</span> </h1>
             <section className="featured" id="featured">


<div className=" featured-slider">
    
{admit.length === 0 ?
<div className='text-center'><CircularProgress/></div>
:





<div className=" row">
{admit.map(p=>
     <div className=" box col-md-4 shadow p-2">
     <img src={p.image} alt=""/>
     <div className="content">
         <h3>{p.title}</h3>
         <div className="stars">
         <p>{p.about} </p>
         </div>

         <p>  </p>
         <div className="price">$ {p.price}/-</div>
         <Link to={`/admition/${p._id}`} href="#" className="btn">check out</Link>
     </div>
 </div>
    )}
       


    


   </div>

}

   

</div>



</section>

        </div>
    );
};

export default AdmitionAll;