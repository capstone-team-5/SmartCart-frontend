// This is the home component
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_BACKEND_API;

const CategoryHome = ({ addToCart }) => {
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 p-6">
      {/* Fruits Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Fruits</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Fruits</p>
        </div>
      </div>

      {/* Vegetables Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Vegetables</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Vegetables</p>
        </div>
      </div>

      {/* Spices Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Spices</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Spices</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryHome;
