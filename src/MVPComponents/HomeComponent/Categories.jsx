import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const GroceryCategories = [
    {
      name: "Fruits",
      logoSrc:
        "https://images.immediate.co.uk/production/volatile/sites/30/2023/02/Bowl-of-fruit-5155e6f.jpg?quality=90&resize=440,400",
    },
    {
      name: "Vegetables",
      logoSrc:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/08/fruits-and-vegetables-thumb-1-732x549.jpg",
    },
    {
      name: "Meat",
      logoSrc: "https://m.media-amazon.com/images/I/61iGja+X-PS.jpg",
    },
    {
      name: "Seafood",
      logoSrc:
        "https://farmtojar.com/wp-content/uploads/2022/09/012BD4A8-9167-4182-BFDD-0CDDE752D2B0.jpeg",
    },
    {
      name: "Poultry",
      logoSrc:
        "https://www.census.gov/newsroom/stories/poultry-day/_jcr_content/root/responsivegrid/responsivegrid_1749353263/imagecore.coreimg.jpeg/1678791602578/stories-poultry-1300x867.jpeg",
    },
    {
      name: "Dairy",
      logoSrc:
        "https://www.onegreenplanet.org/wp-content/uploads/2018/05/shutterstock_412394602-e1684191591876.jpg",
    },
    {
      name: "Bread & Bakery",
      logoSrc:
        "https://www.referenceforbusiness.com/photos/bread-bakery-business-plan-437.jpg",
    },

    {
      name: "Nuts & Spices",
      logoSrc:
        "https://www.tashasartisanfoods.com/blog/wp-content/uploads/2018/02/unnamed-2-2-1-scaled.jpg",
    },

    {
      name: "Pasta & Noodles",
      logoSrc:
        "https://www.tastingtable.com/img/gallery/30-types-of-pasta-and-when-you-should-be-using-them/l-intro-1659010210.jpg",
    },

    {
      name: "Condiments",
      logoSrc:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_06/3219176/condiments.jpeg",
    },

    {
      name: "Sweet Treats",
      logoSrc:
        "https://img.freepik.com/free-vector/realistic-sweet-treats-composition_1284-25449.jpg",
    },

    {
      name: "Grains & Legumes",
      logoSrc:
        "https://oldwayspt.org/sites/default/files/thumbnails/image/iStock-1292432879_0.jpg",
    },

    {
      name: "Canned Goods",
      logoSrc:
        "https://www.thedailymeal.com/img/gallery/13-canned-foods-you-should-avoid-at-the-grocery-store/intro-1688139829.jpg",
    },

    {
      name: "Snacks",
      logoSrc:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/unhealthy-snacks.png?strip=all",
    },
    {
      name: "Beverages",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIksH6bdhP1hxnFsM05sEybSWCnDqAkEpu5FWzsTLNqGL9dAtlPUTtM4Us5XpXw-rpnGI&usqp=CAU",
    },
    {
      name: "Breakfast & Cereal",
      logoSrc:
        "https://izzycooking.com/wp-content/uploads/2021/12/Fluffy-Breakfast-Pancakes.jpeg",
    },
    {
      name: "Frozen Foods",
      logoSrc:
        "https://www.mytwintiers.com/wp-content/uploads/sites/89/2019/04/2189636061fc636026d5517d51b3adf4_1554642775935_81008419_ver1.0.png?w=650",
    },
    {
      name: "International Foods",
      logoSrc:
        "https://thumbs.dreamstime.com/z/international-food-fork-plate-knife-isolated-world-17390585.jpg",
    },
    {
      name: "Vegan Foods",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },
    {
      name: "Dietary Lifestyles",
      logoSrc:
        "https://target.scene7.com/is/image/Target/GUEST_716b28c5-09ee-440e-8864-43b46f29bbc9?wid=167&hei=167&qlt=100&fmt=webp",
    },
    {
      name: "Baking Goods",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },
    {
      name: "Halal Foods",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },
    {
      name: "Kosher Foods",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },
    {
      name: "Organic Foods",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },
    {
      name: "Allergy Friendly",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },
    // Add other partner objects here
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl mt-1 px-4">
        <h2 className="mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Featured Categories
        </h2>
        <p className="mb-8 lg:mb-16 text-gray-500 text-center">Shop All</p>

        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {GroceryCategories.length > 0 ? (
            GroceryCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <Link
                  to="#"
                  className="flex flex-col items-center border-2 border-red-500 p-4 rounded"
                >
                  <div className="w-full h-full mb-4">
                    <img
                      src={category.logoSrc}
                      alt={category.name}
                      className="w-40 h-40 object-contain object-center"
                    />
                  </div>
                </Link>
                <h3 className="mt-2 text-center font-bold">{category.name}</h3>
              </div>
            ))
          ) : (
            <p>No Categories Found!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;