import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    text: "I recently purchased a SurgiCare electric toothbrush and I'm very impressed with its performance. My teeth feel cleaner and healthier since I started using it.",
    name: "Sarah Thompson",
    profession: "Dental Hygienist",
    image:
      "https://img.freepik.com/premium-photo/brunette-girl-with-glasses_58409-14928.jpg?w=1380",
  },
  {
    id: 2,
    text: "As a surgeon, I rely on SurgiCare surgical masks for their high quality and reliability. They provide excellent protection for me and my patients.",
    name: "Dr. Michael Chen",
    profession: "Surgeon",
    image:
      "https://img.freepik.com/free-photo/man-plaid-shirt-bow-tie-studio_158595-491.jpg?w=1380",
  },
  {
    id: 3,
    text: "I've been using SurgiCare wound dressings for my patients for years. They are easy to apply and provide excellent healing properties.",
    name: "Nurse Emily Johnson",
    profession: "Wound Care Specialist",
    image:
      "https://img.freepik.com/premium-psd/indian-man-hold-voucher-card-store_76964-39060.jpg?w=826",
  },
  {
    id: 4,
    text: "The SurgiCare blood pressure monitor is easy to use and provides accurate readings. It helps me keep track of my health at home.",
    name: "John Smith",
    profession: "Health Enthusiast",
    image:
      "https://img.freepik.com/free-photo/portrait-young-man-isolated-white-wall_155003-19370.jpg?w=1380",
  },
  {
    id: 5,
    text: "I purchased SurgiCare bandages for my first aid kit and they have come in handy several times. They stick well and are very durable.",
    name: "Alice Brown",
    profession: "First Aid Trainer",
    image:
      "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=1380",
  },
  {
    id: 6,
    text: "I'm impressed with the quality of SurgiCare disposable gloves. They are comfortable to wear and provide excellent protection for my hands.",
    name: "Mark Wilson",
    profession: "Laboratory Technician",
    image:
      "https://img.freepik.com/free-photo/young-man-showing-large-size-sign-shirt-jacket-looking-confident-front-view_176474-88927.jpg?w=1380",
  },
];

const Testimonial = () => {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-danger fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>


          <div className="container pb-4">
            <div className="row">
            <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-3">
              <div className="card  text-center p-2 shadow-sm">
                <div className="d-flex justify-content-center ">
                  <img
                    src={review.image}
                    className="rounded-circle"
                    alt={review.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "3px solid #dc3545",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-2">{review.name}</h5>
                 
                  <p className="card-text">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
