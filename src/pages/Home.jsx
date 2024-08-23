import React from "react";
import Banner from "../components/Banner";
import About from "../pages/About";
import BookRes from "./BookRes";
import Service from "../components/Service";
import Restaurent from "./Restaurent";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Testimonial from "./../components/Testimonial";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet titleTemplate="Tanbe" />
      <Banner />
      <About />
      <Service />

      <Restaurent />
      <BookRes />
      <Gallery />
      <Contact />
      <Testimonial />
    </>
  );
};

export default Home;
