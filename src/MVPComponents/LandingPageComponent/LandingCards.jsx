import React from "react";
const LandingCards = () => {
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        <h1 className="text-3xl">Why Smart CART ? </h1>
        <div className="rounded h-24" />
        <div className="rounded h-24" />
        <div className="rounded h-24" />
      </div>
    </>
  );
};

export default LandingCards;
