import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header/Header";
import useAuth from "../Hooks/useAuth";
import "./Blog.css";
import SwiperBlog from "./SwiperBlog";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  const { admin } = useAuth();
  useEffect(() => {
    fetch("https://education-web-2.herokuapp.com/blog/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  //   DELETE BLOG
  const DeleteAdmition = (id) => {
    const proceed = window.confirm("Are You Deleted This Admition?");
    if (proceed) {
      axios
        .delete(`https://education-web-2.herokuapp.com/blog/blogs/${id}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            alert("Deleted successfully");
            window.location.reload();
          } else {
          }
        });
      // console.log(id);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="marg " style={{ marginTop: "150px" }}>
        <main id="site-main">
          {/* <!-- Blog Post Section --> */}
          <section id="posts">
            <div className="container">
              <div className="grid row">
                {/* <!-- article --> */}
                {[...blog].reverse().map((p) => (
                  <>
                    <div className="grid-item col-md-4">
                      <article className="article">
                        <div className="card">
                          <div className="overflow-img">
                            <Link to={`/blog/${p._id}`}>
                              <img
                                src={p?.image}
                                className="img-fluid"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="card-body text-center px-1">
                            <Link
                              to={`/blog/${p?._id}`}
                              className="text-title display-1 text-dark"
                            >
                              {p?.title}
                            </Link>
                            <p className="secondary-title text-secondary display-3">
                              <span>
                                <i className="far fa-clock text-primary1"></i>{" "}
                                Clock
                                {p?.date}
                              </span>
                              <span>
                                <i className="far fa-comments text-primary1"></i>
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
                      {/* DELETED */}
                      {admin && (
                        <button
                          style={{ margin: "5px", padding: "5px" }}
                          onClick={() => DeleteAdmition(p?._id)}
                          type="button"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary secondary-title text-light">
                Load More Posts...
              </button>
            </div>
          </section>
          {/* <!-- .Blog Post Section -->

 {/* <!-- .Swiper slider --> */}
          <SwiperBlog></SwiperBlog>
        </main>
      </div>
    </>
  );
};

export default Blogs;
