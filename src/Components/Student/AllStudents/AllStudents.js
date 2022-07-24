import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';

const AllStudents = () => {

const[student,setStudent] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/student/students')
    .then(res=>res.json())
    .then(data =>setStudent(data))
    
    },[])

console.log(student)
    return (
        <>
        <Header></Header>
        <div className='marg'>
                    
<section className="reviews" id="reviews">

<h1 className="heading"> JIM  <span>student'S</span> </h1>

<div className="swiper review-slider shadow">

{
    student.length === 0 ?
    <div className="text-center"><CircularProgress/> </div> :
    <div className="swiper-wrapper row">

        
    {student.map(p=>
         <div key={p._id} className=" box col-md-4 shadow">
         <img src={'https://thumbs.dreamstime.com/b/little-muslim-boy-holy-islamic-book-quran-muslim-boy-reading-holy-islamic-book-quran-156180313.jpg'} alt=""/>
         <div className="content">

            
             <h4> class: {p.position}</h4>
             {/* <h4>Position:{p.position} </h4> */}
             <p>{p.description.slice(0,50)}.</p>
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
        </div></>
    );
};

export default AllStudents;