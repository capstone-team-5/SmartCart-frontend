const FilterResultsComponent = ({ selectedCategory }) => {
  // Assuming selectedCategory is an array of products
  if (!Array.isArray(selectedCategory) || selectedCategory.length === 0) {
    return <p> {selectedCategory} </p>;
  }

  return (
    <div>
      <h3>Shopping in {selectedCategory[0].product_category} category</h3>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {selectedCategory.map((product) => (
              <div
                key={product.product_id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h2 className="text-lg text-center font-semibold">
                    {product.product_name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterResultsComponent;
