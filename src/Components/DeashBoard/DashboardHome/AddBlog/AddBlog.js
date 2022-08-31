import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    e.date = new Date().toLocaleDateString();
    // console.log(e)
    axios
      .post("https://education-web-2.herokuapp.com/blog/blogs", e)
      .then((res) => {
        if (res.data.insertedId) {
          // console.log(res.data)
          alert("added successfully");
          reset();
        }
      });
  };
  // DELETE BLOG

  return (
    <div>
      <div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>ADD BOLG</h3>
            <input
              required
              className="box"
              {...register("title")}
              placeholder="blog title"
            />

            <input
              className="box"
              {...register("email", { required: true })}
              placeholder="Email"
            />

            <textarea
              style={{
                height: "100px",
                background: "",
                color: "black",
                fontSize: "20px",
              }}
              className="box  "
              {...register("blog")}
              placeholder="Enter Your Blog"
            />

            <input
              placeholder=" your  blog cetagori write"
              {...register("catagori")}
              className="box"
            />

            {/*  <input  className="box" {...register("img")} placeholder="image url" /> */}

            <input
              placeholder=" your  image Link"
              {...register("image")}
              className="box"
            />

            <input className="btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
