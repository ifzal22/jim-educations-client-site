import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Admition2 = ({p,DeleteAdmition,isDeleted}) => {
    console.log(p._id)
    const {admin} = useAuth()
    return (
        <div className=" box col-md-4 shadow p-2">
        
        <img  src={`data:image/jpeg;base64,${p.image}`}  alt=""/>
        <div className="content">
            {/* <h3>{p.admition.title}</h3> */}
            <h1>{p.admition.title} </h1>
            <div className="stars">
            <p>{p.admition.about} </p>
            </div>
   
            <p>  </p>
            <div className="price"> $ {p.admition.price}/- </div>
            <Link to={`/admition/${p._id}`} className="btn">check out</Link>
          { admin && <button style={{m:'5px'}}  onClick={() => DeleteAdmition(p._id)} type="button" class="btn btn-danger">Delete</button>}
        </div>

    </div>
    );
};

export default Admition2;