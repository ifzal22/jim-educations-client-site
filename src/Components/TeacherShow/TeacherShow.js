import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TeacherShow.css";

const TeacherShow = () => {
  const [teacher, setTeacher] = useState([]);
  const [specificDetail, setSpecificDetail] = useState([]);

  // const {image,cetagory,about,name} = specificDetail;

  useEffect(() => {
    fetch("https://education-web-2.herokuapp.com/teacher/teachers")
      .then((res) => res.json())
      .then((data) => setTeacher(data.slice(0, 3)));
  }, []);

  useEffect(() => {
    if (teacher.length > 0) {
      const matchData = teacher.filter((deatil) => deatil.roll === "head");

      setSpecificDetail(matchData);
    }
  }, [teacher]);

  // console.log(specificDetail)

  return (
    <div className="mt-5">
      <section className="reviews" id="reviews">
        <h1 className="heading">
          {" "}
          JIM <span>TEACHER'S</span>{" "}
        </h1>

        <div className="swiper review-slider">
          <div className="swiper-wrapper row">
            {specificDetail?.map((p) => (
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
      <div className="text-center">
        <Link to="/AllTeacher" className="btn">
          More Projects <i className="fas fa-arrow-right"></i>{" "}
        </Link>
      </div>
    </div>
  );
};

export default TeacherShow;
