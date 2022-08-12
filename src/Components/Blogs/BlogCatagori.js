import React from "react";

const BlogCatagori = () => {
  return (
    <div>
      <div className="col-4">
        <aside id="sidebar" className="px-1">
          {/* <!-- categories --> */}
          <section className="categories">
            <h2 className="text-center text-dark">Categories</h2>

            <a href="#1" className="d-flex justify-content-between text-dark">
              <span>Design</span>
              <span>5</span>
            </a>
            <a href="#1" className="d-flex justify-content-between text-dark">
              <span>Graphic</span>
              <span>8</span>
            </a>
            <a href="#1" className="d-flex justify-content-between text-dark">
              <span>Illistration</span>
              <span>3</span>
            </a>
            <a href="#1" className="d-flex justify-content-between text-dark">
              <span>Fashion</span>
              <span>2</span>
            </a>
          </section>
          {/* 
                    <!-- Trending post --> */}
          <section className="trending-post mt-3">
            <h2 className="text-center text-dark py-2">Trending Post</h2>

            {/* <!-- post-items --> */}
            <div className="post-item py-1">
              <article className="article">
                <div className="d-flex">
                  <a href="#1">
                    <img
                      src="./assets/img1.jpg"
                      className="rounded px-1"
                      alt=""
                    />
                  </a>
                  <div className="cart-body">
                    <div className="trending-category">
                      <a href="#1" className="link text-primary1">
                        Fashion
                      </a>
                    </div>
                    <a href="#1" className="text-title display-2 text-dark">
                      Looking for some feedback for this rejected track
                      technology
                    </a>
                    <p className="secondary-title text-secondary display-3">
                      <span>
                        <i className="far fa-clock text-primary1"></i>
                        Clock Wed 02, 2019
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* <!-- post-items --> */}
            <div className="post-item py-1">
              <article className="article">
                <div className="d-flex">
                  <a href="#1">
                    <img
                      src="./assets/img2.jpg"
                      className="rounded px-1"
                      alt=""
                    />
                  </a>
                  <div className="cart-body">
                    <div className="trending-category">
                      <a href="#" className="link text-primary1">
                        Fashion
                      </a>
                    </div>
                    <a href="#1" className="text-title display-2 text-dark">
                      Looking for some feedback for this rejected track
                      technology
                    </a>
                    <p className="secondary-title text-secondary display-3">
                      <span>
                        <i className="far fa-clock text-primary1"></i>
                        Clock Wed 02, 2019
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* <!-- post-items --> */}

            {/* <!-- post-items --> */}
            <div className="post-item py-1">
              <article className="article">
                <div className="d-flex">
                  <a href="#">
                    <img
                      src="./assets/img4.jpg"
                      className="rounded px-1"
                      alt=""
                    />
                  </a>
                  <div className="cart-body">
                    <div className="trending-category">
                      <a href="#" className="link text-primary1">
                        Fashion
                      </a>
                    </div>
                    <a href="#" className="text-title display-2 text-dark">
                      Looking for some feedback for this rejected track
                      technology
                    </a>
                    <p className="secondary-title text-secondary display-3">
                      <span>
                        <i className="far fa-clock text-primary1"></i>
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
  );
};

export default BlogCatagori;
