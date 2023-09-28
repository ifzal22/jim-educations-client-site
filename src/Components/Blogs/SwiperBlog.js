import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Loding from "../Loding/Loding";

const SwiperBlog = (data) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [data2, setData] = useState([]);
  useEffect(() => {
    fetch("https://jim-education-751w.onrender.com/blog/blogs")
      .then((e) => e.json())
      .then((data) => setData(data));
  }, []);
  console.log(data2);

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
        {data2.length === 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Loding></Loding>
              </div>
              <div className="col-md-4">
                <Loding></Loding>
              </div>
              <div className="col-md-4">
                <Loding></Loding>
              </div>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {[...data2].reverse().map((p) => (
              <>
                <div className="swiper-slide text-center mx-auto container">
                  <Link to={`/blog/${p._id}`}>
                    <LazyLoad>
                      {" "}
                      <img
                        style={{ width: "40%", margin: "auto" }}
                        src={p?.image}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </LazyLoad>
                  </Link>
                  <div className="card-body text-center px-3 mt-3 ">
                    <Link
                      to={`/blog/${p?._id}`}
                      className="text-title display-1 text-dark"
                    >
                      <span style={{ fontSize: "80%" }}> {p?.title}</span>
                    </Link>
                    <p className="secondary-title text-secondary display-3">
                      <span>
                        <i className="far fa-clock text-primary1"></i> Clock{" "}
                        {p?.date}
                      </span>
                      <span>
                        <i className="far fa-comments text-primary1"></i> 12
                      </span>
                    </p>
                  </div>
                </div>
              </>
            ))}

            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
            <div className="swiper-slide"></div>
          </Slider>
        )}
      </div>
    </>
  );
};
export default SwiperBlog;
