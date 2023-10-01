import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const API = process.env.REACT_APP_BACKEND_API;

const InternationalSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/products/international`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const renderSlides = () => {
    return products.map((product, index) => (
      <Slide index={index} key={product.id}>
        <div className="flex flex-col items-center relative w-full h-full sm:w-auto lg:gap-8 md:gap-6 gap-14 justify-start transition ease-out duration-700">
          <div className="bg-gray-500 p-4 rounded mb-4">
            <img
              src={product.product_image}
              alt={product.product_name}
              className="object-contain object-center w-full h-56"
            />
          </div>
          <h3 className="text-xl font-semibold leading-5 lg:leading-6 text-black">
            {product.product_name}
          </h3>
        </div>
      </Slide>
    ));
  };

  return (
    <div className="mx-auto container p-4 mt-10 bg-orange-200">
      <h1 className="text-2xl font-semibold p-2 text-black">
        {" "}
        Shop our International Categories
      </h1>
      <div className="py-24 sm:py-8 px-4">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={products.length}
          visibleSlides={4}
          step={3}
          infinite={true}
        >
          <div className="w-full flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 bg-gray-400 ring-2  ring-black focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="prev"
            >
              <GrPrevious size={30} />
            </ButtonBack>

            <Slider>{renderSlides()}</Slider>

            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 bg-gray-400 ring-2  ring-black focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <GrNext size={30} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default InternationalSlider;
