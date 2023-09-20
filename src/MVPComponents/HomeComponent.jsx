// This is the home component
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API = process.env.REACT_APP_BACKEND_API;

const HomeComponent = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/products`)
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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="dark:bg-gray-900">
      <div
        id="custom-controls-gallery"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-96 overflow-hidden rounded-lg">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div
                key={product.product_id}
                className="duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="max-w-full h-96 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center items-center pt-4">
          <button
            type="button"
            className="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <AiFillLeftCircle className="w-5 h-5" />
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <AiFillRightCircle className="w-5 h-5" />
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
/*
// <div className="bg-gray-50 dark:bg-gray-900">
      {/* {products.map((product) => {
        return (
          <div key={product.product_id}>
            <Link to={`/product/${product.product_id}`}>
              <img
                src={product.product_image}
                alt={product.product_name}
                width="200px"
              />
              <p>{product.product_name}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        );
      })} */
