import React from "react";

const index = () => {
  return (
    <section>
      <div className="container-fluid bg-gray p-5 min-vh-80 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className="display-4 mp-0 fw-medium">Sabscribe</h2>
                <small className="fs-4 text-uppercase ls-5px text-fade-1 mb-4 d-block">
                  a sign-up to our newsletters
                </small>
                <form className="w-75" action="" method="post">
                  <div className="mb-5">
                    <input
                      className="form-control p-4 px-5"
                      type="text"
                      placeholder="Your email"
                    />
                  </div>
                  <button className="btn btn-sabmit text-uppercase py-2 px-5 ls-5px">
                    sabmit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
