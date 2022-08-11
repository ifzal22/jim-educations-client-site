import React from "react";

const BlogCatagori = () => {
  return (
    <div>
      <div class="col-4">
        <aside id="sidebar" class="px-1">
          {/* <!-- categories --> */}
          <section class="categories">
            <h2 class="text-center text-dark">Categories</h2>

            <a href="#1" class="d-flex justify-content-between text-dark">
              <span>Design</span>
              <span>5</span>
            </a>
            <a href="#1" class="d-flex justify-content-between text-dark">
              <span>Graphic</span>
              <span>8</span>
            </a>
            <a href="#1" class="d-flex justify-content-between text-dark">
              <span>Illistration</span>
              <span>3</span>
            </a>
            <a href="#1" class="d-flex justify-content-between text-dark">
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
                  <a href="#1">
                    <img src="./assets/img1.jpg" class="rounded px-1" alt="" />
                  </a>
                  <div class="cart-body">
                    <div class="trending-category">
                      <a href="#1" class="link text-primary1">
                        Fashion
                      </a>
                    </div>
                    <a href="#1" class="text-title display-2 text-dark">
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
                  <a href="#1">
                    <img src="./assets/img2.jpg" class="rounded px-1" alt="" />
                  </a>
                  <div class="cart-body">
                    <div class="trending-category">
                      <a href="#" class="link text-primary1">
                        Fashion
                      </a>
                    </div>
                    <a href="#1" class="text-title display-2 text-dark">
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

            {/* <!-- post-items --> */}
            <div class="post-item py-1">
              <article class="article">
                <div class="d-flex">
                  <a href="#">
                    <img src="./assets/img4.jpg" class="rounded px-1" alt="" />
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
  );
};

export default BlogCatagori;
