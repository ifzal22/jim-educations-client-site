import React from "react";
import { Link } from "react-router-dom";

const Loding = () => {
  return (
    <>
      <div className="card" aria-hidden="true">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <Link to="/admitionAll" className="btn"></Link>
        </div>
      </div>
    </>
  );
};

export default Loding;
