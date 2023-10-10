import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";
const NoticeADD = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    e.date = new Date().toLocaleDateString();

    // console.log(e)

    axios.post("http://localhost:5000/Notice/notices", e).then((res) => {
      if (res.data.insertedId) {
        // console.log(res.data)
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>ADD NOTICE</h3>
            <input
              required
              className="box"
              {...register("Title")}
              placeholder="Notice title"
            />

            <textarea
              className="box"
              {...register("about")}
              placeholder="Enter Your Notice"
            />

            {/*  <input  className="box" {...register("img")} placeholder="image url" /> */}

            <input
              placeholder="upload your  image"
              {...register("image")}
              className="box"
              accept="image/*"
              type="file"
            />

            <input className="btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeADD;
