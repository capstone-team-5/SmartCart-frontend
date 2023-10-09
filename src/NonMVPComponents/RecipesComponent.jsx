// This component will allow users to view recipes and add all the ingredients from the recipe to the cart

import { Link } from "react-router-dom";

const RecipesComponent = () => {
  const recipes = [
    {
      name: "Breakfast",
      logoSrc:
        "https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg",
      link: "/recipes/breakfast-foods",
    },
    {
      name: "Lunch",
      logoSrc:
        "https://www.eatingwell.com/thmb/uAo_rveXpw6wB0j01eOstQoLS9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-sandwich-e0bb2b846cf14cd7a0eb2d3f4d4b6aa2.jpg",
      link: "/recipes/lunch-foods",
    },
    {
      name: "Dinner",
      logoSrc:
        "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-tandoori-spiced-cauliflower-chicken-flatbreads-6422fa89eb35f.jpg",
      link: "/recipes/dinner-foods",
    },
    {
      name: "Snacks",
      logoSrc:
        "https://article.innovamarketinsights360.com/articleimgs/article_images/637238398158072578Variation-unhealthy-snacks-959888654_2118x2118.jpeg",
      link: "/recipes/snack-foods",
    },
    {
      name: "Desserts",
      logoSrc:
        "https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200",
      link: "/recipes/dessert-foods",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-8 mt-8 p-6 dark:text-white">
        Choose From Hundreds of Recipes...
      </h1>

      <div className="flex flex-wrap justify-center p-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
          >
            <Link to={recipe.link} className="block cursor-pointer">
              <img
                src={recipe.logoSrc}
                alt={recipe.name}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
              />
              <h3 className="mt-6 mb-6 text-lg font-bold tracking-wide cursor-pointer text-center dark:text-white">
                {recipe.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesComponent;
