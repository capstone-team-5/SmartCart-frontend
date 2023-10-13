// This component will display individual products

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

const IndividualProductComponent = ({ handleAddToCart, addToFavorites }) => {
  const [showOneItem, setShowOneItem] = useState({});
  const [showRestOfCard, setShowRestOfCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products/${id}`)
      .then((response) => setShowOneItem(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const toggleShowRestOfCard = () => {
    setShowRestOfCard(!showRestOfCard);
  };

  const toggleShowLess = () => {
    setShowRestOfCard(false);
  };

  const toggleFavorite = () => {
    addToFavorites(showOneItem);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="mx-32  my-32">
      {showOneItem && (
        <div className="w-full max-w-sm px-12 py-12 bg-white border border-gray-200 rounded shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <img
            className="p-8 rounded-t-lg object-contain hover:scale-150 transition duration-300"
            src={showOneItem.product_image}
            alt={showOneItem.product_name}
          />

          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
                {showOneItem.product_name}
              </h3>
              <h6 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {showOneItem.product_weight} {showOneItem.product_unit}
              </h6>
            </div>
            {!showRestOfCard && (
              <button
                onClick={toggleShowRestOfCard}
                className="text-blue-500 hover:underline mt-8 mb-8 text-xl font-bold tracking-wide text-center"
              >
                Show More Details
              </button>
            )}
            {showRestOfCard && (
              <div>
                <p className=" text-gray-700 dark:text-gray-400 mt-8 text-lg font-bold tracking-wide">
                  {showOneItem.product_description}
                </p>
                <div className="flex items-center mt-8">
                  <AiFillStar size={18} className="text-yellow-400 mr-1" />
                  <AiFillStar size={18} className="text-yellow-400 mr-1" />
                  <AiFillStar size={18} className="text-yellow-400 mr-1" />
                  <AiFillStar size={18} className="text-yellow-400 mr-1" />
                  <AiFillStar
                    size={18}
                    className="text-gray-300 dark:text-gray-600"
                  />
                </div>
                <button onClick={toggleFavorite}>
                  {isFavorite ? (
                    <FaHeart className="text-orange-500 peer text-2xl lg:text-4xl md:text-2xl sm:text-lg mt-8 cursor-pointer" />
                  ) : (
                    <FaRegHeart className="text-orange-500 peer text-2xl lg:text-4xl md:text-2xl sm:text-lg mt-8 cursor-pointer" />
                  )}
                </button>

                <div className="flex mt-8">
                  <button
                    className="inline-flex whitespace-nowrap justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    onClick={() => handleAddToCart(showOneItem)}
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={toggleShowLess}
                    className="text-blue-500 hover:underline ml-4 whitespace-nowrap"
                  >
                    Show Less Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualProductComponent;
