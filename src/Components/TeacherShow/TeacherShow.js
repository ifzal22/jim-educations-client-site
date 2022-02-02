import React from 'react';
import './TeacherShow.css';

const TeacherShow = () => {

const teacher =[
    {
        name:'Masuk Ahmed',
        cetagory:'Principal',
        image:'https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/58384048_2382475585116846_3946049603186458624_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF2QVPeU0ktvkAHC7gqoXhG26zFZwgwbxzbrMVnCDBvHMVPNbQLnTO5R1nY1FQS8f5T1AFMHB5lek_qQF1gObH6&_nc_ohc=Gw-sy5WqeqkAX9BEi0S&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT9wv_RRFlwWFqIJwd1Wur4wE3RrYkbte1s3juydj_0RxQ&oe=6221AB03',
        about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.',
        roll:'',
        information:'',
        age:'',
        study:'',
        address:'',
        email:'',
        phone:'',
        
    },
    {
        name:'Masuk Ahmed',
        cetagory:'Principal',
        image:'https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/58384048_2382475585116846_3946049603186458624_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF2QVPeU0ktvkAHC7gqoXhG26zFZwgwbxzbrMVnCDBvHMVPNbQLnTO5R1nY1FQS8f5T1AFMHB5lek_qQF1gObH6&_nc_ohc=Gw-sy5WqeqkAX9BEi0S&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT9wv_RRFlwWFqIJwd1Wur4wE3RrYkbte1s3juydj_0RxQ&oe=6221AB03',
        about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.',
        roll:'',
        information:'',
        age:'',
        study:'',
        address:'',
        email:'',
        phone:'',
        
    },
    {
        name:'Masuk Ahmed',
        cetagory:'Principal',
        image:'https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/58384048_2382475585116846_3946049603186458624_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF2QVPeU0ktvkAHC7gqoXhG26zFZwgwbxzbrMVnCDBvHMVPNbQLnTO5R1nY1FQS8f5T1AFMHB5lek_qQF1gObH6&_nc_ohc=Gw-sy5WqeqkAX9BEi0S&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT9wv_RRFlwWFqIJwd1Wur4wE3RrYkbte1s3juydj_0RxQ&oe=6221AB03',
        about:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.',
        roll:'',
        information:'',
        age:'',
        study:'',
        address:'',
        email:'',
        phone:'',
        
    }
]






    return (
        <div className='mt-5'>








         
<section className="reviews" id="reviews">

<h1 className="heading"> JIM <span>TEACHER'S</span> </h1>

<div className="swiper review-slider">

    <div className="swiper-wrapper row">
        {
            teacher.map(p => 
                
                
                <div className=" box col-md-4 shadow-lg">
                <img src={p.image} alt=""/>
                <div className="content">
    
                    <h3>{p.cetagory} </h3>
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