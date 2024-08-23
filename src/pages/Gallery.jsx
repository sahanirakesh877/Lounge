import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
    <Helmet>
  <title>Gallery | Tanbe Convention & Lounge</title>

  <meta
    name="description"
    content="Discover the exquisite dining and luxurious accommodation at Tanbe Convention & Lounge. Experience our top-notch service and culinary delights."
  />

  <meta
    name="keywords"
    content="Hotel, Restaurant, Fine Dining, Luxury Accommodation, Gourmet Cuisine"
  />
</Helmet>
      {/* Gallery Section */}
      
      {/* /Gallery Section */}
    </>
  );
};

export default Gallery;
