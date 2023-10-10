import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Header/Header";
import BlogComment from "./BlogComment";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/blog/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, [id]);
  return (
    <div>
      <Header></Header>
      <div className="marg mt-50 " style={{ marginTop: "150px" }}>
        <main id="site-main">
          {/* <!-- Post Content --> */}
          <section className="container text-center">
            <div className="">
              <div className="">
                <article id=" row ">
                  {/* <!-- article heading --> */}
                  <div className="">
                    <div className="col-md-6">
                      <div className="">
                        <h2 className="">{blog?.title}</h2>
                      </div>

                      <div className="">
                        <a
                          href="#1"
                          className="link display-2 text-secondary px-1"
                        >
                          <i className="fas fa-user text-primary1"></i>{" "}
                          {blog?.email}
                        </a>
                        <a
                          href="#1"
                          className="link display-2 text-secondary px-1"
                        >
                          <i className="fas fa-clock text-primary1"></i>{" "}
                          {blog?.date}
                        </a>
                      </div>
                    </div>

                    {/* <!-- thumbnail  --> */}
                    <div className="col-md-6">
                      <img
                        style={{ borderRadius: "10%" }}
                        src={blog?.image}
                        className="w-100"
                        alt="lazy load"
                      />
                    </div>
                  </div>

                  {/* <!-- content --> */}
                  <div className="">
                    <div className=" text-dark   ">
                      <h4 className="text-title  text-dark">{blog?.blog}</h4>
                    </div>
                  </div>
                </article>
                <div className="row container">
                  <div className="col-md-6">
                    {" "}
                    <BlogComment key={blog._id} id={blog._id}></BlogComment>
                  </div>
                </div>

                {/* <!-- .post footer --> */}
              </div>
            </div>
          </section>
          {/* <!-- .Post Content --> */}
        </main>
      </div>
    </div>
  );
};

export default Blog;
