import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>About | Tanbe Convention & Lounge</title>
        <meta
          name="description"
          content="Learn more about Tanbe Convention & Lounge, where luxury meets culinary excellence. Enjoy our top-tier hospitality and exquisite dining experiences."
        />
        <meta
          name="keywords"
          content="Tanbe Convention & Lounge, Hotel, Restaurant, Luxury, Fine Dining, Event Venue"
        />
      </Helmet>

      {!isHomePage && (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/img/about-1.jpg"
                    alt="Elegant Venue"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                     src="/img/about-2.jpg"
                    style={{ marginTop: "25%" }}
                    alt="Fine Dining"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                   src="/img/about-3.jpg"
                    alt="Master Chefs"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/img/about-4.jpg"
                    alt="Luxury Rooms"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-danger fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to{" "}
                <i className="fa fa-utensils text-danger me-2" />
                Tanbe Convention & Lounge
              </h1>
              <p className="mb-4">
                At Tanbe Convention & Lounge, we combine luxury with culinary
                excellence. Our venue offers a perfect setting for both
                relaxation and celebration, with world-class amenities and a
                team dedicated to making your experience unforgettable.
              </p>
              <p className="mb-4">
                Whether you're here for a gourmet dining experience, a lavish
                event, or a relaxing stay, we cater to your every need with
                impeccable service and attention to detail. Join us for an
                experience that blends tradition with modernity.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-danger px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-danger mb-0"
                      data-toggle="counter-up"
                    >
                      20
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-danger px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-danger mb-0"
                      data-toggle="counter-up"
                    >
                      100+
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Successful</p>
                      <h6 className="text-uppercase mb-0">Events</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-danger py-3 px-5 mt-2" href="#">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default About;
