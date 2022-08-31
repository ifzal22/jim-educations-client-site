import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Home/Header/Header";

const PublishResultAll = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://education-web-2.herokuapp.com/result/results")
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="marg">
        <div className=" container my-5">
          <h1
            style={{ color: "white", textShadow: "2px 2px 4px #000000" }}
            className="heading "
          >
            {" "}
            Publis <span style={{ color: "yellow" }}>Results</span>{" "}
          </h1>
          {result.length === 0 ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <>
              {result.map((p) => (
                <div className="row justify-center BG rounded-3 shadow ">
                  <div className="col-md-6">
                    <img src={p.image} alt="" />
                  </div>
                  <div className="col-md-6 TEX align-content-center">
                    <h1>{p.title} </h1>
                    <p className="my-5">{p.information} </p>
                  </div>
                  <div className="text-center ">
                    {" "}
                    <Link to={`/result/${p._id}`}>
                      {" "}
                      <button className="btn shadow-lg m-3">more</button>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PublishResultAll;
