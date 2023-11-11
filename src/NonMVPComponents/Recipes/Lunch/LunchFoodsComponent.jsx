// This Component will display different lunch foods

import { Link, useNavigate } from "react-router-dom";

const recipes = [
  {
    link: "/recipes/lunch-food-caprese-sandwich",
    imgSrc:
      "https://www.eatingwell.com/thmb/uAo_rveXpw6wB0j01eOstQoLS9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-sandwich-e0bb2b846cf14cd7a0eb2d3f4d4b6aa2.jpg",
    name: "Caprese Sandwich",
  },
  {
    link: "/recipes/lunch-food-whole-wheat-veggie-wrap",
    imgSrc:
      "https://www.eatingwell.com/thmb/LXaZhfk1F8PEEQ2IUbV88RwzJA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4548031-ed05dced770140b790dc6b75ae29be7b.jpg",
    name: "Whole-Wheat Veggie Wrap",
  },
  {
    link: "/recipes/lunch-food-farro-bowl-with-rotisserie-chicken",
    imgSrc:
      "https://www.eatingwell.com/thmb/BPaWZ52825U3VaTyAMW-xdfHBFs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3-ingredient-mediterranean-farro-bowl-03d8ae97c41b43eaba08f0c6998da890.jpg",
    name: "Farro Bowl with Rotisserie Chicken",
  },
  {
    link: "/recipes/lunch-food-bacon-cheeseburger",
    imgSrc:
      "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg",
    name: "Bacon Cheeseburger",
  },
  {
    link: "/recipes/lunch-food-cajun-prawn-pizza",
    imgSrc:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cajun-pizza-589e9c2.jpg?quality=90&webp=true&resize=440,400",
    name: "Cajun Prawn Pizza",
  },

  {
    link: "/recipes/lunch-food-tuna-melt",
    imgSrc:
      "https://food.unl.edu/styles/large/public/recipes/tuna-melt.jpg?itok=4Jn_zItB",
    name: "Tuna Melt",
  },
  {
    link: "/recipes/lunch-food-grilled-cheese",
    imgSrc:
      "https://www.cooking-therapy.com/wp-content/uploads/2021/09/Roasted-Squash-Grilled-Cheese-4-2.jpg",
    name: "Grilled Cheese",
  },
  {
    link: "/recipes/lunch-food-spicy-chicken-sandwich",
    imgSrc:
      "https://mccormick.widen.net/content/u0bnjmyzzw/jpeg/redhot_spicy_chicken_sandwich38649%20copy.jpg?crop=true&anchor=476,0&q=80&color=ffffffff&u=eelhgb&w=1365&h=1365",
    name: "Spicy Chicken Sandwich",
  },
  {
    link: "/recipes/lunch-food-crisy-onion-rings",
    imgSrc:
      "https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-2-500x375.jpg",
    name: "Crispy Onion Rings",
  },
  // ... Add other recipes similarly
];

const LunchFoodsComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            View Recipes for Lunch
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

export default LunchFoodsComponent;
