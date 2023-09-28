import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loding from "../Loding/Loding";
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://jim-education-751w.onrender.com/service/services")
      .then((res) => res.json())
      .then((data) => setService(data?.slice(0, 3)));
  }, []);
  return (
    <>
      <div className="container mx-auto justify-content-center">
        <h1
          style={{ color: "white", textShadow: "2px 2px 4px #000000" }}
          className="heading "
        >
          {" "}
          OUR <span style={{ color: "yellow" }}>Service'S</span>{" "}
        </h1>

        {service?.length === 0 ? (
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
          <div className="row   ">
            {service?.map((p) => (
              <div
                id="container"
                className="col-md-4 m-0"
                style={{
                  background: `url(${p?.image})no-repeat`,
                  backgroundSize: "100%",
                  backgroundColor: "",
                }}
              >
                <div className="product-details mt-5 ">
                  <h1>{p.serviceName} </h1>
                  <br />

                  <p
                    className="information"
                    style={{ textShadow: "2px 2px 4px #000000" }}
                  >
                    {p.about}
                  </p>
                </div>

                <Link to={`/services/${p._id}`}>
                  {" "}
                  <button className="btn">more</button>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link to="/services" className="btn">
            More Services <i className="fas fa-arrow-right"></i>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
