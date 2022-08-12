import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("https://hidden-crag-71902.herokuapp.com/student/students")
      .then((res) => res.json())
      .then((data) => setStudent(data.slice(0, 5)));
  }, []);

  console.log(student);
  return (
    <div>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          {" "}
          brilliant <span>student'S</span>{" "}
        </h1>

        <div className="swiper review-slider shadow">
          {student.length === 0 ? (
            <div className="text-center">
              <CircularProgress />{" "}
            </div>
          ) : (
            <div className="swiper-wrapper row">
              {student.map((p) => (
                <div key={p._id} className=" box col-md-4 shadow">
                  <img src={p?.img} alt="" />
                  <div className="content">
                    <h4>
                      <span
                        style={{ fontSize: "bolder" }}
                        className="text-bold"
                      >
                        {" "}
                        {p.position}
                      </span>
                    </h4>
                    {/* <h4>Position:{p.position} </h4> */}
                    <p>{p.description.slice(0, 100)}</p>
                    <h3>{p.name} </h3>
                    <div className="stars">
                      <button className="btn">about</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="swiper-pagination"></div>
        </div>
      </section>
      <div className="text-center">
        <Link to="/AllStudent" className="btn">
          More Student <i class="fas fa-arrow-right"></i>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Student;
