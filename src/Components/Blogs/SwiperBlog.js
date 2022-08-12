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
    </>
  );
};
export default SwiperBlog;
