//This component will allow users to view recipes and add all the ingredients from the recipe to the cart

import { Link } from "react-router-dom";

const RecipesComponent = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-8">
        Choose From Hundreds of Recipes and Add Them to Your Cart
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Link to="/recipes/breakfast-foods" className="block">
            <img
              src="https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg"
              alt="breakfast foods"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">Breakfast Foods</h3>
          </Link>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Link to="/recipes/lunch-foods" className="block">
            <img
              src="https://www.eatingwell.com/thmb/uAo_rveXpw6wB0j01eOstQoLS9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-sandwich-e0bb2b846cf14cd7a0eb2d3f4d4b6aa2.jpg"
              alt="lunch foods"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">Lunch Foods</h3>
          </Link>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Link to="/recipes/dinner-foods" className="block">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-tandoori-spiced-cauliflower-chicken-flatbreads-6422fa89eb35f.jpg"
              alt="dinner foods"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">Dinner Foods</h3>
          </Link>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Link to="/recipes/snack-foods" className="block">
            <img
              src="https://article.innovamarketinsights360.com/articleimgs/article_images/637238398158072578Variation-unhealthy-snacks-959888654_2118x2118.jpeg"
              alt="snack foods"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">Snack Foods</h3>
          </Link>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <Link to="/recipes/dessert-foods" className="block">
            <img
              src="https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200"
              alt="dessert foods"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold">Dessert Foods</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipesComponent;
