import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useCartItem from "../../Hooks/useCartItem";
import HeaderManu from "../Header/HeaderManu";
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
    <div className="m-5">
        <span
          className="material-icons menu-btn fas fa-bars p-4"
          id="menu-btn"
          onClick={() => setIsOpen(true)}
        >
          <span className="p-4">MENU</span>
        </span>

        <HeaderManu isOpen={isOpen} onChange={setIsOpen}></HeaderManu>
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
                <Link to="/home" className="dropdown-item ItemLink">
                  Something else here
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


          {
            totalQuantity.length > 0 ? (<Link style={{ marginRight: "-60px" }} to="/allOrder">
              <span id="font-shop" className="">
                {/* CARD */}

                <i className="fas fa-shopping-cart"></i>

                {totalQuantity.length > 0 ? (
                  ""
                ) : (
                  <span className="SHOP"> {totalQuantity} </span>
                )}
              </span>
            </Link>) : (
              ""
            )
          }

        </header>

        {/* LOGIN */}
      </div>
    </div>
  );
};

export default Header;
