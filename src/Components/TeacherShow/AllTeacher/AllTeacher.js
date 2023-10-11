import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Home/Header/Header";
import useAuth from "../../Hooks/useAuth";
import Loding from "../../Loding/Loding";
const AllTeacher = () => {
  const [teacher, setTeacher] = useState([]);
  console.log(teacher);
  const [isDeleted, setIsDeleted] = useState(null);
  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teacher/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
        setSearchItem(data);
      });
  }, [isDeleted]);

  const { admin } = useAuth();

  const DeleteAdmition = (id) => {
    const proceed = window.confirm("Are You Deleted This Admition?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/teacher/deleteTeacher/${id}`, {})
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
    const matchItem = teacher.filter((item) =>
      item.teacher.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchItem(matchItem);
  };
  return (
    <>
      <Header></Header>
      <div className="marg">
        <section className="reviews" id="reviews">
          <h1 className="heading">
            {" "}
            JIM <span>TEACHER'S</span>{" "}
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
          <div className="swiper review-slider">
            <div className="swiper-wrapper row">
              {teacher.length === 0 ? (
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
                <>
                  {[...searchItem].reverse().map((p) => (
                    <div className=" box col-md-4 shadow-lg">
                      <img src={`data:image/jpeg;base64,${p?.image}`} alt="" />
                      {/* <img src="your-image-source.jpg" alt="Lazy Loaded Image" /> */}

                      <div className="content">
                        <h3>{p?.name} </h3>
                        <p>{p.about} .</p>
                        <h3>{p.cetagory} </h3>
                        <div className="stars">
                          <div className="text-center ">
                            {" "}
                            <Link to={`/about/${p._id}`}>
                              {" "}
                              <button className="btn shadow-lg m-3">
                                more
                              </button>
                            </Link>
                            {/* ADMIN BUTTON */}
                            {admin && (
                              <button
                                style={{ m: "5px" }}
                                onClick={() => DeleteAdmition(p?._id)}
                                type="button"
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllTeacher;
