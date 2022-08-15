import React from "react";

const BlogOther = () => {
  return (
    <div>
      <div className="post-tags d-flex flex-wrap justify-content-center">
        <a href="#" className="nav-link btn bg-light">
          islamic
        </a>
        <a href="#" className="nav-link btn bg-light">
          science
        </a>
        <a href="#" className="nav-link btn bg-light">
          Lifestyle
        </a>
        <a href="#" className="nav-link btn bg-light">
          Techonogy
        </a>
        <a href="#" className="nav-link btn bg-light">
          artical
        </a>
      </div>
      {/* USER */}
      <div className="post-author text-center">
        <div className="author-avatar">
          <img src="./assets/face/face1.jpg" className="rounded" alt="" />
        </div>

        <div className="author-info py-2">
          <h3 className="text-dark">John Stephens</h3>

          <p className="text-secondary secondary-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, sequi! In harum laborum ipsa voluptatibus doloremque
            nulla, tempore aut veritatis.
          </p>

          <div className="post-tags d-flex flex-wrap justify-content-center">
            <a href="#" className="nav-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="nav-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="nav-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="nav-link">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>{" "}
      <article className="article text-center row">
        <div className="d-flex col-md-6">
          <a href="#">
            <img src="./assets/img9.jpg" className="object-fit" alt="" />
          </a>
          <div className="cart-body px-1">
            <div className="category">
              <a href="#" className="link text-primary1 text-secondary">
                Fashion
              </a>
            </div>
            <a href="#" className="text-title display-1 text-dark">
              Looking for some feedback for this rejected track technology
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogOther;
