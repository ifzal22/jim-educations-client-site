import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './TeacherShow.css';

const TeacherShow = () => {
const [teacher,setTeacher] = useState([]);
const [specificDetail, setSpecificDetail]=useState({});

const {image,cetagory,about,name} = specificDetail;

useEffect(()=>{

    fetch('http://localhost:5000/teachers')
    .then(res=>res.json())
    .then(data =>setTeacher(data))
},[]

)



useEffect(()=>{
    if(teacher.length >0){
    
        const matchData = teacher.map(deatil =>deatil.roll === 'head')
        
        setSpecificDetail(matchData)
    }
    }
    ,[teacher])



    return (
        <div className='mt-5'>








         
<section className="reviews" id="reviews">

<h1 className="heading"> JIM <span>TEACHER'S</span> </h1>

<div className="swiper review-slider">

    {
        teacher.length===0 ?
        <div><CircularProgress/></div> :

        <div className="swiper-wrapper row">

     
                
                
         
                <div className=" box col-md-4 shadow-lg">
                <img src={image} alt=""/>
                <div className="content">
    
                    <h3>{cetagory} </h3>
                    <p>{about} .</p>
                    <h3>{name} </h3>
                    <div className="stars">
                      <button className='btn'>more</button>
                    </div>
                </div>
            </div> 
          
            
                
                
        
    </div>
    }

    <div className="swiper-pagination"></div>

</div>

</section>

        </div>
    );
};

export default TeacherShow;