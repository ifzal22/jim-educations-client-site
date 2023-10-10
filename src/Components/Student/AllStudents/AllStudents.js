import { useEffect, useState } from "react";
import Header from "../../Home/Header/Header";
import Loding from "../../Loding/Loding";

const AllStudents = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/student/students")
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  console.log(student);
  return (
    <>
      <Header></Header>
      <div className="marg">
        <section className="reviews" id="reviews">
          <h1 className="heading">
            {" "}
            JIM <span>student'S</span>{" "}
          </h1>

          <div className="swiper review-slider shadow">
            {student.length === 0 ? (
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
              <div className="swiper-wrapper row">
                {student.map((p) => (
                  <div key={p._id} className=" box col-md-4 shadow">
                    <img src={p?.img} alt="" />
                    <div className="content">
                      <h4 className="font-weight-bold"> {p.position}:</h4>
                      {/* <h4>Position:{p.position} </h4> */}
                      <p>{p.description.slice(0, 50)}.</p>
                      <h3>{p.name} </h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllStudents;
