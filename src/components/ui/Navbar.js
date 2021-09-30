import { Button } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "antd/dist/antd.css";
import "./navbar.css";
import { LoginContext } from "../../utils/Services/LoginContext";
import Cookies from "js-cookie";

const LinkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  const { setLoginStatus } = useContext(LoginContext);

  let history = useHistory();

  const handleLogout = () => {
    setLoginStatus(false);
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("token");
    history.push("/login");
  };

  return (
    <nav>
      <div className="nav-brand">
        <Link style={LinkStyle} to="/">
          <img src="./assets/img/moveelix-logo.svg" alt="moveelix-logo" />
          <h1>Moveelix</h1>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-links">
          <Link style={LinkStyle} to="/">
            <li>Home</li>
          </Link>
          {Cookies.get("token") !== undefined && (
            <>
              <Link style={LinkStyle} to="/movie-list">
                <li>Movie List</li>
              </Link>
              <Link style={LinkStyle} to="/games-list">
                <li>Game List</li>
              </Link>
            </>
          )}
          <Link style={LinkStyle} to="/about">
            <li>About</li>
          </Link>
          {Cookies.get("token") === undefined && (
            <Link style={LinkStyle} size={"large"} to="/login">
              <Button className="btn-login" type="primary">
                Login
              </Button>
            </Link>
          )}
          {Cookies.get("token") !== undefined && (
            <Link style={LinkStyle} size={"large"}>
              <Button
                className="btn-logout"
                type="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
