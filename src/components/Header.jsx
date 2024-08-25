import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <div className="logo">
              <img src="/logoWhite.png" alt="Logo" className="logo_img" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavClick}
          >
            <span className="fa fa-bars" />
          </button>
          <div
            className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link
                to="/"
                className="nav-item nav-link active"
                onClick={closeNavbar}
              >
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link" onClick={closeNavbar}>
                About
              </Link>
              <Link to="/service" className="nav-item nav-link" onClick={closeNavbar}>
                Our Banquet
              </Link>
              <Link to="/benquet" className="nav-item nav-link" onClick={closeNavbar}>
                Our Restaurent
              </Link>
             
              <Link to="/contact" className="nav-item nav-link" onClick={closeNavbar}>
                Contact
              </Link>
            </div>
            <Link to="/book" className="btn btn-danger py-2 px-4">
              Book 
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
};

export default Header;
