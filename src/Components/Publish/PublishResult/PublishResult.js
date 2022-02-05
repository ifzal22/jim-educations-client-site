import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './PublishResult.css';

const PublishResult = () => {
    const [result , setResult] = useState([])
    
    useEffect(()=>{
fetch('http://localhost:5000/results')
.then(res=>res.json())
.then(data =>setResult(data.slice(0,2)) )

    },[])
    return (
        <div className=' container my-5'>
            <h1 style={{color:'white' , textShadow: '2px 2px 4px #000000'}} class="heading "> Publis  <span style={{color:'yellow'}}>Results</span> </h1>
          {
              result.length===0 ? <div><CircularProgress/></div> :
        <>

{result.map(p=>
                <div className='row justify-center BG rounded-3 shadow '>
             
                <div className='col-md-6'>
                    <img src={p.image} alt="" />
                </div>
                <div className='col-md-6 TEX align-content-center'>
                    <h1>{p.title} </h1>
                    <p className='my-5'>{p.information} </p>
                </div>
                <button className='btn'>more</button>
            </div>     
                 
                 )}


        </>
          }
                  
        
        </div>
    );
};

export default PublishResult;