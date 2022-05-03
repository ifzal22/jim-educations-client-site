import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OrderPyment = () => {

    return (
        <>
          
<div style={{marginTop:'10px'}} className=''>

<h4 className='text-danger'>payment gateway</h4>
<div>

    <Link to="/payment-getway/stripe">
    <button className='btn'>stripe</button>
    </Link>

    <Link to="/payment-getway/ssl">  <button className='btn'>ssl</button></Link>
   
    
  
</div>

<Outlet></Outlet>


<div style={{textAlign:'center', margin:'auto'}}>


</div>



</div>




     
        </>
    );
};

export default OrderPyment;