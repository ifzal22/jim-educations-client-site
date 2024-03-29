import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Home/Header/Header";
import Loding from "../../Loding/Loding";
import "./ServicesAll.css";

const ServicesAll = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="container mx-auto justify-content-center marg">
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
            {/* .reverse()

[...service].revers().map*/}

            {[...service].reverse().map((p) => (
              <div
                id="container"
                className="col-md-4 m-0"
                style={{
                  background: `url(${p.image})no-repeat`,
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
      </div>
    </>
  );
};

export default ServicesAll;
