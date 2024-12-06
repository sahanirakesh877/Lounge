import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookBanquet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: null,
    phone: "",
    people: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, datetime: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/bookbanquet`,
        formData
      );

      if (response.status === 200) {
        alert("Reservation successful!");
        setFormData({
          name: "",
          email: "",
          datetime: null,
          phone: "",
          people: "",
          message: "",
        });
      } else {
        alert("Failed to make reservation.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while making the reservation.");
    }
  };

  return (
    <div className="container-xxl py-2 px-0">
      <div className="row g-0">
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5">
            <h5 className="section-title text-danger fw-normal">
              Reservation Banquet
            </h5>
            <h1 className="text-white mb-4">Book A Banquet Online</h1>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* Name Input */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength="2"
                      aria-label="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>

                {/* Email Input */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-label="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                {/* DateTime Picker */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <DatePicker
                      selected={formData.datetime}
                      onChange={handleDateChange}
                      showTimeSelect
                      dateFormat="Pp"
                      className="form-control"
                      id="datetime"
                      placeholderText="Select Date & Time"
                      aria-label="Select Date and Time"
                    />
                    <label htmlFor="datetime">Date & Time</label>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      aria-label="Your Phone Number"
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>

                {/* People Input */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="people"
                      name="people"
                      placeholder="Number of People"
                      value={formData.people}
                      onChange={handleChange}
                      required
                      min="1"
                      max="500"
                      aria-label="Number of People"
                    />
                    <label htmlFor="people">No Of People</label>
                  </div>
                </div>

                {/* Message Input */}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Special Request"
                      value={formData.message}
                      onChange={handleChange}
                      style={{ height: 100 }}
                      aria-label="Special Request"
                    />
                    <label htmlFor="message">Special Request</label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  <button className="btn btn-warning w-100 py-3" type="submit">
                    Book  Banquet Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Video Section */}
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/jZyAB2KFDls"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div className="modal fade" id="videoModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title">Youtube Video</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  id="video"
                  src="https://www.youtube.com/embed/jZyAB2KFDls"
                  allowFullScreen
                  title="Banquet Video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBanquet;
