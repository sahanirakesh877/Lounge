import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import servicesData from "../data/serviceData";

const Service = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>


<Helmet>
  <title>Service | Tanbe Convention & Lounge</title>

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
        <div className="container-xxl pt-5 bg-dark hero-header mb-md-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Services
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
                  Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
      )}



    {/* Service Start */}
    <div className="container-xxl py-5 bg-light">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-danger fw-normal">
            Our Services
          </h5>
          <h1 className="mb-5">Services we provide</h1>
        </div>
        <div className="container">
          <div className="row g-4">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className={`fa fa-3x ${service.icon} text-danger mb-4`} />
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Service;
