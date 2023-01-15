import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "./Router";
import { useContext } from "react";

const Navbar: React.FC = () => {
  const { handleChange, searchInput } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            SHOPPING ADDA
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ItemList">
                  PRODUCT
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  ABOUT
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/AddItemList">
                  ORDER
                </NavLink>
              </li>
            </ul>
            {/* <div className="buttons">
              <NavLink to="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart (0)
              </NavLink>
            </div> */}
            <div
              className="navlink w-50"
              style={{ margin: "auto", marginRight: "3rem" }}
            >
              <input
                className="search w-100"
                type="search"
                placeholder="Search your product by title"
                onChange={handleChange}
                value={searchInput}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
