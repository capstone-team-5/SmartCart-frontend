// This is the home component
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    arrows: false,
  };

  return (
    <div className="bg-red-100 dark:bg-gray-900">
      <h1> Fresh Produce</h1>
      <div class="p-5 md:p-10">
        <div class="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {products.map((product, index) => {
            return (
              <div
                key={product.product_id}
                className={index === 0 ? "" : "mt-5"}
              >
                <Link to={`/product/${product.product_id}`}>
                  <img src={product.product_image} alt={product.product_name} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <h3>Trending</h3>
      <div
        id="custom-controls-gallery"
        className="relative"
        data-carousel="slide"
      >
        <div className="relative h-96 overflow-hidden dark:bg-gray-900 rounded-lg">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div
                key={product.product_id}
                className="duration-700 ease-in-out dark:bg-gray-900"
                data-carousel-item
              >
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
/*
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
