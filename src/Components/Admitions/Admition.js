import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admition.css";
const Admition = () => {
  const [admit, setAdmit] = useState([]);
  useEffect(() => {
    fetch("https://jim-education-751w.onrender.com/Admition/admition")
      .then((res) => res.json())
      .then((data) => setAdmit(data.slice(0, 3)));
  }, []);
  return (
    <div>
      <h1 className="heading">
        {" "}
        JIM <span>ADMITION</span>{" "}
      </h1>
      <section className="featured" id="featured">
        <div className=" featured-slider">
          {admit.length === 0 ? (
            <div className="text-center">
              <CircularProgress />
            </div>
          ) : (
            <div className=" row">
              {[...admit].reverse().map((p) => (
                <div className=" box col-md-4 shadow p-2 g-2 ">
                  <img src={`data:image/jpeg;base64,${p.image}`} alt="" />
                  <div className="content">
                    <h3>{p.admition.title}</h3>
                    <div className="stars">
                      <p>{p.admition.about.slice(0, 100)} </p>
                    </div>

                    <p> </p>
                    <div className="price">$ {p.admition.price}/-</div>
                    <Link to={`/admition/${p._id}`} href="#" className="btn">
                      check out
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <div className="text-center">
        <Link to="/admitionAll" className="btn">
          More Projects <i className="fas fa-arrow-right"></i>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Admition;
