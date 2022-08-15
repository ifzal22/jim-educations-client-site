import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";
import useAuth from "../Hooks/useAuth";
import FirebaseFileUpload from "./FirebaseFileUpload";

const ProfileRoute = () => {
  const { user } = useAuth();

  return (
    <>
      <Header></Header>
      <div>
        <div className=""></div>

        <div
          style={{ width: "99%", marginLeft: "10px" }}
          className="marg mt-50"
        >
          <header1>
            <div
              className="mx-auto"
              style={{
                backgroundColor: "#1e1717",
                textAlign: "center",
                padding: "30px",
                borderRadius: "10px",
              }}
            >
              {/* User Info */}
              <div className="user">
                <img src={user.photoURL} alt="" />

                <div className="text-center mt-0">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    style={{ backgroundColor: "#ef0831", color: "white" }}
                    className="p-1 m-0 rounded-3"
                  >
                    updated
                    <i className="fas fa-pen p-2"></i>
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <FirebaseFileUpload></FirebaseFileUpload>
                    </div>
                  </div>
                </div>

                <h3 className="name">{user.displayName}</h3>
              </div>

              <div className="row">
                {/* Nested Route */}
                <div className="col-md-4">
                  <nav className="navbar ">
                    <ul>
                      <li>
                        <Link to={"/profile-route/UpdatedProfile"} href="#home">
                          Me
                        </Link>
                      </li>

                      <li>
                        <Link to={"/profile-route/MyBlogs"} href="#about">
                          my blog
                        </Link>
                      </li>

                      <li>
                        <Link to={"/profile-route/postBlog"} href="#education">
                          post your blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/profile-route/updateInformations"}
                          href="#portfolio"
                        >
                          Update My informations
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} href="#contact">
                          my result
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div
                  className="col-md-8"
                  style={{ backgroundColor: "cyan", borderRadius: " 20px" }}
                >
                  <Outlet></Outlet>
                </div>
              </div>
            </div>
          </header1>
        </div>
      </div>
    </>
  );
};

export default ProfileRoute;
