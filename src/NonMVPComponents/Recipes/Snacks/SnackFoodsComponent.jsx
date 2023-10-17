// This component will display Snack foods

import { Link } from "react-router-dom";

const recipes = [
  {
    link: "/recipes/snack-foods-homemade-potato-chips",
    imgSrc:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Potato-Chips_EXPS_WRSM17_39614_C03_22_1b.jpg",
    name: "Homemade Potato Chips",
  },
  {
    link: "/recipes/snack-foods-homemade-pretzel",
    imgSrc:
      "https://handletheheat.com/wp-content/uploads/2021/09/soft-pretzel-recipe-SQUARE-500x375.jpg",
    name: " Homemade Pretzel ",
  },
  {
    link: "/recipes/snack-foods-homemade-pop-tarts",
    imgSrc:
      "https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2017/01/homemade-pop-tarts-17.jpg",
    name: "Homemade Pop Tarts ",
  },
  {
    link: "/recipes/snack-foods-trail-mix",
    imgSrc:
      "https://therecipecritic.com/wp-content/uploads/2021/07/trailmix.jpg",
    name: "Trail Mix ",
  },
  {
    link: "/recipes/snack-foods-smores",
    imgSrc:
      "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/72-smores.jpg",
    name: "S'mores",
  },
  {
    link: "/recipes/snack-foods-butter-toffee-popcorn",
    imgSrc:
      "https://res.cloudinary.com/hksqkdlah/image/upload/8913_sfs-crackerjackpopcorn-006-275830.jpg",
    name: "Butter Toffee Popcorn",
  },
  {
    link: "/recipes/snack-foods-jolly-rancher-candy-apples",
    imgSrc:
      "https://publish-p50513-e440257.adobeaemcloud.com/content/dam/hersheyland/en-us/recipes/recipe-images/275-jolly-rancher-candy-apple.jpg",
    name: "Jolly Rancher Candy Apples",
  },
  {
    link: "/recipes/snack-foods-chocolate-drizzled-popcorn",
    imgSrc:
      "https://www.thechunkychef.com/wp-content/uploads/2020/01/Chocolate-Covered-Popcorn-gift.jpg",
    name: "Chocolate Drizzled Popcorn",
  },
  {
    link: "/recipes/snack-foods-coconut-chips",
    imgSrc:
      "https://www.alphafoodie.com/wp-content/uploads/2020/09/Coconut-Chips-1-of-1.jpeg",
    name: "Coconut Chips",
  },
  // ... Add other recipes similarly
];

const SnackFoodsComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            View Recipes for Snacks
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

export default SnackFoodsComponent;
