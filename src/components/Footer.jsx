import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-danger fw-normal mb-4">Company</h4>
        <a className="btn btn-link" href>About Us</a>
        <a className="btn btn-link" href>Contact Us</a>
        <a className="btn btn-link" href>Reservation</a>
        <a className="btn btn-link" href>Privacy Policy</a>
        <a className="btn btn-link" href>Terms &amp; Condition</a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-danger fw-normal mb-4">Contact</h4>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
        <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
          <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-danger fw-normal mb-4">Opening</h4>
        <h5 className="text-light fw-normal">Monday - Saturday</h5>
        <p>09AM - 09PM</p>
        <h5 className="text-light fw-normal">Sunday</h5>
        <p>10AM - 08PM</p>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-danger fw-normal mb-4">Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative mx-auto" style={{maxWidth: 400}}>
          <input className="form-control border-danger w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
          <button type="button" className="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row d-flex  justify-content-center     ">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className="border-bottom" href="#">Tanbe Convention & lodge</a>, All Right Reserved. 
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By <a className="border-bottom" href="https://technavata.com">Tech Navata</a>
        </div>
     
      </div>
    </div>
  </div>
</div>
{/* Footer End */}

    </>
  );
};

export default Footer;
