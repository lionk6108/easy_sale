import React from "react";
import { Link } from "react-router-dom";
// Importing images individually
import saleImgOne from "../../../assets/images/premium1.jpeg"; // Adjust path and file extension as necessary
import saleImgTwo from "../../../assets/images/premium2.jpeg";
import saleImgThree from "../../../assets/images/premium3.jpeg";
import saleImgFour from "../../../assets/images/premium4.jpeg";

const Sale = () => {
  return (
    <div className="max-w-container mx-auto px-4 py-10">
      {/* Grid layout for the images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginLeft: '200px' }}>
        
        {/* Sale Image One */}
        <div className="relative group lg:col-span-1">
          <Link to="/sale1">
            <img 
              src={saleImgOne} 
              alt="Sale Image 1" 
              className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300" 
            />
          </Link>
        </div>
        
        {/* Sale Image Two */}
        <div className="relative group lg:col-span-1">
          <Link to="/sale2">
            <img 
              src={saleImgTwo} 
              alt="Sale Image 2" 
              className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300" 
            />
          </Link>
        </div>
        
        {/* Sale Image Three - Hidden on mobile */}
        <div className="relative group lg:col-span-1 hidden lg:block">
          <Link to="/sale3">
            <img 
              src={saleImgThree} 
              alt="Sale Image 3" 
              className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300" 
            />
          </Link>
        </div>

        {/* Sale Image Four - Hidden on mobile */}
        <div className="relative group lg:col-span-3 hidden lg:block">
          <Link to="/sale4">
            <img 
              src={saleImgFour} 
              alt="Sale Image 4" 
              className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300" 
            />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Sale;
