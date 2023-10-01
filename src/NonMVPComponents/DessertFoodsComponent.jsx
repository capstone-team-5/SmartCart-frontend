// This component will display dinner foods

import { Link } from "react-router-dom";

const DessertFoodsComponent = () => {

    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold text-center mb-8">
                Add the Ingredients List to Your Cart
            </h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
            {/* Recipe Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-homemade-apple-pie" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://amandascookin.com/wp-content/uploads/2016/11/homemade-apple-pie-680.jpg"
                        alt="Homemade Apple Pie"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Homemade Apple Pie</strong>
                </Link>
            </div>

            {/* Recipe Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-tres-leche-cake" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.allrecipes.com/thmb/KfnfyrWfrla-34afSAfDJQ60P1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tres-leches-71431848db22469f85cd054e2f26a272.jpg"
                        alt="Tres Leche"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Tres Leche</strong>
                </Link>
            </div>

            {/* Recipe Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-german-chocolate-cake" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://saltandbaker.com/wp-content/uploads/2019/06/best-ever-german-chocolate-cake.jpg"
                        alt="German Chocolate Cake"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">German Chocolate Cake</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-oatmeal-raisin-cookies" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://bakerbynature.com/wp-content/uploads/2020/07/Brown-Butter-Oatmeal-Raisin-Cookies-01234-1-of-1.jpg"
                        alt="Oatmeal Raisin Cookies"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Oatmeal Raisin Cookies</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-oatmeal-chocolate-chip-cookie" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://chefsavvy.com/wp-content/uploads/oatmeal-chocolate-chip-cookies.jpg"
                        alt="Oatmeal Chocolate Chip Cookies"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Oatmeal Chocolate Chip Cookies</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-strawberry-cheesecake" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg"
                        alt="Strawberry Cheesecake"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Strawberry Cheesecake</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-classic-chocolate-chip-cookie" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.modernhoney.com/wp-content/uploads/2019/01/The-Best-Chocolate-Chip-Cookies-2-500x500.jpg"
                        alt="Chocolate Chip Cookies"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Chocolate Chip Cookies</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-macarons" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200"
                        alt="Macarons"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Macarons</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/dessert-foods-homemade-strawberry-icecream" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGrHPtMinRNe6_wwRtVrpc-svyEHqdkAw-lyGSxSm4ZfDE3vvbCIU7YP_KxjjbAcCSyU&usqp=CAU"
                        alt="Homemade Strawberry Icecream"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Homemade Strawberry Icecream</strong>
                </Link>
            </div>

                </div>
            </div>
            </div>
    );
};

export default DessertFoodsComponent