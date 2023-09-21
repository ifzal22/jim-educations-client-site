import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const StudentAdd = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    e.status = "pending";
    e.date = new Date().toLocaleDateString();
    console.log(e);

    axios
      .post("https://jim-education-751w.onrender.com/student/addStudent", e)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res.data);
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>ADD STUDENT</h3>
          <input
            required
            className="box"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <input
            className="box"
            {...register("email", { required: true })}
            placeholder="Email"
          />

          <textarea
            className="box"
            {...register("description")}
            placeholder="Enter Your Description"
          />

          <div className="input-group mb-3 ">
            <select
              className="form-select box"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              {...register("position")}
            >
              <option selected>Select Your Class</option>
              <option value="Class One">Class One</option>
              <option value="Class Two">Class Two</option>
              <option value="Class Tree">Class Tree</option>

              <option value="Class Four">Class Four</option>
              <option value="Class Five">Class Five</option>
              <option value="Class Six">Class Six</option>
              <option value="Class Seven">Class Seven</option>
              <option value="Class Eight">Class Eight</option>
              <option value="Class Nine">Class Nine</option>
              <option value="Class Ten">Class Ten</option>
              <option value="Class Alim">Class Alim</option>
            </select>
          </div>

          <input className="box" {...register("img")} placeholder="image url" />

          {/* <input 
placeholder='upload your  image'
{...register("image")}
 className="box"
accept='image/*'
type="file" /> */}

          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default StudentAdd;
