import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center py-5 min-vh-50">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center">
                <Link
                  className="display-3 d-block text-white fw-bold text-center mb-3 mb-lg-0"
                  to="#"
                >
                  L
                </Link>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      about
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      articles
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      sabscribe
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
