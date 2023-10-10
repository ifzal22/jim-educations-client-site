import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Header from "../../Home/Header/Header";
import Loding from "../../Loding/Loding";
const AllTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/teacher/teachers")
      .then((res) => res.json())
      .then((data) => setTeacher(data?.slice()));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="marg">
        <section className="reviews" id="reviews">
          <h1 className="heading">
            {" "}
            JIM <span>TEACHER'S</span>{" "}
          </h1>

          <div className="swiper review-slider">
            <div className="swiper-wrapper row">
              {teacher.length === 0 ? (
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
                <>
                  {teacher?.map((p) => (
                    <div className=" box col-md-4 shadow-lg">
                      <LazyLoad height={500} offset={300}>
                        <img
                          src={`data:image/jpeg;base64,${p.image}`}
                          alt="Lazy Loaded "
                          loading="lazy load"
                        />
                        {/* <img src="your-image-source.jpg" alt="Lazy Loaded Image" /> */}
                      </LazyLoad>
                      <div className="content">
                        <h3>{p?.name} </h3>
                        <p>{p.about} .</p>
                        <h3>{p.cetagory} </h3>
                        <div className="stars">
                          <div className="text-center ">
                            {" "}
                            <Link to={`/about/${p._id}`}>
                              {" "}
                              <button className="btn shadow-lg m-3">
                                more
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllTeacher;
