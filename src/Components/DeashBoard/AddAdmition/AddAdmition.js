import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';






const AddAdmition = () => {
  const { register, handleSubmit,reset }=useForm();


    const onSubmit = e => {
  
   
    console.log(e)

        axios.post('http://localhost:5000/AddAdmition',e)
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
                className="box" {...register("title", { required: true, maxLength: 20 })} placeholder="Services Name" />
                <input 
                required
                className="box" {...register("price", { required: true, maxLength: 20 })} placeholder="Admition Price" />

               


                <textarea className="box" {...register("about")} placeholder="Enter Your Description" />

      
                
                <input  className="box" {...register("image")} placeholder="image url" />

<input 

{...register("ima")}
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

export default AddAdmition;