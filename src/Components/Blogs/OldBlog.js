import React from "react";

const OldBlog = () => {
  return (
    <div>
      <div class="post-item py-1 row">
        <article class="article row">
          <div class="d-flex">
            <a href="#">
              <img src="./assets/img3.jpg" class="rounded px-1" alt="" />
            </a>
            <div class="cart-body">
              <div class="trending-category">
                <a href="#" class="link text-primary1">
                  Fashion
                </a>
              </div>
              <a href="#" class="text-title display-2 text-dark">
                Looking for some feedback for this rejected track technology
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
    </div>
  );
};

export default OldBlog;
