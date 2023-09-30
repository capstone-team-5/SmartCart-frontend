// This component will display dinner foods

import { Link } from "react-router-dom";

const DinnerFoodsComponent = () => {

    return (

        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold text-center mb-8">
                Add the Ingredients List to Your Cart
            </h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
            {/* Recipe Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-baked-mac-and-cheese" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.culinaryhill.com/wp-content/uploads/2022/12/Baked-Mac-and-Cheese-Culinary-Hill-1200x800-warm.jpg"
                        alt="Baked Mac and Cheese"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Baked Mac and Cheese</strong>
                </Link>
            </div>

            {/* Recipe Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-bajan-cou-cou-and-flying-fish" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://mybajan.com/wp-content/uploads/2020/04/barbados-cou-cou-fish-bajan-recipe-678x381.jpg"
                        alt="Bajan Cou Cou"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Bajan Cou Cou</strong>
                </Link>
            </div>

            {/* Recipe Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-indian-butter-chicken" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.thecookierookie.com/wp-content/uploads/2022/08/Featured-Indian-butter-chicken-1.jpg"
                        alt="Indian Butter Chicken"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Indian Butter Chicken</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-jamaican-jerk-chicken" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://disheswithdad.com/wp-content/uploads/2021/05/jerk-chicken-12.jpg"
                        alt="Jamaican Jerk Chicken"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Jamaican Jerk Chicken</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-spanish-rice-and-beans" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.liveeatlearn.com/wp-content/uploads/2019/02/spanish-rice-beans-vert-500x375.jpg"
                        alt="Spanish Rice and Beans"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Spanish Rice and Beans</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-chicken-biryani" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://hamariweb.com/recipes/images/recipeimages/3464.jpg"
                        alt="Chicken Biryani"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Chicken Biryani</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-spaghetti-with-meatballs" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://static01.nyt.com/images/2017/04/05/dining/05COOKING-NIGMEATBALLS2/05COOKING-NIGMEATBALLS2-superJumbo.jpg"
                        alt="Spaghetti With Meatballs"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Spaghetti With Meatballs</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-ginger-garlic-salmon" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://rasamalaysia.com/wp-content/uploads/2015/02/ginger_garlic_baked_salmon_thumb.jpg"
                        alt="Ginger Garlic Salmon"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Ginger Garlic Salmon</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dinner-foods-vegan-curry" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.acouplecooks.com/wp-content/uploads/2021/01/Vegan-Curry-010.jpg"
                        alt="Vegan Curry"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Vegan Curry</strong>
                </Link>
            </div>

        </div>
            </div>
            </div>
    );
};

export default DinnerFoodsComponent