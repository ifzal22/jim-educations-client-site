import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import './TeacherDetails.css';

const TeacherDetais = () => {

    const {about} = useParams();
    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/teacher/teacher/${about}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])



    return (<>
    
    <Header></Header>
    <div className='container marg'>
        
        <section className="reviews" id="reviews">

<h1 className="heading"> JIM <span>TEACHER'S</span> </h1>

<div className="swiper review-slider d-flex justify-content-center ">





      <div className=" box col-md-4 shadow-lg CONT">
    
     <img src={singleData?.image} alt=""/>
          <div className="content">

              <h3>{singleData?.cetagory} </h3>
              <h6>{singleData?.email} </h6>
              <h6>{singleData?.phone} </h6>
              <p>{singleData.about} .</p>
              <h3>{singleData.name} </h3>
              <div className="stars">
              <div className='text-center '>    
              
         </div>
              </div>
          </div>
          </div> 








<div className="swiper-pagination"></div>

</div>

</section>
    </div></>
    );
};

export default TeacherDetais;