// This component will display dinner foods

import { Link } from "react-router-dom";
const recipes = [
  {
    link: "/recipes/dinner-foods-jamaican-jerk-chicken",
    imgSrc:
      "https://disheswithdad.com/wp-content/uploads/2021/05/jerk-chicken-12.jpg",
    name: "Jamaican Jerk Chicken",
  },
  {
    link: "/recipes/dinner-foods-chicken-biryani",
    imgSrc: "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
    name: "Chicken Biryani",
  },
  {
    link: "/recipes/dinner-foods-ginger-garlic-salmon",
    imgSrc:
      "https://rasamalaysia.com/wp-content/uploads/2015/02/ginger_garlic_baked_salmon_thumb.jpg",
    name: "Ginger Garlic Salmon",
  },

  {
    link: "/recipes/dinner-foods-vegan-curry",
    imgSrc:
      "https://www.acouplecooks.com/wp-content/uploads/2021/01/Vegan-Curry-010.jpg",
    name: "Vegan Curry",
  },

  {
    link: "/recipes/dinner-foods-indian-butter-chicken",
    imgSrc:
      "https://www.thecookierookie.com/wp-content/uploads/2022/08/Featured-Indian-butter-chicken-1.jpg",
    name: "Indian Butter Chicken",
  },
  {
    link: "/recipes/dinner-foods-bajan-cou-cou-and-flying-fish",
    imgSrc:
      "https://mybajan.com/wp-content/uploads/2020/04/barbados-cou-cou-fish-bajan-recipe-678x381.jpg",
    name: "Bajan Cou Cou",
  },
  {
    link: "/recipes/dinner-foods-baked-mac-and-cheese",
    imgSrc:
      "https://www.culinaryhill.com/wp-content/uploads/2022/12/Baked-Mac-and-Cheese-Culinary-Hill-1200x800-warm.jpg",
    name: "Baked Mac and Cheese",
  },
  {
    link: "/recipes/dinner-foods-spanish-rice-and-beans",
    imgSrc:
      "https://www.liveeatlearn.com/wp-content/uploads/2019/02/spanish-rice-beans-vert-500x375.jpg",
    name: "Spanish Rice and Beans",
  },
  {
    link: "/recipes/dinner-foods-spaghetti-with-meatballs",
    imgSrc:
      "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-NIGMEATBALLS2/05COOKING-NIGMEATBALLS2-superJumbo.jpg",
    name: "Spaghetti With Meatballs",
  },
  // ... Add other recipes similarly
];

const DinnerFoodsComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            View Recipes for Dinner
          </h2>
        </div>
        <div className="grid gap-4 mb-6 lg:mb-16 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg p-5 mb-4 flex flex-col justify-between"
            >
              <Link
                to={recipe.link}
                className="text-blue-500 hover:text-blue-700"
              >
                <img
                  src={recipe.imgSrc}
                  alt={recipe.name}
                  className="w-full shadow-xl rounded-xl mb-8 h-56 object-cover"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-4 mt-4">
                    <Link
                      to={recipe.link}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4 mb-4"
                    >
                      {recipe.name}
                    </Link>
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/recipes">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900  focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900 my-4"
              aria-label="Recipes"
            >
              Back To Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DinnerFoodsComponent;
