import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Header/Header";
import BlogComment from "./BlogComment";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://hidden-crag-71902.herokuapp.com/blog/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="marg mt-50 " style={{ marginTop: "150px" }}>
        <main id="site-main">
          {/* <!-- Post Content --> */}
          <section className="container">
            <div className="layout-2 row text-center">
              <div className="">
                <article id="post col-md-12">
                  {/* <!-- article heading --> */}
                  <div className="headings text-center">
                    {/*   <div className="category">
                      <img src={blog?.image} className="nav-link" />
                    </div> */}

                    <div className="title">
                      <h2 className="text-title text-dark display-1">
                        {blog?.title}
                      </h2>
                    </div>

                    <div className="meta">
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
                  <div className="thumbnail mt-3 text-center mx-auto">
                    <img src={blog?.image} className="nav-link" />
                  </div>

                  {/* <!-- content --> */}
                  <div className="content text-dark display-2 secondary-title mt-3">
                    <h4 className="text-title display-2 text-dark">
                      {blog?.blog}
                    </h4>
                  </div>
                </article>
                <BlogComment key={blog._id} id={blog._id}></BlogComment>
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
