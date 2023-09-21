import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ServicesAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isDeleted, setIsDeleted] = useState(null);
  const onSubmit = (e) => {
    e.date = new Date().toLocaleDateString();
    console.log(e);

    axios
      .post("https://jim-education-751w.onrender.com/service/addServices", e)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res.data);
          alert("added successfully");
          reset();
        }
      });
  };
  const DeleteService = (id) => {
    const proceed = window.confirm("Are You Deleted This Admition?");
    if (proceed) {
      axios
        .delete(
          `https://jim-education-751w.onrender.com/deleteService/${id}`,
          {}
        )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            setIsDeleted(true);
            console.log(result.data);
            alert("Deleted successfully");
          } else {
            setIsDeleted(false);
          }
        });
      // console.log(id);
    }
  };
  return (
    <div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>ADD Services</h3>
          <input
            required
            className="box"
            {...register("serviceName", { required: true, maxLength: 20 })}
            placeholder="Services Name"
          />

          <textarea
            className="box"
            {...register("about")}
            placeholder="Enter Your Description"
          />

          <input className="box" {...register("img")} placeholder="image url" />

          <input
            {...register("image")}
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

export default ServicesAdd;
