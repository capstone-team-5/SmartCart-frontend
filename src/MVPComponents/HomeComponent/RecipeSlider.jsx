import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const RecipeSlider = () => {
  const recipes = [
    {
      id: 1,
      name: "Breakfast",
      image:
        "https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg",
      link: "/recipes/breakfast-foods",
    },
    {
      id: 2,
      name: "Lunch",
      image:
        "https://www.eatingwell.com/thmb/uAo_rveXpw6wB0j01eOstQoLS9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-sandwich-e0bb2b846cf14cd7a0eb2d3f4d4b6aa2.jpg",
      link: "/recipes/lunch-foods",
    },
    {
      id: 3,
      name: "Dinner",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-tandoori-spiced-cauliflower-chicken-flatbreads-6422fa89eb35f.jpg",
      link: "/recipes/dinner-foods",
    },
    {
      id: 4,
      name: "Snacks",
      image:
        "https://article.innovamarketinsights360.com/articleimgs/article_images/637238398158072578Variation-unhealthy-snacks-959888654_2118x2118.jpeg",
      link: "/recipes/snack-foods",
    },
    {
      id: 5,
      name: "Desserts",
      image:
        "https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200",
      link: "/recipes/dessert-foods",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
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
        Shop Directly From Our Recipes
      </h1>
      <div
        className="relative w-full border-2 rounded-lg"
        data-carousel="slide"
      >
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col items-center relative shadow-lg"
            >
              <div className="p-2 rounded mb-2">
                <Link to={recipe.link} className="block">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="object-contain object-center w-full h-full rounded-lg shadow-md"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-center">
                    {recipe.name}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecipeSlider;
