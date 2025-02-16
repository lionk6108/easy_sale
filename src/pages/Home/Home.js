import React, { useContext } from "react";
import { ThemeContext } from "../../components/home/Header/Header"; // Correct import of ThemeContext
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  const { theme } = useContext(ThemeContext); // Using the theme from ThemeContext

  return (
    <div className={`w-full mx-auto min-h-screen 
      ${theme === 'light' 
        ? 'bg-white text-black' 
        : 'bg-gray-900 text-white'}`}
    >
      <Banner />
      <BannerBottom />
      <div className={`max-w-container mx-auto px-4 
        ${theme === 'light' 
          ? 'bg-white text-black' 
          : 'bg-gray-900 text-white'}`}
      >
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
