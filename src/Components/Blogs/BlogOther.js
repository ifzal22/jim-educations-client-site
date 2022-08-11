import React from "react";

const BlogOther = () => {
  return (
    <div>
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
          <img src="./assets/face/face1.jpg" class="rounded" alt="" />
        </div>

        <div class="author-info py-2">
          <h3 class="text-dark">John Stephens</h3>

          <p class="text-secondary secondary-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, sequi! In harum laborum ipsa voluptatibus doloremque
            nulla, tempore aut veritatis.
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
      </div>{" "}
      <article class="article text-center row">
        <div class="d-flex col-md-6">
          <a href="#">
            <img src="./assets/img9.jpg" class="object-fit" alt="" />
          </a>
          <div class="cart-body px-1">
            <div class="category">
              <a href="#" class="link text-primary1 text-secondary">
                Fashion
              </a>
            </div>
            <a href="#" class="text-title display-1 text-dark">
              Looking for some feedback for this rejected track technology
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogOther;
