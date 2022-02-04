import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';

const AllTeacher = () => {


    const [teacher,setTeacher] = useState([]);




useEffect(()=>{

    fetch('http://localhost:5000/teachers')
    .then(res=>res.json())
    .then(data =>setTeacher(data))
},[])


    return (
        <>
        <Header></Header>
        <div className='marg'>
            
<section className="reviews" id="reviews">

<h1 className="heading"> JIM <span>TEACHER'S</span> </h1>

<div className="swiper review-slider">

   

        <div className="swiper-wrapper row">
 {teacher?.map(p=>
          <div className=" box col-md-4 shadow-lg">
        
         <img src={p?.image} alt=""/>
              <div className="content">
  
                  <h3>{p?.cetagory} </h3>
                  <p>{p.about} .</p>
                  <h3>{p.name} </h3>
                  <div className="stars">
                    <button className='btn'>more</button>
                  </div>
              </div>
              </div> 
 )

          }
   
    

    </div>

    

    <div className="swiper-pagination"></div>

</div>

</section>

        </div></>
    );
};

export default AllTeacher;