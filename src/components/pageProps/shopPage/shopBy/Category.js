// Category.js
import React from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "All",
    "Electronics",
    "Furniture",
    "Vehicles"
  ];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mb-6">
      <div className="cursor-pointer">
        <NavTitle title="Shop by Category" icons={false} />
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer ${
                selectedCategory === category ? "text-primeColor font-semibold" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Category;