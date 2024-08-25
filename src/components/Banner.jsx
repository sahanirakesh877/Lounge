import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start ">
              <h1 className="display-5 text-white animated slideInLeft">
                Welcome to Our
                <br />
                Tanbe & Convention Lounge
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Welcome to Tanbe convention , Madhyapur Thimi’s premier Party
                Centre. We offer a full service experience, for all of your
                banquet needs, your weddings, birthdays, corporate retreats
                and/or private events. Choose from our extensive menu, or
                request a specialized meal prepared exclusively for your event.
              </p>
              <Link
                to="/book"
                className="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Reserve Your Spot
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img
                className="img-fluid"
                src="img/hero.png"
                alt="Banquet and Restaurant"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Hero Section */}
    </>
  );
};

export default Banner;
