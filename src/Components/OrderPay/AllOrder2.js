import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import './AllOrder2.css';
import OrderPyment from './OrderPlace/Orderpyment';

const AllOrder2 = (props) => {
    const {   user } = useAuth();
    const {totalQuantity,shipping,tax,total,grandTotal,specificDetail,handleRemove,_id} = props;

const [loginData , setLOginData] = useState({});
const { register, handleSubmit,reset }=useForm();






const onSubmit = (e) =>{
    console.log(e);
   
}



/* const handelOnChange = ( e) =>{
    const field = e.target.name;
    const value = e.target.value;
    console.log(field,value)
    const newLoginData = {...loginData}

newLoginData[field] = value;
setLOginData(newLoginData);


} */



    // console.log(specificDetail);
    return (
        <div className='d-flex justify-content-center '>
               <div className='marg container mx-auto row justify-content-between mx-auto'>
               <h1 className='text-center '>ALL ORDER Summary</h1>
        <div className='col-md-6'>
       
             <h3>Items orders:  {totalQuantity}</h3>
 
             <p>Shipping: {shipping}</p>
                    <p>Tex: {tax?.toFixed(2)}</p>
                    <p>Total:$ {total.toFixed(2)}</p>
                    <h2 style={{color:'red'}}>Grand Total: {grandTotal.toFixed(2)}</h2>







{/* Products Image show */}



        </div>
        <div className='col-md-6 mx-auto'>
            {
                specificDetail.map(p=><>
 <div className='mt-4' >
     <span className='QUAN'>
         Quantity:{p.quantity}
        
        
     </span> 
  
     
     <img style={{width:'100px'}} src={`data:image/jpeg;base64,${p?.image}`}  alt=""/>
 
 
 {/* REMOVE ITEm */}
 <button onClick={()=> handleRemove(p._id)} className='BUT'> <span style={{fontSize: '20px'}}>x</span> </button>
 </div>
 <span className='BUT'>Price:{p.admition.price} </span>
 
                </> )
            }
     
        </div>



{/* ADDRESSS  details*/}


<div className='ADDRESS mx-auto h-100'   >

<h3 className='text-center text-warning'> Enter Details</h3> 


{/* FROM */}



                    <form className='FROM' onSubmit={handleSubmit(onSubmit)} >


<input {...register("email", { required: true, })}  name="email" type="email" placeholder={  user.email }
defaultValue={user.email}
className="box1" />

<input {...register("name", { required: true, })}   name="name" type="name" placeholder="Name" 
defaultValue={user.displayName}
className="box1 " />

<div class="form-row d-flex row ">
    <div class="col-md-4 mb-3 m-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>

    <div class="col-md-3 mb-3 m-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required/>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>

    <div class="col-md-3 mb-3 m-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required/>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>

  </div>

<textarea style={{width:'100%'}} name='address' {...register("address", { required: true, })}  placeholder="Enter Your Address & details" className="box1 " cols="" rows=""></textarea>


<input
 {...register("PhoneNumber", { required: true, })} 
  name="PhoneNumber"
   type="number" 
   placeholder="Enter Your Phone Number" 

className="box1 " />
  </form>
<OrderPyment></OrderPyment>

  <button className='btn' type="submit">confrom order</button>




</div>
 {/* ----------------------------- */}





 
         </div>
        </div>
    );
};

export default AllOrder2;