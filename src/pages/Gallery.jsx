import React from "react";
import galleryItems from "../data/photos";

const Gallery = () => {
  return (
    <>
      {/* Gallery Section */}
      <div className="container py-5">

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-danger fw-normal">
             Photos
            </h5>
            <h1 className="mb-5">Some Specially dishes</h1>
          </div>
        <div className="row">
          {galleryItems.map((item) => (
            <div className="col-lg-2 col-md-6 mb-4" key={item.id}>
              <div className="position-relative overflow-hidden">
                <img
                  src={item.image}
                  className="img-fluid rounded"
                  alt={item.title}
                />
                <div className="overlay text-center position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center">
                  <h4 className="text-white fw-bold">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* /Gallery Section */}
    </>
  );
};

export default Gallery;
