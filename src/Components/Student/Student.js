import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Student = () => {

const[student,setStudent] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/students')
    .then(res=>res.json())
    .then(data =>setStudent(data.slice(0,5)))
    
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
         <img src={p.img} alt=""/>
         <div className="content">

            
             <h4> position: {p.position}</h4>
             {/* <h4>Position:{p.position} </h4> */}
             <p>{p.description.slice(0,100)}</p>
             <h3>{p.name} </h3>
             <div className="stars">
               <button className='btn'>about</button>
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