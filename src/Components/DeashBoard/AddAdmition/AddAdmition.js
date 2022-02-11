import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';






const AddAdmition = () => {

  const { register, handleSubmit,reset }=useForm({
    mode: "onBlur"
  });

//   const [image, setImage] = useState(null);


// IMAGE HANDLE

const fileInput = React.createRef();

  
    const onSubmitFn = data => {
        console.log(
            "onSubmitFn:",
            data,
            "  imageFile: ",
            fileInput.current.files[0].name
          );
          const fd = new FormData();
          for (var key in data) {
            fd.append(key, data[key]); // formdata doesn't take objects
          }
          console.log(fd)
          fd.append(
            "image",
            fileInput.current.files[0],
            fileInput.current.files[0].name
          );


   
  
    

  

        axios.post('http://localhost:5000/AddAdmition',fd,
        {
            onUploadProgress: ProgressEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                  "%"
              );
            }
          })
          .then(res => {
            if (res.data.insertedId) {
                console.log(res)
                alert('added successfully');
                reset();
            }
            console.log("response from server: ", res);
          })
        
    


    }
return (
<div>

<div className='login-form-container'>
   




    <form onSubmit={handleSubmit(onSubmitFn)}>
    <h3>ADD Admition</h3>
                <input 
                required
                className="box" {...register("title", { required: true, maxLength: 20 })} placeholder="Services Name" />
                <input 
                required
                className="box" {...register("price", { required: true, maxLength: 20 })} placeholder="Admition Price" />

               


                <textarea className="box" {...register("about")} placeholder="Enter Your Description" />

      
                
                <input  className="box" {...register("image1")} placeholder="image url" />


                <label htmlFor="avatar">Select a Photo</label>
          <input
           className="box"
            type="file"
            id="avatar"
            name="avatar"
            multiple
            ref={fileInput}
          />





                <input className="btn" type="submit" />
            </form>





</div>
</div>
);
};

export default AddAdmition;