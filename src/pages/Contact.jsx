import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import axios from "axios";

const Contact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      console.log("success data", response)

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Contact | Tanbe Convention & Lounge</title>
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
              Contact Us
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
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* Contact Start */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-danger fw-normal">
              Contact Us
            </h5>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>

          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-danger">
                    Booking
                  </h5>
                  <p>
                    <i className="fa fa-envelope-open text-danger me-2" />
                    info@tanbeconvention.com
                  </p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-danger">
                    General
                  </h5>
                  <p>
                    <i className="fa fa-envelope-open text-danger me-2" />
                    acct@tanbeconvention.com
                  </p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-danger">
                    Technical
                  </h5>
                  <p>
                    <i className="fa fa-envelope-open text-danger me-2" />
                    purchase@tanbeconvention.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28267.025724739222!2d85.37327772780787!3d27.674702996067975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb05707bff1cdf%3A0x94bb7d27323d3e2e!2sTanbe%20Convention%20and%20Lounge!5e0!3m2!1sen!2snp!4v1724398023078!5m2!1sen!2snp"
                frameBorder={0}
                style={{ minHeight: 350, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-danger w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Contact;
