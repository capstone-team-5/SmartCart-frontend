import React from "react";
import { Link } from "react-router-dom";
const LandingPartner = () => {
  const partners = [
    {
      name: "Target",
      logoSrc:
        "https://jamesparr.files.wordpress.com/2019/05/target-logo-1.jpg",
    },
    {
      name: "Trader Joes",
      logoSrc:
        "https://logos-world.net/wp-content/uploads/2022/02/Trader-Joes-Symbol.png",
    },
    {
      name: "Walmart",
      logoSrc:
        "https://wallpapers.com/images/hd/walmart-round-logo-7r8yqrjrr1e7nav1.jpg",
    },
    {
      name: "Stop and shop",
      logoSrc:
        "https://assets.stickpng.com/images/609a5c64e23929000482a85a.png",
    },
    {
      name: "Bjs",
      logoSrc:
        "https://s24.q4cdn.com/797500006/files/design/logos/BJs_Logo_Wholesale_Red_CMYK.png",
    },
    {
      name: "Costco",
      logoSrc:
        "https://logos-world.net/wp-content/uploads/2020/11/Costco-Wholesale-Emblem.png",
    },

    {
      name: "Jmart",
      logoSrc: "https://uspto.report/TM/87410368/mark",
    },

    {
      name: "KeyFood",
      logoSrc:
        "https://www.scrapehero.com/store/wp-content/uploads/logos/small/Key_Food_USA.png",
    },

    {
      name: "Aldi",
      logoSrc:
        "https://www.brickmeetsclick.com/stuff/contentmgr/files/0/cb1db213cc804e8ca4c6f61986977dfb/image/new_aldi_logo.jpg",
    },

    {
      name: "ShopRite",
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/ShopRite_%28United_States%29_logo.svg/800px-ShopRite_%28United_States%29_logo.svg.png",
    },

    {
      name: "7Eleven",
      logoSrc:
        "https://cdn.mainichi.jp/vol1/2019/12/12/20191212p2a00m0bu008000p/8.jpg?1",
    },

    {
      name: "Food Universe",
      logoSrc:
        "https://m.merchantsnearby.com/images/business/5593936/sq184c1a1605eb53128411a2bb14b6435d114e061b.png",
    },

    // Add other partner objects here
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl mt-1 px-4">
        <h2 className="mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          30,000+ stores
        </h2>
        <p className="mb-8 lg:mb-16 text-gray-500 text-center">
          Whether you're shopping for Organic or Vegan, we got you covered. We
          will help you find the lowest price.
        </p>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link to="#" className="flex justify-center items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={partner.logoSrc}
                    alt={`${partner.name} Logo`}
                  />
                </div>
              </Link>
              <h3 className="mt-2 text-center font-bold">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPartner;
