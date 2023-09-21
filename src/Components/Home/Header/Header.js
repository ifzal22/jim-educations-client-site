import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useCartItem from "../../Hooks/useCartItem";
import Manu from "../Header/HeaderManu";
import "./Header.css";
const Header = () => {
  const { user, logout, admin } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  // console.log(products);

  const { totalQuantity } = useCartItem();

  return (
    <div>
      <div>
        <header className="header">
          <NavLink to="/home" className="logo ItemLink">
            <span>JIM</span>EDUCATION'S
          </NavLink>
          {/* MANU */}
          <div>
            <span
              style={{
                fontSize: " 25px",

                padding: "10px",
              }}
              id="MANU"
              className="material-icons menu-btn fas fa-bars"
              onClick={() => setIsOpen(true)}
            >
              {" "}
            </span>
            <Manu isOpen={isOpen} onChange={setIsOpen}></Manu>
          </div>

          {/* mobile nav end------------------------> */}
          {/* drop nav----------------------------- */}
          <nav className="navbar navbar-expand-lg">
            <NavLink to="/home" className="ItemLink">
              Home
            </NavLink>
            <NavLink to="/ALLteacher" className="ItemLink">
              Teacher'S
            </NavLink>
            <NavLink to="/classRoome" className="ItemLink">
              Class
            </NavLink>
            {/* Drop route */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle ItemLink"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/"
              >
                Service
              </NavLink>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/services" className="dropdown-item ItemLink">
                  services
                </Link>
                <Link to="/blogs" className="dropdown-item ItemLink">
                  blogs
                </Link>
              </div>
            </li>
            {/* ------------------------------------------- */}
            <NavLink to="/AllStudent" className="ItemLink">
              Student'S
            </NavLink>
            <NavLink to="/AdmitionAll" className="ItemLink ">
              Admition'S
            </NavLink>

            {admin && (
              <NavLink to="/DeashBoard" className="ItemLink">
                DashBoard
              </NavLink>
            )}
            <NavLink to="/resultAll" className="ItemLink">
              Result'S
            </NavLink>
            <NavLink to="/login" className="ItemLink">
              login
            </NavLink>
            <NavLink to="/profile" className="ItemLink">
              {" "}
              {user.displayName}
            </NavLink>
          </nav>
          {user?.email ? (
            <>
              <Link to="/login">
                <div id="login-btn">
                  <button onClick={logout} className="btn">
                    LogOut
                  </button>
                  <i className="far fa-user"></i>
                </div>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <div id="login-btn">
                <button className="btn">Login</button>
                <i className="far fa-user"></i>
              </div>
            </Link>
          )}

          {/* CART ICON */}

          {totalQuantity >= 1 || user.email ? (
            <Link style={{ marginRight: "-60px" }} to="/allOrder">
              {totalQuantity > 0 ? (
                <span id="font-shop" className="d-flex p-2">
                  <i className="fas fa-shopping-cart"></i>
                  {totalQuantity >= 1 ? (
                    <span className="SHOP p-2 text-bg-info">
                      {" "}
                      {totalQuantity}{" "}
                    </span>
                  ) : (
                    <div
                      class="spinner-border text-danger p-2 m-2"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )}
                </span>
              ) : (
                ""
              )}
            </Link>
          ) : (
            ""
          )}
        </header>

        {/* LOGIN */}
      </div>
    </div>
  );
};

export default Header;
