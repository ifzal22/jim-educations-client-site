import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddResult = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    console.log(e);

    axios
      .post("https://hidden-crag-71902.herokuapp.com/result/Addresult", e)
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
          <h3>ADD Result</h3>
          <input
            required
            className="box"
            {...register("title", { required: true })}
            placeholder="Services Name"
          />

          <textarea
            className="box"
            {...register("information")}
            placeholder="Enter Your Description"
          />

          <input
            className="box"
            {...register("image")}
            placeholder="image url"
          />

          <input
            {...register("ima")}
            className="box"
            accept="image/*"
            placeholder="upload service  image"
            type="file"
          />

          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddResult;
