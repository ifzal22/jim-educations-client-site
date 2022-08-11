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
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="marg mt-50 " style={{ marginTop: "150px" }}>
        <main id="site-main">
          {/* <!-- Post Content --> */}
          <section class="container">
            <div class="layout-2 row text-center">
              <div class="">
                <article id="post col-md-12">
                  {/* <!-- article heading --> */}
                  <div class="headings text-center">
                    {/*   <div class="category">
                      <img src={blog?.image} class="nav-link" />
                    </div> */}

                    <div class="title">
                      <h2 class="text-title text-dark display-1">
                        {blog?.title}
                      </h2>
                    </div>

                    <div class="meta">
                      <a href="#1" class="link display-2 text-secondary px-1">
                        <i class="fas fa-user text-primary1"></i> {blog?.email}
                      </a>
                      <a href="#1" class="link display-2 text-secondary px-1">
                        <i class="fas fa-clock text-primary1"></i> {blog?.date}
                      </a>
                    </div>
                  </div>

                  {/* <!-- thumbnail  --> */}
                  <div class="thumbnail mt-3 text-center mx-auto">
                    <img src={blog?.image} class="nav-link" />
                  </div>

                  {/* <!-- content --> */}
                  <div class="content text-dark display-2 secondary-title mt-3">
                    <p className="text-title display-2 text-dark">
                      {blog?.blog}
                    </p>
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
