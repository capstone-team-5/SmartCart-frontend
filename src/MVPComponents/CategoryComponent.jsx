// This function will list all categories

import { useState, useEffect } from "react";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [grocery, setGrocery] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => response.json())
      .then((data) => {
        setGrocery(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = grocery.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(grocery);
    }
  }, [selectedCategory, grocery]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md ">
          <button
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
            onClick={() => handleCategoryClick("Dairy")}
          >
            Dairy
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button
            onClick={() => handleCategoryClick("Vegetables")}
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
          >
            Vegetables
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button
            onClick={() => handleCategoryClick("fruits")}
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
          >
            Fruits
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button
            onClick={() => handleCategoryClick("Bakery")}
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
          >
            Bakery
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Canned Goods
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Meat
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Beverages
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide ">
            Snacks
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Frozen Foods
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoryComponent;
