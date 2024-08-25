import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    text: "Our stay at Tanbe was exceptional. The service was top-notch, and the food was simply divine. We will definitely be back!",
    name: "Jessica Taylor",
    profession: "Travel Blogger",
    image:
      "https://img.freepik.com/premium-photo/young-woman-posing-sunny-day-casual-wear_58409-14928.jpg?w=1380",
  },
  {
    id: 2,
    text: "Tanbe's event coordination was flawless. Our wedding went off without a hitch, and the venue was beautifully decorated.",
    name: "William Harris",
    profession: "Event Planner",
    image:
      "https://img.freepik.com/free-photo/handsome-man-glasses-standing-outside-city_23-2148806764.jpg?w=1380",
  },
  {
    id: 3,
    text: "The ambiance at Tanbe is perfect for a romantic dinner. We loved the extensive wine selection and the cozy atmosphere.",
    name: "Emily Clark",
    profession: "Food Critic",
    image:
      "https://img.freepik.com/free-photo/portrait-happy-young-woman-standing_171337-21937.jpg?w=1380",
  },
  {
    id: 4,
    text: "As a business traveler, I appreciated the fast Wi-Fi and 24/7 power backup. Tanbe ensured my stay was productive and comfortable.",
    name: "James Anderson",
    profession: "Business Executive",
    image:
      "https://img.freepik.com/free-photo/smiling-young-man-blue-shirt_176474-20912.jpg?w=1380",
  },
  {
    id: 5,
    text: "Tanbe's banquet halls are perfect for large events. We hosted our company’s annual conference here, and everything was seamless.",
    name: "Sophia Martinez",
    profession: "Corporate Manager",
    image:
      "https://img.freepik.com/free-photo/portrait-cheerful-young-woman-white-sweater_171337-16952.jpg?w=1380",
  },
  {
    id: 6,
    text: "The customizable decor options at Tanbe allowed us to create the perfect theme for our event. The attention to detail was amazing.",
    name: "Michael Brown",
    profession: "Interior Designer",
    image:
      "https://img.freepik.com/free-photo/young-man-wearing-checkered-shirt-showing-thumbs-up-smiling_176474-88927.jpg?w=1380",
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

    <div className="testimonial-bg">

   
      <div className="container">
        <div className="row py-5">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-danger fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5 text-white">Our Clients Say!!!</h1>
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
                      width: "120px",
                      height: "120px",
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
      </div>
    </>
  );
};

export default Testimonial;
