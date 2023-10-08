import React, { useState, useEffect } from "react";
import axios from "axios";
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

const FrozenSlider = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/products/frozen`)
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
        <div className="flex flex-col items-center relative w-full h-full sm:w-auto sm: gap-2 lg:gap-8 md:gap-6 justify-start transition ease-out duration-700">
          <div className="bg-gray-100 p-4 rounded mb-4">
            <img
              src={product.product_image}
              alt={product.product_name}
              className="object-contain object-center w-full h-56"
            />
          </div>
          <h3 className=" text-black mb-4 md:text-xl tracking-wide font-medium  sm:text-lg dark:text-white">
            {product.product_name}
          </h3>
          <div className="flex justify-center mt-1 mb-1">
            <button
              onClick={() => addToCart(product)}
              className="justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Slide>
    ));
  };

  return (
    <div className="mx-auto container p-4 mt-2 dark:bg-gray-900">
      <h1 className="p-2 text-black mb-4 xl:text-3xl md:text-2xl tracking-wide font-extrabold sm:text-lg dark:text-white">
        {" "}
        Shop Frozen Foods
      </h1>
      <div className="py-24 sm:py-8 px-4">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={products.length}
          visibleSlides={3}
          step={1}
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

export default FrozenSlider;
