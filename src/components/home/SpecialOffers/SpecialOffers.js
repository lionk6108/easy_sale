import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import card9 from "../../../assets/images/card9.png";
import card10 from "../../../assets/images/card10.png";
import card11 from "../../../assets/images/card11.png";
import card12 from "../../../assets/images/card12.png";
const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="9"
          img ={card9}
          productName ="Mercedes 280E"
          price="185 000"
          color= "White"
          des ="The Mercedes-Benz 240D is an iconic model from the esteemed W123 series, produced between 1976 and 1985. Renowned for its durability and robust build, the 240D is often celebrated as one of the most reliable cars ever made. This model is powered by a 2.4-liter"
          categor= "Vehicles"
          city ="Oujda"
  
        />
        <Product
          _id= "10"
          img= {card10}
          productName= "Bureau"
          price="185 000"
          color ="Silver"
          des= "Premium leather messenger bag"
          category="Furniture"
          city ="Rabat"
        />
        <Product
            _id ="11"
            img={card11}
            productName= "Seau d'arrosage"
            price ="70"
            color= "Yellow"
            des="Premium leather messenger bag"
            category="Furniture"
            city= "ElHociema"
        />
        <Product
          _id= "12"
          img ={card12}
          productName= "Jetski"
          price ="95 000"
          color= "Green"
          des= "Premium leather messenger bag"
          category= "Vehicles"
          city= "ElHociema"
       
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
