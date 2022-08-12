import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Home/Header/Header";

const AllTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("https://hidden-crag-71902.herokuapp.com/teacher/teachers")
      .then((res) => res.json())
      .then((data) => setTeacher(data.slice()));
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
              {teacher?.map((p) => (
                <div className=" box col-md-4 shadow-lg">
                  <img src={p?.image} alt="" />
                  <div className="content">
                    <h3>{p?.cetagory} </h3>
                    <p>{p.about} .</p>
                    <h3>{p.name} </h3>
                    <div className="stars">
                      <div className="text-center ">
                        {" "}
                        <Link to={`/about/${p._id}`}>
                          {" "}
                          <button className="btn shadow-lg m-3">more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllTeacher;
