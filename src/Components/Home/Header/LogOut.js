import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
function LogOut() {
  const { user, logout } = useAuth();
  return (
    <>
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
    </>
  );
}

export default LogOut;
