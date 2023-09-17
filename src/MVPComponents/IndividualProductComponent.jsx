// This component will display individual products

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const IndividualProductComponent = ({ handleAddToCart }) => {
  const [showOneItem, setShowOneItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products/${id}`)
      .then((response) => setShowOneItem(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {showOneItem && (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="p-8 rounded-t-lg object-contain"
            src={showOneItem.product_image}
            alt={showOneItem.product_name}
          />

          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {showOneItem.product_name}
              </h3>
              <h6 className="text-md font-medium text-gray-600 dark:text-gray-300">
                {showOneItem.product_weight} {showOneItem.product_unit}
              </h6>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
              {showOneItem.product_description}
            </p>

            <div className="flex items-center mt-3">
              <AiFillStar size={18} className="text-yellow-400 mr-1" />
              <AiFillStar size={18} className="text-yellow-400 mr-1" />
              <AiFillStar size={18} className="text-yellow-400 mr-1" />
              <AiFillStar size={18} className="text-yellow-400 mr-1" />
              <AiFillStar
                size={18}
                className="text-gray-300 dark:text-gray-600"
              />
            </div>
            <button><FaHeart className="text-orange-500 peer text-2xl lg:text-4xl md:text-2xl sm:text-lg cursor-pointer" /></button>
            
            <div className="flex justify-end mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleAddToCart(showOneItem)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualProductComponent;
