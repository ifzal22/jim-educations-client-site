import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Student = () => {

const[student,setStudent] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/students')
    .then(res=>res.json())
    .then(data =>console.log(data))
    
    },[])

console.log(student)
    return (
        <div>
                    
<section className="reviews" id="reviews">

<h1 className="heading"> brilliant  <span>student'S</span> </h1>

<div className="swiper review-slider shadow">

{
    student.length === 0 ?
    <div className="text-center"><CircularProgress/> </div> :
    <div className="swiper-wrapper row">

        
    {student.map(p=>
         <div key={p._id} className=" box col-md-4 shadow">
         <img src={p.profile} alt=""/>
         <div className="content">

            
             <h4> class: {p.className}</h4>
             <h4>Position:{p.position} </h4>
             <p>{p.about}.</p>
             <h3>{p.name} </h3>
             <div className="stars">
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star-half-alt"></i>
             </div>
         </div>
     </div>
        )}

</div>
}

    <div className="swiper-pagination"></div>

</div>

</section>
        </div>
    );
};

export default Student;