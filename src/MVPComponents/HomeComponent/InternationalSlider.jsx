import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

const InternationalSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="mt-6 p-6">
      <div>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default InternationalSlider;
