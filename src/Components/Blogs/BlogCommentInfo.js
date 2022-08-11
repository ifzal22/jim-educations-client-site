import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogCommentInfo = ({ id }) => {
  //   let ID = id.id?.id;
  //   console.log(id[id]);

  const [comment, setComment] = useState([]);
  //   console.log(comment);
  const [specificDetail, setSpecificDetail] = useState([]);
  //   console.log(specificDetail);

  useEffect(() => {
    fetch("http://localhost:5000/blog/comment")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  //   const id1 = id.id.id;
  //   console.log(id1);
  useEffect(() => {
    if (comment) {
      const matchData = comment.find((comment) => console.log(comment?.id));

      setSpecificDetail(matchData);
    }
  }, [comment]);

  //   delete

  //   DELETE BLOG
  const DeleteAdmition = (id) => {
    const proceed = window.confirm("Are You Deleted This Admition?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/blog/comment/${id}`)
        .then((res) => res.json())
        .then((result) => {
          //   console.log(result);
          if (result.deletedCount) {
            alert("Deleted successfully");
            window.location.reload();
          } else {
          }
        });
      // console.log(id);
    }
  };

  return (
    <div className="row">
      <h1 className="mt-3">
        <span className="text-primary">comment</span> {specificDetail?.length}
      </h1>
      {specificDetail?.map((p) => (
        <div className="col-md-4">
          <p>{p?.name} </p>
          <div>
            <div
              style={{ width: "100px", backgroundColor: "#ddd" }}
              className="bg-prymari justify-center text-center mx-auto"
            >
              <img className="w-100 p-2" src={p?.img} alt="" />
              <small>{p?.name} </small> <br />
              <small>{p?.date} </small>
            </div>
            <div
              style={{ backgroundColor: "#ffddddad", borderRadius: "10px" }}
              className=" p-3 round-3"
            >
              <h4>{p?.info} </h4>
            </div>
          </div>
          <button onClick={() => DeleteAdmition(p?._id)} type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogCommentInfo;
