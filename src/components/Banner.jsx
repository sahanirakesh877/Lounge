import React from "react";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start ">
                <h1 className="display-4 text-white animated slideInLeft">
                  Welcome to Our
                  <br />
                  Tanbe & Convention Lounge
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  Experience a blend of elegance and taste in a perfect setting. 
                  Whether you're celebrating a special occasion or enjoying a casual meal, 
                  our offerings are designed to delight your senses.
                </p>
                <a
                  href
                  className="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                  Reserve Your Spot
                </a>
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img className="img-fluid" src="img/hero.png" alt="Banquet and Restaurant" />
              </div>
            </div>
          </div>
        </div>
      {/* /Hero Section */}
    </>
  );
};

export default Banner;
