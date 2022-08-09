import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Header/Header";

const Blog = () => {
  const [blog, setBlog] = useState({});
  console.log(blog);
  const { ID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/blog/blogs/${ID}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <Header></Header>

      <div className="marg mt-50" style={{ marginTop: "150px" }}>
        <main id="site-main">
          {/* <!-- Post Content --> */}
          <section class="container">
            <div class="layout-2 row">
              <div class="col-8">
                <article id="post">
                  {/* <!-- article heading --> */}
                  <div class="headings text-center">
                    <div class="category">
                      <a href={blog?.image} class="nav-link"></a>
                    </div>

                    <div class="title">
                      <h2 class="text-title text-dark display-1">
                        {blog?.title}
                      </h2>
                    </div>

                    <div class="meta">
                      <a href="#" class="link display-2 text-secondary px-1">
                        <i class="fas fa-user text-primary1"></i> {blog?.email}
                      </a>
                      <a href="#" class="link display-2 text-secondary px-1">
                        <i class="fas fa-clock text-primary1"></i> {blog?.date}
                      </a>
                    </div>
                  </div>

                  {/* <!-- thumbnail  --> */}
                  <div class="thumbnail mt-3 ">
                    <img
                      src="https://1bu43cffaa4jz.cdn.shift8web.com/wp-content/uploads/2022/06/fatwaa-banner.jpg"
                      class="thumbnail w-100"
                      alt=""
                    />
                  </div>

                  {/* <!-- content --> */}
                  <div class="content text-dark display-2 secondary-title mt-3">
                    <p>{blog?.blog}</p>
                    <p></p>
                    <p></p>
                  </div>
                </article>

                {/* <!-- post footer --> */}
                <div class="post-footer mb-3">
                  <div class="post-tags d-flex flex-wrap justify-content-center">
                    <a href="#" class="nav-link btn bg-light">
                      islamic
                    </a>
                    <a href="#" class="nav-link btn bg-light">
                      science
                    </a>
                    <a href="#" class="nav-link btn bg-light">
                      Lifestyle
                    </a>
                    <a href="#" class="nav-link btn bg-light">
                      Techonogy
                    </a>
                    <a href="#" class="nav-link btn bg-light">
                      artical
                    </a>
                  </div>
                  {/* USER */}
                  <div class="post-author text-center">
                    <div class="author-avatar">
                      <img
                        src="./assets/face/face1.jpg"
                        class="rounded"
                        alt=""
                      />
                    </div>

                    <div class="author-info py-2">
                      <h3 class="text-dark">John Stephens</h3>

                      <p class="text-secondary secondary-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Recusandae, sequi! In harum laborum ipsa
                        voluptatibus doloremque nulla, tempore aut veritatis.
                      </p>

                      <div class="post-tags d-flex flex-wrap justify-content-center">
                        <a href="#" class="nav-link">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="nav-link">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="nav-link">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="nav-link">
                          <i class="fab fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- post related --> */}
                  <div class="post-realted py-2">
                    <div class="row justify-content-center ">
                      <div class="prev ">
                        <div class="py-2">
                          <a href="#" class="display-2 text-dark">
                            <i class="fas fa-chevron-left"></i>
                            Previous Post
                          </a>
                        </div>
                        <article class="article text-center row">
                          <div class="d-flex col-md-6">
                            <a href="#">
                              <img
                                src="./assets/img9.jpg"
                                class="object-fit"
                                alt=""
                              />
                            </a>
                            <div class="cart-body px-1">
                              <div class="category">
                                <a
                                  href="#"
                                  class="link text-primary1 text-secondary"
                                >
                                  Fashion
                                </a>
                              </div>
                              <a
                                href="#"
                                class="text-title display-1 text-dark"
                              >
                                Looking for some feedback for this rejected
                                track technology
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div class="next text-right">
                        <div class="py-2">
                          <a href="#" class="display-2 text-dark">
                            Next Post
                            <i class="fas fa-chevron-right"></i>
                          </a>
                        </div>
                        <article class="article text-center">
                          <div class="d-flex col-md-4">
                            <a href="#">
                              <img
                                src="./assets/img8.jpg"
                                class="object-fit"
                                alt=""
                              />
                            </a>
                            <div class="cart-body px-1">
                              <div class="category">
                                <a
                                  href="#"
                                  class="link text-primary1 text-secondary"
                                >
                                  Fashion
                                </a>
                              </div>
                              <a
                                href="#"
                                class="text-title display-1 text-dark"
                              >
                                Looking for some feedback for this rejected
                                track technology
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>

                  {/* <!-- comments --> */}
                  <div class="post-comments py-2">
                    <h3 class="text-center display-1 secondary-title py-2">
                      5 Comments
                    </h3>

                    <div class="comment-details">
                      <div class="comment-item py-2">
                        <div class="d-flex">
                          <div class="avatar px-2">
                            <img
                              src="./assets/face/face1.jpg"
                              class="rounded"
                              alt=""
                            />
                          </div>
                          <div class="comment-content">
                            <h5 class="display-2 m-0">Brandon Kelly</h5>
                            <p class="title-secondary text-dark">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              aliqua. Quis ipsum suspendisse ultrices gravida
                              lacus vel facilisis.
                            </p>
                          </div>
                        </div>

                        {/* <!-- comment reply --> */}
                        <div class="reply py-2">
                          <div class="d-flex">
                            <div class="avatar px-2">
                              <img
                                src="./assets/face/face2.jpg"
                                class="rounded"
                                alt=""
                              />
                            </div>
                            <div class="comment-content">
                              <h5 class="display-2 m-0">Brandon Kelly</h5>
                              <p class="title-secondary text-dark">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore aliqua. Quis ipsum
                                suspendisse ultrices gravida lacus vel
                                facilisis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="comment-item py-2">
                        <div class="d-flex">
                          <div class="avatar px-2">
                            <img
                              src="./assets/face/face3.jpg"
                              class="rounded"
                              alt=""
                            />
                          </div>
                          <div class="comment-content">
                            <h5 class="display-2 m-0">Brandon Kelly</h5>
                            <p class="title-secondary text-dark">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              aliqua. Quis ipsum suspendisse ultrices gravida
                              lacus vel facilisis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- comment form --> */}
                    <div class="comment-form">
                      <h3 class="text-center display-1 secondary-title py-2">
                        Leave Comment
                      </h3>

                      <div class="d-flex justify-content-between flex-wrap">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Website"
                        />
                      </div>

                      <textarea
                        class="form-control mt-3"
                        placeholder="Message"
                        rows="10"
                      ></textarea>
                      <div class="text-center">
                        <button class="btn btn-primary display-2 text-light mt-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- .post footer --> */}
              </div>
              <div class="col-4">
                <aside id="sidebar" class="px-1">
                  {/* <!-- categories --> */}
                  <section class="categories">
                    <h2 class="text-center text-dark">Categories</h2>

                    <a
                      href="#"
                      class="d-flex justify-content-between text-dark"
                    >
                      <span>Design</span>
                      <span>5</span>
                    </a>
                    <a
                      href="#"
                      class="d-flex justify-content-between text-dark"
                    >
                      <span>Graphic</span>
                      <span>8</span>
                    </a>
                    <a
                      href="#"
                      class="d-flex justify-content-between text-dark"
                    >
                      <span>Illistration</span>
                      <span>3</span>
                    </a>
                    <a
                      href="#"
                      class="d-flex justify-content-between text-dark"
                    >
                      <span>Fashion</span>
                      <span>2</span>
                    </a>
                  </section>
                  {/* 
                    <!-- Trending post --> */}
                  <section class="trending-post mt-3">
                    <h2 class="text-center text-dark py-2">Trending Post</h2>

                    {/* <!-- post-items --> */}
                    <div class="post-item py-1">
                      <article class="article">
                        <div class="d-flex">
                          <a href="#">
                            <img
                              src="./assets/img1.jpg"
                              class="rounded px-1"
                              alt=""
                            />
                          </a>
                          <div class="cart-body">
                            <div class="trending-category">
                              <a href="#" class="link text-primary1">
                                Fashion
                              </a>
                            </div>
                            <a href="#" class="text-title display-2 text-dark">
                              Looking for some feedback for this rejected track
                              technology
                            </a>
                            <p class="secondary-title text-secondary display-3">
                              <span>
                                <i class="far fa-clock text-primary1"></i>
                                Clock Wed 02, 2019
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* <!-- post-items --> */}
                    <div class="post-item py-1">
                      <article class="article">
                        <div class="d-flex">
                          <a href="#">
                            <img
                              src="./assets/img2.jpg"
                              class="rounded px-1"
                              alt=""
                            />
                          </a>
                          <div class="cart-body">
                            <div class="trending-category">
                              <a href="#" class="link text-primary1">
                                Fashion
                              </a>
                            </div>
                            <a href="#" class="text-title display-2 text-dark">
                              Looking for some feedback for this rejected track
                              technology
                            </a>
                            <p class="secondary-title text-secondary display-3">
                              <span>
                                <i class="far fa-clock text-primary1"></i>
                                Clock Wed 02, 2019
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* <!-- post-items --> */}
                    <div class="post-item py-1">
                      <article class="article">
                        <div class="d-flex">
                          <a href="#">
                            <img
                              src="./assets/img3.jpg"
                              class="rounded px-1"
                              alt=""
                            />
                          </a>
                          <div class="cart-body">
                            <div class="trending-category">
                              <a href="#" class="link text-primary1">
                                Fashion
                              </a>
                            </div>
                            <a href="#" class="text-title display-2 text-dark">
                              Looking for some feedback for this rejected track
                              technology
                            </a>
                            <p class="secondary-title text-secondary display-3">
                              <span>
                                <i class="far fa-clock text-primary1"></i>
                                Clock Wed 02, 2019
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* <!-- post-items --> */}
                    <div class="post-item py-1">
                      <article class="article">
                        <div class="d-flex">
                          <a href="#">
                            <img
                              src="./assets/img4.jpg"
                              class="rounded px-1"
                              alt=""
                            />
                          </a>
                          <div class="cart-body">
                            <div class="trending-category">
                              <a href="#" class="link text-primary1">
                                Fashion
                              </a>
                            </div>
                            <a href="#" class="text-title display-2 text-dark">
                              Looking for some feedback for this rejected track
                              technology
                            </a>
                            <p class="secondary-title text-secondary display-3">
                              <span>
                                <i class="far fa-clock text-primary1"></i>
                                Clock Wed 02, 2019
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </section>
                </aside>
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
