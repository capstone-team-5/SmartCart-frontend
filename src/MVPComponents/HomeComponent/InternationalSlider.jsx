import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API = process.env.REACT_APP_BACKEND_API;

const InternationalSlider = ({ addToCart }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto container p-4 mt-2">
      <h1 className="p-2 text-black mb-4 text-xl font-extrabold">
        Shop International Groceries
      </h1>
      <div
        className="relative w-full border-2 rounded-lg"
        data-carousel="slide"
      >
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center relative shadow-lg"
            >
              <div className="p-2 rounded mb-2">
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="object-contain object-center w-full h-40"
                />
              </div>
              <h3 className="text-black mb-4 mt-4 md:text-lg text-center font-medium">
                {product.product_name}
              </h3>
              <div className="flex justify-center mt-1 mb-1">
                <button
                  onClick={() => addToCart(product)}
                  className="py-2 px-4 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default InternationalSlider;
