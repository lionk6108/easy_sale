import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import card5 from "../../../assets/images/card5.png";
import card6 from "../../../assets/images/card6.png";
import card7 from "../../../assets/images/card7.png";
import card8 from "../../../assets/images/card8.jpg";
const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
         
          _id="5"
          img={card5}
          productName="Motor R1"
          price= "220 000"
          color= "Nardo Gray"
          des= "6-seater dining table"
          category= "Vehicles"
          city="ElHociema"
        
        />
        <Product
        
          _id= "6"
          img={card6}
          productName= "Vintage T9"
          price= "249"
          color="White"
          badge= "Popular"
          des= "Active noise cancellation"
          category= "Electronics"
          city= "Tanger"
        
        />
        <Product
         
          _id= "7"
          img= {card7}
          productName="Casque moto"
          price= "1 250"
          color="Black"
          badge= "New"
          des="Premium leather messenger bag"
          category= "Vehicles"
          city= "Tanger"
        
        />
        <Product
       
          _id= "8"
          img= {card8}
          productName="Luxury Sofa Set"
          price= "12 500"
          color= "Beige"
          badge= "New"
          des= "Elegant 5-seater sofa set with premium fabric and wooden frame."
          category= "Furniture"
          city= "Casablanca"
        
        />
      </div>
    </div>
  );
};

export default BestSellers;
