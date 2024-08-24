import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import menudata from "../data/menuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEgg,
  faBreadSlice,
  faDrumstickBite,
  faCarrot,
  faBowlRice,
  faUtensils,
  faQuestion,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";

const Banquet = () => {
  const iconMap = {
    "Hot Beverages": faCoffee,
    "Cold Beverages": faGlassWater,
    "Breakfast": faEgg,
    "Bara": faBreadSlice,
    "Soup": faBowlRice,
    "Sandwich": faUtensils,
    "Non-Veg Snacks": faDrumstickBite,
    "Veg Snacks": faCarrot,
    "Fried Rice": faBowlRice,
    "Noodles": faUtensils,
    "Thakali Set": faBowlRice,
    "Newari Khaja Set": faBowlRice,
    "Thukpa": faBowlRice,
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [activeCategory, setActiveCategory] = useState("Hot Beverages");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const categories = [...new Set(menudata.map((item) => item.category))];
  const filteredItems = menudata.filter(
    (item) => item.category === activeCategory
  );

  const formatPrice = (price) => {
    if (typeof price === "object") {
      return ` Rs ${price.single} / ${price.double}`;
    }
    return `Rs ${price}`;
  };

  return (
    <>
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
          <div className="text-center wow fadeInUp pb-3" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-danger fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-2">Most Popular Items</h1>
          </div>
          <ul className="nav nav-pills d-flex justify-content-between gap-2  bg-light p-4  mb-5">
            <li className="nav-item d-flex align-items-center gap-0">
              <i className="fa fa-coffee fa-2x text-danger" />
              <div className="ps-3">
                <h5 className="mt-n1 mb-0">Breakfast</h5>
              </div>
            </li>
            <li className="nav-item d-flex align-items-center gap-0">
              <i className="fa fa-hamburger fa-2x text-danger" />
              <div className="ps-3">
                <h5 className="mt-n1 mb-0">Launch</h5>
              </div>
            </li>
            <li className="nav-item d-flex align-items-center gap-0">
              <i className="fa fa-utensils fa-2x text-danger" />
              <div className="ps-3">
                <h5 className="mt-n1 mb-0">Dinner</h5>
              </div>
            </li>
          </ul>

          <div className="row">
            <div className="col-lg-3">
              {/* Categories */}
              <ul className="nav nav-pills flex-column ">
                {categories.map((category) => (
                  <li className="nav-item" key={category}>
                    <a
                      className={`nav-link d-flex align-items-center text-start mb-1 py-1 ${
                        category === activeCategory ? "active" : ""
                      }`}
                      onClick={() => setActiveCategory(category)}
                      role="button"
                    >
                      <FontAwesomeIcon icon={iconMap[category] || faQuestion} style={{ color: '#DC3545' }}  />

                      <div className="ps-2">
                        <h6 className="p-0 m-0 ">{category}</h6>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              {/* Product Data */}
              <div className="tab-content">
                <div className="tab-pane fade show active p-0">
                  <div className="row g-4">
                    {filteredItems.map((item) => (
                      <div className="col-md-6" key={item.id}>
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src={item.image}
                            alt={item.title}
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-3">
                            <h6 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.title}</span>
                              <span className="text-danger">
                                {formatPrice(item.price)}
                              </span>

                              {/* <span className="text-danger">Rs {item.price}</span> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Banquet;
