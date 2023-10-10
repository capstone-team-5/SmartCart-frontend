// This component will display dinner foods

import { Link } from "react-router-dom";
const recipes = [
  {
    link: "/recipes/dessert-foods-classic-chocolate-chip-cookie",
    imgSrc:
      "https://www.modernhoney.com/wp-content/uploads/2019/01/The-Best-Chocolate-Chip-Cookies-2-500x500.jpg",
    name: "Chocolate Chip Cookies",
  },
  {
    link: "/recipes/dessert-foods-macarons",
    imgSrc:
      "https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200",
    name: "Macarons",
  },
  {
    link: "/recipes/dessert-foods-tres-leche-cake",
    imgSrc:
      "https://www.allrecipes.com/thmb/KfnfyrWfrla-34afSAfDJQ60P1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tres-leches-71431848db22469f85cd054e2f26a272.jpg",
    name: "Tres Leche",
  },
  {
    link: "/recipes/dessert-foods-german-chocolate-cake",
    imgSrc:
      "https://saltandbaker.com/wp-content/uploads/2019/06/best-ever-german-chocolate-cake.jpg",
    name: "German Chocolate Cake",
  },
  {
    link: "/recipes/dessert-foods-strawberry-cheesecake",
    imgSrc:
      "https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg",
    name: "Strawberry Cheesecake",
  },
  {
    link: "/recipes/dessert-foods-homemade-apple-pie",
    imgSrc:
      "https://amandascookin.com/wp-content/uploads/2016/11/homemade-apple-pie-680.jpg",
    name: "Homemade Apple Pie",
  },
  {
    link: "/recipes/dessert-foods-oatmeal-raisin-cookies",
    imgSrc:
      "https://bakerbynature.com/wp-content/uploads/2020/07/Brown-Butter-Oatmeal-Raisin-Cookies-01234-1-of-1.jpg",
    name: "Oatmeal Raisin Cookies",
  },
  {
    link: "/recipes/dessert-foods-homemade-strawberry-icecream",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGrHPtMinRNe6_wwRtVrpc-svyEHqdkAw-lyGSxSm4ZfDE3vvbCIU7YP_KxjjbAcCSyU&usqp=CAU",
    name: "Homemade Strawberry Icecream",
  },
  {
    link: "/recipes/dessert-foods-oatmeal-chocolate-chip-cookie",
    imgSrc:
      "https://chefsavvy.com/wp-content/uploads/oatmeal-chocolate-chip-cookies.jpg",
    name: "Oatmeal Chocolate Chip Cookies",
  },
  // ... Add other recipes similarly
];

const DessertFoodsComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            View Recipes for Desserts
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
export default DessertFoodsComponent;
