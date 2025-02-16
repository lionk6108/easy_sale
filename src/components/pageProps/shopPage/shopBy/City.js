import React from "react";
import NavTitle from "./NavTitle";

const City = ({ selectedCity, setSelectedCity }) => {
  const cities = [
    "All Cities",
    "Tanger",
    "Casablanca",
    "Rabat",
    "Oujda",
    "ElHociema",
  ];

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="mb-6">
      <NavTitle title="Filter by City" />
      <div className="flex flex-col gap-2">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => handleCityChange(city)}
            className={`text-left px-2 py-1 border-b-[1px] border-b-[#F0F0F0] hover:text-primeColor hover:border-gray-400 duration-300 ${
              selectedCity === city
                ? "text-primeColor font-semibold bg-gray-50"
                : "text-gray-600"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default City;