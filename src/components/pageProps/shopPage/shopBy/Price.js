// Price.jsx
import React from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Price = ({ selectedPrice, setSelectedPrice }) => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0,
      priceTwo: 1000,
      label: "0 - 1,000"
    },
    {
      _id: 951,
      priceOne: 1000,
      priceTwo: 5000,
      label: "1,000 - 5,000"
    },
    {
      _id: 952,
      priceOne: 5000,
      priceTwo: 10000,
      label: "5,000 - 10,000"
    },
    {
      _id: 953,
      priceOne: 10000,
      priceTwo: 100000,
      label: "10,000 - 100,000"
    },
    {
      _id: 954,
      priceOne: 100000,
      priceTwo: 500000,
      label: "100,000 - 500,000"
    },
    {
      _id: 955,
      priceOne: 500000,
      priceTwo: 1000000,
      label: "500,000 - 1,000,000"
    },
    {
      _id: 956,
      priceOne: 1000000,
      priceTwo: 5000000,
      label: "1M - 5M"
    },
    {
      _id: 957,
      priceOne: 5000000,
      priceTwo: 20000000,
      label: "5M+"
    }
  ];

  const handlePriceFilter = (price) => {
    if (selectedPrice?._id === price._id) {
      setSelectedPrice(null);
    } else {
      setSelectedPrice({
        ...price,
        priceOne: Number(price.priceOne),
        priceTwo: Number(price.priceTwo)
      });
    }
  };

  return (
    <div className="mb-6">
      <div className="cursor-pointer">
        <NavTitle title="Shop by Price" icons={false} />
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              onClick={() => handlePriceFilter(item)}
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer ${
                selectedPrice?._id === item._id ? "text-primeColor font-semibold" : ""
              }`}
            >
              {item.label} MAD
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Price;