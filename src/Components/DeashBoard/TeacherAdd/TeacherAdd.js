import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';






const TeacherAdd = () => {
  const { register, handleSubmit,reset }=useForm();


    const onSubmit = e => {
      e.status = 'pending';
   
    // console.log(e)

        axios.post('http://localhost:5000/teacher/addTeacher',e)
        .then(res =>{
            if (res.data.insertedId) {
                // console.log(res.data)
                alert('added successfully');
                reset();
            }
         
        })


    }
return (
<div>

<div className='login-form-container'>
   




    <form onSubmit={handleSubmit(onSubmit)}>
    <h3>ADD TEACHER</h3>
                <input 
                required
                className="box" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />


                <input 
              
                className="box" {...register("email", { required: true,  })} placeholder="Email" />
                <input 
              
                className="box" {...register("phone", { required: true,  })} placeholder="phone" />
                <input 
              
                className="box" {...register("address", { required: true,  })} placeholder="address" />


                <textarea className="box" {...register("about")} placeholder="Enter Your Description" />

                <div className="input-group mb-3 ">

 <select
 className="form-select box" id="inputGroupSelect03" 
 aria-label="Example select with button addon"
 {...register("position")}>
   <option selected>Select Your Position</option>
   <option value="principal">principal</option>
   <option value="vice-principal">vice-principal</option>
   <option value="Teacher">Teacher</option>
  
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


{/* 
{isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>} */}





{/* <div className="input-group mb-3 ">
 
  <select className="form-select box" id="inputGroupSelect03" 
    onBlur={handleOnBlur}
  type="position"
  aria-label="Example select with button addon">
    <option selected>Select Your Position</option>
    <option value="1">principal</option>
    <option value="2">vice-principal</option>
    <option value="3">Teacher</option>
  </select>
</div>


<div className="input-group mb-3 ">
  <input 
  
  accept='image/*'
  placeholder='Upload Your Photo'
  type="file" className="form-control box" id="inputGroupFile02"/>
  <label className="input-group-text" for="inputGroupFile02">Upload</label>
</div>

<textarea
type="information"
onBlur={handleOnBlur}
className="box" 
placeholder='enter your information'
 cols="20" rows="0">

 </textarea> */}

</div>
</div>
);
};

export default TeacherAdd;