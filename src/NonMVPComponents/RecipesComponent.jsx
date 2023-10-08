// This component will allow users to view recipes and add all the ingredients from the recipe to the cart

import React from "react";
import { Link } from "react-router-dom";

const RecipesComponent = () => {
  const recipeImages = [
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
    {
      id: 6,
      name: "",
      image: "",
      link: "#",
    },
    {
      id: 7,
      name: "",
      image: "",
      link: "#",
    },
    {
      id: 8,
      name: "",
      image: "",
      link: "#",
    },
  ];

  return (
    <div className="dark:bg-gray-900 p-6 shadow-xl">
      <h1 className="text-3xl font-semibold text-center mb-8 mt-4 dark:text-white">
        Choose From Hundreds of Recipes and Add All Ingredients to Your Cart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 shadow-2xl">
        {recipeImages.map((recipe, index) => (
          <div key={recipe.id} className="flex flex-col items-center">
            {recipe.image ? (
              <>
                <h1 className="text-3xl font-semibold text-center dark:text-white">
                  {recipe.name}
                </h1>
                <Link to={recipe.link}>
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-60 h-60 rounded-lg mt-4"
                  />
                </Link>
              </>
            ) : (
              <div className="hidden" key={recipe.id}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesComponent;
