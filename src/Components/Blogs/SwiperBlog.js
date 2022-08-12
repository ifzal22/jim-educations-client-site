import React from "react";
import Slider from "react-slick";

const SwiperBlog = (data) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className=" container">
        <h3
          style={{ color: "white", textShadow: "2px 2px 4px #000000" }}
          className="heading "
        >
          {" "}
          More <span style={{ color: "yellow" }}>Blogs</span>{" "}
        </h3>
        <Slider {...settings}>
          <div className="swiper-slide text-center mx-auto container">
            <a href="#">
              <img
                style={{ width: "40%", margin: "auto" }}
                src="https://i.ibb.co/dpWf6Kj/content-shutterstock-1211223958-3.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
            <div className="card-body text-center px-3 mt-3 ">
              <a href="#" className="text-title display-1 text-dark">
                <span style={{ fontSize: "80%" }}>
                  {" "}
                  Looking for some feedback for this rejected track technology
                </span>
              </a>
              <p className="secondary-title text-secondary display-3">
                <span>
                  <i className="far fa-clock text-primary1"></i> Clock Wed 02,
                  2021
                </span>
                <span>
                  <i className="far fa-comments text-primary1"></i> 12
                </span>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <a href="#">
              <img
                style={{ width: "40%", margin: "auto" }}
                src="https://i.ibb.co/Dg0P8Pq/108230283.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
            <div className="card-body text-center px-1">
              <a href="#" className="text-title display-1 text-dark">
                <span style={{ fontSize: "80%" }}>
                  {" "}
                  Looking for some feedback for this rejected track technology
                </span>
              </a>
              <p className="secondary-title text-secondary display-3">
                <span>
                  <i className="far fa-clock text-primary1"></i> Clock Wed 02,
                  2021
                </span>
                <span>
                  <i className="far fa-comments text-primary1"></i> 12
                </span>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <a href="#">
              <img
                style={{ width: "40%", margin: "auto" }}
                src="https://i.ibb.co/MNn4p0f/3e0b3361b1f355d3e3d8d27f3489dd59.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
            <div className="card-body text-center px-1">
              <a href="#" className="text-title display-1 text-dark">
                <span style={{ fontSize: "80%" }}>
                  {" "}
                  Looking for some feedback for this rejected track technology
                </span>
              </a>
              <p className="secondary-title text-secondary display-3">
                <span>
                  <i className="far fa-clock text-primary1"></i> Clock Wed 02,
                  2021
                </span>
                <span>
                  <i className="far fa-comments text-primary1"></i> 12
                </span>
              </p>
            </div>
          </div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
        </Slider>
      </div>

      <footer id="footer" className="marg">
        <div className="container">
          <div className="row mb-3">
            <div className="col-3">
              <h2 className="footer-title secondary-title">About Us</h2>

              <div className="secondary-title text-secondary">
                <p className="mt-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt quis voluptate alias illum modi tenetur, iste
                  voluptatem illo. Accusantium, corrupti!
                </p>

                <address>
                  <i className="fas fa-map-marker-alt text-primary1 p-3"></i>5
                  South Main Street Los Angeles, ZZ-96110 USA
                </address>

                <div className="phone">
                  <i className="fas fa-mobile text-primary1 p-3"></i>
                  125-896-485
                </div>

                <div className="email">
                  <i className="fas fa-envelope text-primary1 p-3"></i>
                  dailysupport@gmail.com
                </div>
              </div>
            </div>

            <div className="col-3">
              <h2 className="footer-title secondary-title">Feature Post</h2>

              <div className="feature-post">
                <div className="flex-item">
                  <article className="article">
                    <div className="d-flex">
                      <a href="#">
                        <img
                          src="https://i.ibb.co/Dg0P8Pq/108230283.jpg"
                          className="object-fit px-1"
                          alt=""
                        />
                        <div className="px-1">
                          <a
                            href="#"
                            className="text-title display-2 text-dark"
                          >
                            Looking for some feedback for this rejected track
                            technology
                          </a>
                          <p className="secondary-title text-secondary display-3">
                            <span>
                              <i className="far fa-clock text-primary1"></i>{" "}
                              Clock Wed 02, 2021{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="flex-item">
                  <article className="article">
                    <div className="d-flex">
                      <a href="#">
                        <img
                          src="https://i.ibb.co/Dg0P8Pq/108230283.jpg"
                          className="object-fit px-1"
                          alt=""
                        />
                        <div className="px-1">
                          <a
                            href="#"
                            className="text-title display-2 text-dark"
                          >
                            Looking for some feedback for this rejected track
                            technology
                          </a>
                          <p className="secondary-title text-secondary display-3">
                            <span>
                              <i className="far fa-clock text-primary1"></i>{" "}
                              Clock Wed 02, 2021{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="flex-item">
                  <article className="article">
                    <div className="d-flex">
                      <a href="#">
                        <img
                          src="https://i.ibb.co/dpWf6Kj/content-shutterstock-1211223958-3.jpg"
                          className="object-fit px-1"
                          alt=""
                        />
                        <div className="px-1">
                          <a
                            href="#"
                            className="text-title display-2 text-dark"
                          >
                            Looking for some feedback for this rejected track
                            technology
                          </a>
                          <p className="secondary-title text-secondary display-3">
                            <span>
                              <i className="far fa-clock text-primary1"></i>{" "}
                              Clock Wed 02, 2021{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h2 className="footer-title secondary-title">Tags</h2>

              <div className="tags">
                <div className="d-flex flex-wrap">
                  <a href="#" className="nav-link btn bg-light">
                    Travel
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    Food
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    Lifestyle
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    Techonogy
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    Fashion
                  </a>
                </div>
              </div>

              <h2 className="footer-title secondary-title mt-2">Social</h2>

              <div className="tags social">
                <div className="d-flex flex-wrap">
                  <a href="#" className="nav-link btn bg-light">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="nav-link btn bg-light">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyrights  --> */}
          <div className="copyrights">
            <p className="text-center text-secondary display-2">
              © 2021{" "}
              <a href="#" className="text-primary">
                Dailytuition
              </a>{" "}
              - Personal Blog Theme. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default SwiperBlog;
