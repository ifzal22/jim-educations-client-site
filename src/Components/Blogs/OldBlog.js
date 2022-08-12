import React from "react";

const OldBlog = () => {
  return (
    <div>
      <div className="post-item py-1 row">
        <article className="article row">
          <div className="d-flex">
            <a href="#">
              <img src="./assets/img3.jpg" className="rounded px-1" alt="" />
            </a>
            <div className="cart-body">
              <div className="trending-category">
                <a href="#" className="link text-primary1">
                  Fashion
                </a>
              </div>
              <a href="#" className="text-title display-2 text-dark">
                Looking for some feedback for this rejected track technology
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
    </div>
  );
};

export default OldBlog;
