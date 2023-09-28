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
          <div className="px-4 w-full mx-auto text-center py-24 lg:py-56 bg-black bg-opacity-50">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Fruits
            </h1>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 p-6 dark:bg-gray-900 gap-8">
          <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 p-6 flex flex-col justify-center items-center">
            <div class="flex justify-center mb-4">
              <img
                class="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
                alt="sofa-2"
              />
            </div>

            <div class="flex flex-row justify-between w-full mt-10">
              <p class="group-hover:opacity-60 transition duration-500 text-2xl leading-5 text-gray-600">
                Sectional Sofa
              </p>
              <button>
                <AiOutlineHeart size={24} />
              </button>
            </div>

            <div class="flex justify-center mt-10">
              <button class="bg-blue-500 text-white py-2 px-4 rounded-full">
                Add To Cart
              </button>
            </div>
          </div>
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
