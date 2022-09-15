import React from "react";
import logo from "../images/paytm_logo.png";
import "../components/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="paytm logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ms-4" aria-current="page" href="/">
                  Paytm for Consumer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="/">
                  Paytm for Bussiness
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link ms-4 dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
               
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="/">
                  Invester Relations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="/">
                  Career
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-dark ms-5" type="submit"> Sign In
              <i className="fas fa-user ms-3"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      
    </>
  );
}
