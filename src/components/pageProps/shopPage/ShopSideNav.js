import React from "react";
import Category from "./shopBy/Category";

import Price from "./shopBy/Price";
import City from "./shopBy/City";

const ShopSideNav = ({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  selectedCity,
  setSelectedCity,
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <City
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Price
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      
    </div>
  );
};

export default ShopSideNav;