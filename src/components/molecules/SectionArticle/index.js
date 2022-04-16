import { Article1, Article2, Article3 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  const lists = [
    {
      image: Article1,
      title: "TUNZA",
      subtitle: "RUGGED PORT",
      href: "#",
    },
    {
      image: Article2,
      title: "TIMOR",
      subtitle: "UNTOUCHED BEACH",
      href: "#",
    },
    {
      image: Article3,
      title: "LOMBOK",
      subtitle: "ENDLES LAVA",
      href: "#",
    },
  ];

  return (
    <section>
      <div className="container p-5 min-vh-100">
        <div className="py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                  <h2 className="display-4 mp-0 fw-medium">Slow Travelling</h2>
                  <small className="fs-4 text-uppercase ls-5px text-fade-1 text-border-bottom-center gray mb-5 d-block">
                    a travel blog
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {lists ? (
              lists.map((list, index) => {
                return (
                  <div className="col-lg-4">
                    <div className="wrapper mb-5 mb-lg-0">
                      <div className="card bg-transparent border-0">
                        <div className="card-body mp-0 shadow-1">
                          <figure className="position-relative">
                            <img
                              className="img-fluid w-100 img-articles"
                              src={list.image}
                              alt={`article-${index}`}
                            />
                            <figcaption className="w-100 pb-5 text-uppercase text-center position-absolute bottom-0 start-50 translate-middle-x">
                              <h3 className="mp-0">{list.title}</h3>
                              <p className="fs-5 mp-0 text-fade-1 text-border-bottom-center gray ls-5px">
                                {list.subtitle}
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <Link className="stretched-link" to={list.href}></Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 className="text-center">No Article in this section</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
