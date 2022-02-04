import React, { useEffect, useState } from 'react';
import './TeacherShow.css';

const TeacherShow = () => {
const [teacher,setTeacher] = useState([]);
const [specificDetail, setSpecificDetail]=useState([]);

// const {image,cetagory,about,name} = specificDetail;

useEffect(()=>{

    fetch('http://localhost:5000/teachers')
    .then(res=>res.json())
    .then(data =>setTeacher(data))
},[])


useEffect(()=>{
    if(teacher.length >0){
    
        const matchData = teacher.filter(deatil =>deatil.roll === 'head')
        
        setSpecificDetail(matchData)
    }
    }
    ,[teacher])

console.log(specificDetail)

    return (
        <div className='mt-5'>

<section className="reviews" id="reviews">

<h1 className="heading"> JIM <span>TEACHER'S</span> </h1>

<div className="swiper review-slider">

   

        <div className="swiper-wrapper row">
 {specificDetail?.map(p=>
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

        </div>
    );
};

export default TeacherShow;