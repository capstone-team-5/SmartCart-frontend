import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_BACKEND_API;

const CategoryHome = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState({
    fruits: [],
    vegetables: [],
    spices: [],
    dairy: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fruitsResponse = await axios.get(`${API}/products/fourFruits`);
        const vegetablesResponse = await axios.get(`${API}/products/fourCart`);
        const spicesResponse = await axios.get(`${API}/products/fourMRT`);
        const dairyResponse = await axios.get(`${API}/products/fourGreens`);

        setSections({
          fruits: fruitsResponse.data,
          vegetables: vegetablesResponse.data,
          spices: spicesResponse.data,
          dairy: dairyResponse.data,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderImages = (section) => {
    return section.map((image, index) => (
      <div key={index}>
        <img
          className="h-auto max-w-full rounded-lg"
          src={image.product_image}
          alt={`Art of ${index + 1}`}
        />
      </div>
    ));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-6">
      {/* Fruits Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Fruits</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {renderImages(sections.fruits)}
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Fruits</p>
        </div>
      </div>

      {/* Vegetables Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Vegetables</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {renderImages(sections.vegetables)}
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Vegetables</p>
        </div>
      </div>

      {/* Spices Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Spices</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {renderImages(sections.spices)}
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Spices</p>
        </div>
      </div>

      {/* Dairy Section */}
      <div className="bg-pink-200 p-4">
        <div className="text-xl font-bold text-center mb-4">Dairy</div>
        <div className="bg-blue-200 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {renderImages(sections.dairy)}
        </div>
        <div className="bg-pink-200 p-4 text-center mt-4">
          <p className="font-bold">Shop More Dairy</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
