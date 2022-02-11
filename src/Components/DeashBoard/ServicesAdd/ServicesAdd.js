import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';






const ServicesAdd = () => {
  const { register, handleSubmit,reset }=useForm();


    const onSubmit = e => {
  
   
    console.log(e)


    
        axios.post('http://localhost:5000/addServices',e)
        .then(res =>{
            if (res.data.insertedId) {
                console.log(res.data)
                alert('added successfully');
                reset();
            }
         
        })


    }
return (
<div>

<div className='login-form-container'>
   




    <form onSubmit={handleSubmit(onSubmit)}>
    <h3>ADD Services</h3>
                <input 
                required
                className="box" {...register("serviceName", { required: true, maxLength: 20 })} placeholder="Services Name" />

               


                <textarea className="box" {...register("about")} placeholder="Enter Your Description" />

      
                
                <input  className="box" {...register("img")} placeholder="image url" />

<input 

{...register("image")}
 className="box"
accept='image/*'
placeholder='upload service  image'
type="file" />

                <input className="btn" type="submit" />
            </form>





</div>
</div>
);
};

export default ServicesAdd;