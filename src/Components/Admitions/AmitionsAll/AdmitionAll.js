import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "../../Home/Header/Header";
import Loding from "../../Loding/Loding";
import "../Admition.css";
import Admition2 from "../Admition2/Admition2";
const AdmitionAll = () => {
  const [admit, setAdmit] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const [searchItem, setSearchItem] = useState([]);
  // console.log(searchItem);

  useEffect(() => {
    fetch("http://localhost:5000/Admition/admition")
      .then((res) => res.json())
      .then((data) => {
        setAdmit(data);
        setSearchItem(data);
      });
  }, [isDeleted]);

  // console.log(image.image)
  // console.log(admit)

  const DeleteAdmition = (id) => {
    const proceed = window.confirm("Are You Deleted This Admition?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/Admition/deleteAdmition/${id}`, {})
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result) {
            setIsDeleted(true);
            console.log(result.data);
            alert("Deleted successfully");
            window.location.reload(true);
          } else {
            setIsDeleted(false);
          }
        });
      // console.log(id);
    }
  };

  const handleOnSearch = (e) => {
    const searchText = e.target.value;
    const matchItem = admit.filter((item) =>
      item.admition.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchItem(matchItem);
  };

  return (
    <>
      {" "}
      <Header></Header>
      <div className="marg">
        <h1 className="heading">
          {" "}
          JIM <span>ADMITION</span>{" "}
        </h1>

        <div className="login-form-container1">
          <form>
            <input
              onChange={handleOnSearch}
              name="text"
              type="text"
              placeholder="search your item"
              className="box"
            />
          </form>
        </div>

        <section className="featured" id="featured">
          <div className=" featured-slider">
            {admit.length === 0 ? (
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
              <div className=" row">
                {[...searchItem].reverse().map((p) => (
                  <>
                    <Admition2
                      _id={p?._id}
                      p={p}
                      isDeleted={isDeleted}
                      DeleteAdmition={DeleteAdmition}
                    ></Admition2>
                  </>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default AdmitionAll;
