// This component will display Snack foods

import { Link } from "react-router-dom";

const SnackFoodsComponent = () => {

    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold text-center mb-8">
                Add the Ingredients List to Your Cart
            </h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
            {/* Recipe Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-homemade-potato-chips" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Potato-Chips_EXPS_WRSM17_39614_C03_22_1b.jpg"
                        alt="Homemade Potato Chips"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Homemade Potato Chips</strong>
                </Link>
            </div>

            {/* Recipe Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-homemade-pretzel" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://handletheheat.com/wp-content/uploads/2021/09/soft-pretzel-recipe-SQUARE-500x375.jpg"
                        alt="Homemade Pretzel"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Homemade Pretzel</strong>
                </Link>
            </div>

            {/* Recipe Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-homemade-pop-tarts" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Homemade Pop Tarts"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Homemade Pop Tarts</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-trail-mix" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://therecipecritic.com/wp-content/uploads/2021/07/trailmix.jpg"
                        alt="Trail Mix"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Trail Mix</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-smores" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/72-smores.jpg"
                        alt="S'mores"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">S'mores</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-butter-toffee-popcorn" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://res.cloudinary.com/hksqkdlah/image/upload/8913_sfs-crackerjackpopcorn-006-275830.jpg"
                        alt="Butter Toffee Popcorn"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Butter Toffee Popcorn</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-jolly-rancher-candy-apples" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://publish-p50513-e440257.adobeaemcloud.com/content/dam/hersheyland/en-us/recipes/recipe-images/275-jolly-rancher-candy-apple.jpg"
                        alt="Jolly Rancher Candy Apples"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Jolly Rancher Candy Apples</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-chocolate-drizzled-popcorn" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.thechunkychef.com/wp-content/uploads/2020/01/Chocolate-Covered-Popcorn-gift.jpg"
                        alt="Chocolate Drizzled Popcorn"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Chocolate Drizzled Popcorn</strong>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <Link to="/recipes/snack-foods-coconut-chips" className="text-blue-500 hover:text-blue-700">
                    <img
                        src="https://www.alphafoodie.com/wp-content/uploads/2020/09/Coconut-Chips-1-of-1.jpeg"
                        alt="Coconut Chips"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <strong className="text-lg">Coconut Chips</strong>
                </Link>
            </div>

                </div>
            </div>
            </div>
    );
};

export default SnackFoodsComponent