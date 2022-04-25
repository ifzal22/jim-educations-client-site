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




<div style={{textAlign:'center', margin:'auto'}}>

<button className='btn' type="submit">confrom order</button>
</div>


<Outlet></Outlet>
</div>




     
        </>
    );
};

export default OrderPyment;