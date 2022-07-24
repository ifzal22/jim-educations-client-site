import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isDeleted, setIsDeleted] = useState(null);
  const onSubmit = (e) => {
    e.date = new Date().toLocaleDateString();
    // console.log(e)
    axios.post("http://localhost:5000/blog/blogs", e).then((res) => {
      if (res.data.insertedId) {
        // console.log(res.data)
        alert("added successfully");
        reset();
      }
    });
  };
  // DELETE BLOG
  const DeleteBlog = (id) => {
    const proceed = window.confirm("Are You Deleted This BLOG?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/DeleteBlog/${id}`, {})
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
      <div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>ADD BOLG</h3>
            <input
              required
              className="box"
              {...register("name")}
              placeholder="blog title"
            />

            <input
              className="box"
              {...register("email", { required: true })}
              placeholder="Email"
            />

            <textarea
              style={{ height: "100px" }}
              className="box "
              {...register("about")}
              placeholder="Enter Your Blog"
            />

            <div className="input-group mb-3 ">
              <label>
                Select Catagor
                <select
                  className="form-select box"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  {...register("catagori")}
                >
                  <option value="principal">islamin</option>
                  <option value="vice-principal">science</option>
                  <option value="Teacher">education</option>
                </select>
              </label>
            </div>

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

export default AddBlog;
