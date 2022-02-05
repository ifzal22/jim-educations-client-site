import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';






const StudentAdd = () => {
  const { register, handleSubmit,reset }=useForm();


    const onSubmit = e => {
      e.status = 'pending';
   
    console.log(e)

        axios.post('http://localhost:5000/addStudent',e)
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
    <h3>ADD STUDENT</h3>
                <input 
                required
                className="box" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input 
              
                className="box" {...register("email", { required: true,  })} placeholder="Email" />


                <textarea className="box" {...register("description")} placeholder="Enter Your Description" />

                <div className="input-group mb-3 ">

 <select
 className="form-select box" id="inputGroupSelect03" 
 aria-label="Example select with button addon"
 {...register("position")}>
   <option selected>Select Your Class</option>
   <option value="principal">Class One</option>
   <option value="vice-principal">Class Two</option>
   <option value="Teacher">Class Tree</option>
  
   <option value="Teacher">Class Four</option>
   <option value="Teacher">Class Five</option>
   <option value="Teacher">Class Six</option>
   <option value="Teacher">Class Seven</option>
   <option value="Teacher">Class Eight</option>
   <option value="Teacher">Class Nine</option>
   <option value="Teacher">Class Ten</option>
   <option value="Teacher">Class Alim</option>
  
 </select>
</div>
                
               {/*  <input  className="box" {...register("img")} placeholder="image url" /> */}

<input 
placeholder='upload your  image'
{...register("image")}
 className="box"
accept='image/*'
type="file" />

                <input className="btn" type="submit" />
            </form>





</div>
</div>
);
};

export default StudentAdd;