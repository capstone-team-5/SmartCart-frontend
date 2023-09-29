import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";

const API = process.env.REACT_APP_BACKEND_API;

const Fruits = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/products/fruits`)
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

  return (
    <div className="mx-auto px-6 xl:px-0 py-12 dark:bg-gray-900">
      <div className="flex flex-col dark:bg-gray-900">
        <div className="bg-transparent bg-cover bg-[url(https://www.tastingtable.com/img/gallery/11-fruits-you-can-still-enjoy-on-a-keto-diet/intro-1657125016.webp)] bg-gray-700 bg-blend-multiply ">
          <div className="px-4 w-full mx-auto text-center py-20 md:py-32 lg:py-40 bg-black bg-opacity-50">
            <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-wide leading-none">
              All Fruits
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 p-4 md:p-6 dark:bg-gray-900 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="group group-hover:bg-opacity-60 rounded-2xl transition duration-500 relative bg-white p-4 md:p-6 flex flex-col justify-center items-center"
            >
              <div className="flex justify-center mb-2">
                <div
                  className="duration-700 ease-in-out dark:bg-gray-900"
                  data-carousel-item
                >
                  <img
                    className="group-hover:opacity-60 transition duration-500 w-full h-full object-contain"
                    src={product.product_image}
                    alt={product.product_name}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between w-full mt-4">
                <p className="group-hover:opacity-60 transition duration-500 text-lg md:text-xl text-black">
                  {product.product_name}
                </p>
                <button>
                  <AiOutlineHeart size={20} />
                </button>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-end mt-12">
          <div className="flex flex-row items-center justify-center space-x-8">
            <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
              <p>1</p>
            </button>
            <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
              <p>2</p>
            </button>
            <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
              <p>3</p>
            </button>
            <button className="flex justify-center items-center">
              <MdNavigateNext size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruits;
