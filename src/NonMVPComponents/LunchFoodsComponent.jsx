//This Component will display different lunch foods

import { Link } from "react-router-dom";

const LunchFoodsComponent = () => {

    return (

        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold text-center mb-8">
                Add the Ingredients List to Your Cart
            </h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
            {/* Recipe Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-caprese-sandwich" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.eatingwell.com/thmb/uAo_rveXpw6wB0j01eOstQoLS9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-sandwich-e0bb2b846cf14cd7a0eb2d3f4d4b6aa2.jpg"
                        alt="Caprese Sandwich"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Caprese Sandwich</strong>
                </Link>
            </div>

            {/* Recipe Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-whole-wheat-veggie-wrap" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.eatingwell.com/thmb/LXaZhfk1F8PEEQ2IUbV88RwzJA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4548031-ed05dced770140b790dc6b75ae29be7b.jpg"
                        alt="Whole-Wheat Veggie Wrap"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Whole-Wheat Veggie Wrap</strong>
                </Link>
            </div>

            {/* Recipe Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-farro-bowl-with-rotisserie-chicken" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.eatingwell.com/thmb/BPaWZ52825U3VaTyAMW-xdfHBFs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3-ingredient-mediterranean-farro-bowl-03d8ae97c41b43eaba08f0c6998da890.jpg"
                        alt="Farro Bowl with Rotisserie Chicken"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Farro Bowl with Rotisserie Chicken</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-bacon-cheeseburger" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg"
                        alt="Bacon Cheese Burger"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Bacon Cheese Burger</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-cajun-prawn-pizza" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cajun-pizza-589e9c2.jpg?quality=90&webp=true&resize=440,400"
                        alt="Cajun Prawn Pizza"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Cajun Prawn Pizza</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-tuna-melt" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://food.unl.edu/styles/large/public/recipes/tuna-melt.jpg?itok=4Jn_zItB"
                        alt="Tuna Melt"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Tuna Melt</strong>
                </Link>
            </div>




            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-grilled-cheese" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.cooking-therapy.com/wp-content/uploads/2021/09/Roasted-Squash-Grilled-Cheese-4-2.jpg"
                        alt="Grilled Cheese"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Grilled Cheese</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-spicy-chicken-sandwich" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://mccormick.widen.net/content/u0bnjmyzzw/jpeg/redhot_spicy_chicken_sandwich38649%20copy.jpg?crop=true&anchor=476,0&q=80&color=ffffffff&u=eelhgb&w=1365&h=1365"
                        alt="Spicy Chicken Sandwich"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Spicy Chicken Sandwich</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/lunch-food-crisy-onion-rings" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-2-500x375.jpg"
                        alt="Crispy Onion Rings"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Crispy Onion Rings</strong>
                </Link>
            </div>

                </div>
            </div>
            </div>
    );

};

export default LunchFoodsComponent;