import { Link } from '@mui/material';
import React from 'react';

const Admition2 = ({p}) => {
    console.log(p)
    const{price,title,about,id} = p;
    return (
        <div className=" box col-md-4 shadow p-2">
        
        <img  src={`data:image/jpeg;base64,${p.image}`}  alt=""/>
        <div className="content">
            {/* <h3>{p.admition.title}</h3> */}
            <h1>{title} </h1>
            <div className="stars">
            <p>{about} </p>
            </div>
   
            <p>  </p>
            <div className="price">$ {price}/-</div>
            <Link to={`/admition/${p._id}`} href="#" className="btn">check out</Link>
        </div>
    </div>
    );
};

export default Admition2;