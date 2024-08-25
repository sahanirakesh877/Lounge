import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
      <div className="container-xxl py-5 ">
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

              <p className="mb-2">
                Tanbe convention and lounge Pvt Ltd was founded in early 2023 AD
                and 2079 BS.Simple was our beginning but our spirit was
                dynamic.With just one purpose in mind-growth.We have been able
                to achieve our dreams through our consistent self motivated
                efforts. The key to our success lies in our adherence to
                commitments.We deliver what we promise.
              </p>
              <p className="mb-2">
                However grand or intimate the celebration may be, Tanbe offers
                you a bespoke location and they make sure that you and your
                guests enjoy their programme as well as their experience with
                the banquet and restaurant. Tanbe makes sure that your wedding
                event is a beautiful picture captured on the canvas of Bhaktapur
                as they help in organizing every little detail for a flawless
                execution. This magnificent venue has a lot to offer on its
                premises for you and your special guests on your big and
                enormous night that your wedding is. History
              </p>
              <p className="mb-2">
                Tanbe convention and lounge Pvt Ltd offers you splendid
                facilities and amenities that help in making your wedding
                function and pre or post-wedding ceremony an unforgettably
                profound experience. They offer you with an event space capacity
                of below 500 people as they make sure that you and your guests
                receive the royal good treatment by the management and staff of
                Tanbe. The offer you lawn and banquet space, a tremendous
                poolside, basic lighting, proper music, etc. The power backup is
                24*7 make it even more convenient for you. Services offered
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
              {isHomePage ? (
                <Link className="btn btn-danger py-3 px-5 mt-2" to="/about">
                Explore More
                </Link>
              ) : (
                <Link className="btn btn-danger py-3 px-5 mt-2" to="/">
                 Go to home page
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About End */}

      {!isHomePage && (
        <div className="container-xxl py-5  bg-light">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-danger fw-normal">
                  OUR VISION
                </h5>
                <p>
                  To provide turnkey logistics and quality solutions to our
                  clients. To give back to the society whose resources we have
                  utilized to grow, in a measure that is greater than what we
                  have utilized.
                </p>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-danger fw-normal">
                  CORE VALUES
                </h5>
                <ul>
                  <li>
                    High Commitment to health, safety, environmental
                    responsibility and sustainable development.
                  </li>
                  <li>
                    Nurturing relationships which focus on the creation of value
                    for all parties and dearest customer.
                  </li>
                  <li>
                    Being Honest and fulfilling to our promises at all times.
                  </li>
                  <li>
                    Accepting the responsibility whole-heartedly to inspire and
                    deliver positive change in the face of adversity.
                  </li>
                  <li>
                    To thrive on the excitement and fulfilment of achieving
                    superior business results and stretching on our
                    capabilities.
                  </li>
                  <li>
                    Embracing diversity, enriched by openness, sharing, trust,
                    teamwork and involvement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
