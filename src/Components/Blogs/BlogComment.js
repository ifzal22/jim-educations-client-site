import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import BlogCommentInfo from "./BlogCommentInfo";
const BlogComment = ({ id }) => {
  console.log(id);
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (e) => {
    e.date = new Date().toLocaleDateString();
    e.id = id;
    e.img = user.photoURL;
    e.name = user.displayName;
    console.log(e);
    axios
      .post("https://education-web-2.herokuapp.com/blog/comment", e)
      .then((res) => {
        if (res.data.insertedId) {
          // console.log(res.data);
          alert("added successfully");
          reset();
          window.location.reload();
        }
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <BlogCommentInfo key={id?._id} id={id}></BlogCommentInfo>
      <div style={{ marginTop: "100px" }} className="">
        <div className="post-comments py-2">
          {/* <!-- comment form --> */}
          <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between flex-wrap">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>

            <textarea
              className="form-control mt-3"
              placeholder="Message"
              rows="4"
              {...register("info", { required: true })}
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary display-2 text-light mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
