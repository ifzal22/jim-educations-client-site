import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="marg">
      {/* <!-- home section starts  --> */}

      <section className="home " id="home ">
        <div
          id="carouselExampleControls"
          className="swiper  carousel slide  home-slider"
          data-bs-ride="carousel"
        >
          <div className="swiper-wrapper carousel-inner">
            <div className="carousel-item active ">
              <div
                className="swiper-slide slide "
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)no-repeat",
                  backgroundSize: "auto",
                  objectFit: "cover",
                }}
              >
                <div className="content">
                  <span>JALALABAD</span>
                  <h3
                    style={{ textShadow: " 0 0 3px #FF0000, 0 0 5px #0000FF" }}
                  >
                    Life is a succession of lessons which must be lived to be
                    understood
                  </h3>

                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div
                className="swiper-slide slide "
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)no-repeat",
                  backgroundSize: "auto%",
                }}
              >
                <div className="content">
                  <span>JALALABAD</span>
                  <h3>
                    The school is devoted to the education of children with
                    reading difficulties
                  </h3>
                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div
                className="swiper-slide slide"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)no-repeat",
                  backgroundSize: "auto%",
                }}
              >
                <div className="content">
                  <span>JIM</span>
                  <h3>The purpose of our lives is to be happy</h3>
                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon swiper-button-prev"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon swiper-button-next"
              aria-hidden="true"
            >
              >
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
