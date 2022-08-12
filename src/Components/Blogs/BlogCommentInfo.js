import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const BlogCommentInfo = ({ id }) => {
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  const [comment, setComment] = useState([]);
  const [specificDetail, setSpecificDetail] = useState([]);
  const { user } = useAuth();
  // const {image,cetagory,about,name} = specificDetail;

  useEffect(() => {
    fetch("https://hidden-crag-71902.herokuapp.com/blog/comment")
      .then((res) => res.json())
      .then((data) => setComment(data.slice()));
  }, []);

  useEffect(() => {
    if (comment) {
      const matchData = comment.filter((deatil) => deatil?.id === id);

      setSpecificDetail(matchData);
    }
  }, [comment]);

  //   delete

  //   DELETE BLOG
  const DeleteAdmition = (id) => {
    const proceed = window.confirm("Are You Deleted This Admition?");
    if (proceed) {
      axios
        .delete(`https://hidden-crag-71902.herokuapp.com/blog/comment/${id}`)
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
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="container ">
      <h1 className="mt-3">
        <span className="text-primary">comment</span> {specificDetail.length}
      </h1>
      <div className="row -deck">
        <div className="d-flex">
          {specificDetail?.map((p) => (
            <div className="col-md-4">
              <div className="card">
                <div
                  style={{ width: "100px", backgroundColor: "#ddd" }}
                  className=" text-center mx-auto"
                >
                  <img className=" p-2" src={p?.img} alt="" />
                  <small>{p?.name} </small> <br />
                  <small>{p?.date} </small>
                </div>

                <div
                  style={{
                    backgroundColor: "#ffddddad",
                    borderRadius: "10px",
                  }}
                  className=" p-3 round-3  "
                >
                  <p className="text-bold">{p?.info} </p>
                </div>
              </div>

              {user.email && (
                <button onClick={() => DeleteAdmition(p?._id)} type="button">
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      >
    </div>
  );
};

export default BlogCommentInfo;
