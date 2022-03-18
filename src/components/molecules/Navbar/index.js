import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark px-4">
      <div className="container-fluid px-0">
        <Link className="display-3 navbar-brand me-5 fw-bold" to="#">
          L
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase d-flex ms-auto align-items-center">
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link" aria-current="page" to="#">
                about
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link" to="#">
                articles
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link class="nav-link line py-2 px-4" to="#">
                sabscribe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
