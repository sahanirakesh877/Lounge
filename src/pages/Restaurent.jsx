import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

const Restaurent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Helmet>
        <title>Menu | Tanbe Convention & Lounge</title>

        <meta
          name="description"
          content="Discover the exquisite dining and luxurious accommodation at Tanbe Convention & Lounge. Experience our top-notch service and culinary delights."
        />

        <meta
          name="keywords"
          content="Hotel, Restaurant, Fine Dining, Luxury Accommodation, Gourmet Cuisine"
        />
      </Helmet>

      {!isHomePage && (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Food Menu
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* Menu Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-danger fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i className="fa fa-coffee fa-2x text-danger" />
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i className="fa fa-hamburger fa-2x text-danger" />
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i className="fa fa-utensils fa-2x text-danger" />
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt
                        style={{ width: 70 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-2">
                        <h6 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-danger">Rs 115</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt
                        style={{ width: 70 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-2">
                        <h6 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-danger">Rs 115</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt
                        style={{ width: 70 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-2">
                        <h6 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-danger">Rs 115</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-2.jpg"
                        alt
                        style={{ width: 70 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-2">
                        <h6 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-danger">Rs 115</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}
    </>
  );
};

export default Restaurent;
