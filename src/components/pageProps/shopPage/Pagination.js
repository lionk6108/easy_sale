import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";
import card4 from "../../../assets/images/card4.png";
import card5 from "../../../assets/images/card5.png";
import card6 from "../../../assets/images/card6.png";
import card7 from "../../../assets/images/card7.png";
import card8 from "../../../assets/images/card8.jpg";
import card9 from "../../../assets/images/card9.png";
import card10 from "../../../assets/images/card10.png";
import card11 from "../../../assets/images/card11.png";
import card12 from "../../../assets/images/card12.png";
import card13 from "../../../assets/images/card13.jpg";
import card14 from "../../../assets/images/card14.jpg";
import card15 from "../../../assets/images/card15.png";
import card16 from "../../../assets/images/card16.png";
import card17 from "../../../assets/images/card17.png";
import card18 from "../../../assets/images/card18.png";
import card19 from "../../../assets/images/card19.png";
import card20 from "../../../assets/images/card20.jpg";
import card21 from "../../../assets/images/card21.png";
import card22 from "../../../assets/images/card22.jpg";
import card23 from "../../../assets/images/card23.png";
import card24 from "../../../assets/images/card24.png";
import card25 from "../../../assets/images/card25.png";
import card26 from "../../../assets/images/card26.png";
import card27 from "../../../assets/images/card27.png";
import card28 from "../../../assets/images/card28.jpg";
import card29 from "../../../assets/images/card29.jpg";
import card30 from "../../../assets/images/card30.jpg";
import card31 from "../../../assets/images/card31.jpg";
import card32 from "../../../assets/images/card32.jpg";
import card33 from "../../../assets/images/card33.jpg";
import card34 from "../../../assets/images/card34.jpg";
import card35 from "../../../assets/images/card35.jpg";
import card36 from "../../../assets/images/card36.jpg";
import card37 from "../../../assets/images/card37.jpg";
import card38 from "../../../assets/images/card38.jpg";
import card39 from "../../../assets/images/card39.jpg";
import card40 from "../../../assets/images/card40.jpg";
import card41 from "../../../assets/images/card41.jpg";
import card42 from "../../../assets/images/card42.jpg";
import card43 from "../../../assets/images/card43.jpg";
import card44 from "../../../assets/images/card44.jpg";
import card45 from "../../../assets/images/card45.jpg";
import card46 from "../../../assets/images/card46.jpg";
import card47 from "../../../assets/images/card47.jpg";
import card48 from "../../../assets/images/card48.jpg";

export const paginationItems = [
    {
      _id: "1",
      img: card1 ,
      productName: "Mercedes C63s",
      price: "482000 ",  
      color: "Gray",
      badge: "New",
      des: "The Mercedes-AMG C63 S (2016 model) is a high-performance variant of the Mercedes-Benz C-Class, 4.0-liter V8 biturbo engine 503 horsepower",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 
    },
    {
      _id: "2",
      img: card2 ,
      productName: "AirPods Pro 2",
      price: "350",
      color: "White",
      badge: "Bestseller",
      des: "AirPods Pro 2 offers superior noise cancellation, excellent sound quality, and up to 6 hours of listening time per charge. Perfect for anyone who enjoys premium audio experiences.",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 
    },
    {
      _id: "3",
      img: card3 ,
      productName: "Villa",
      price: "8700000",
      color: "White",
      badge: "Sale",
      des: "A stunning oceanfront villa with 6 bedrooms, 5 bathrooms, and a private pool.",
      category: "Furniture",
      city: "Rabat",
      createdAt: "2023-10-01", 
    },
    {
      _id: "4",
      img: card4,
      productName: "Iphone 14",
      price: "6300",
      color: "violet",
      badge: "Limited",
      des: "Apple's latest flagship smartphone with a dynamic island display and A16 Bionic chip.",
      category: "Electronics",
      city: "Oujda",
      createdAt: "2023-10-01", 
    },
    {
      _id: "5",
      img: card5,
      productName: "Motor R1",
      price: "220 000",
      color: "Nardo Gray",
      des: "6-seater dining table",
      category: "Vehicles",
      city: "ElHociema",
      createdAt: "2023-10-01", 
    },
    {
      _id: "6",
      img: card6,
      productName: "Vintage T9",
      price: "249",
      color: "White",
      badge: "Popular",
      des: "Active noise cancellation",
      category: "Electronics",
      city: "Tanger",
      createdAt: "2023-10-01", 
    },

    {
      _id: "7",
      img: card7,
      productName: "Casque moto",
      price: "1250",
      color: "Black",
      badge: "New",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 
    },
    {
      _id: "8",
      img: card8,
      productName: "Luxury Sofa Set",
      price: "12500",
      color: "Beige",
      badge: "New",
      des: "Elegant 5-seater sofa set with premium fabric and wooden frame.",
      category: "Furniture",
      city: "Casablanca",
      createdAt: "2023-10-01", 
    },
    {
      _id: "9",
      img: card9,
      productName: "Mercedes 280E",
      price: "185000",
      color: "White",
      des: "The Mercedes-Benz 240D is an iconic model from the esteemed W123 series, produced between 1976 and 1985. Renowned for its durability and robust build, the 240D is often celebrated as one of the most reliable cars ever made. This model is powered by a 2.4-liter",
      category: "Vehicles",
      city: "Oujda",
      createdAt: "2023-10-01", 
    },
    {
      _id: "10",
      img: card10,
      productName: "Bureau",
      price: "185000",
      color: "Silver",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "Rabat",
      createdAt: "2023-10-01", 
    },
    {
      _id: "11",
      img: card11,
      productName: "Seau d'arrosage",
      price: "70",
      color: "Yellow",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "12",
      img: card12,
      productName: "Jetski",
      price: "95000",
      color: "Green",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "13",
      img: card13,
      productName: "Modern Dining Table",
      price: "7800",
      color: "Gold",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "14",
      img: card14,
      productName: "Samsung S22",
      price: "4500",
      color: "Black",
      badge: "New",
      des: "Premium leather messenger bag",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "15",
      img: card15,
      productName: "Pc Portable",
      price: "8500",
      color: "Black",
      des: "Premium leather messenger bag",
      category: "Electronics",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    {
      _id: "16",
      img: card16,
      productName: "Mercedes 310D",
      price: "230000",
      color: "White",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "17",
      img: card17,
      productName: "Ferrari 812",
      price: "4860000",
      color: "Red",
      badge: "New",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    {
      _id: "18",
      img: card18,
      productName: "Maison",
      price: "3267000",
      color: "Brown",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "19",
      img: card19,
      productName: "Playstation 5",
      price: "6400",
      color: "White",
      des: "Premium leather messenger bag",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "20",
      img: card20,
      productName: "Iphone 8 PLus",
      price: "1250",
      color: "Rose Gold",
      badge: "New",
      des: "Premium leather messenger bag",
      category: "Electronics",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "21",
      img: card21,
      productName: "Moteur de moto",
      price: "7250",
      color: "Black",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "22",
      img: card22,
      productName: "Recliner Chair",
      price: "1250",
      color: "Gray",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    {
      _id: "23",
      img: card23,
      productName: "Montre Apple Watch",
      price: "2200",
      color: "Black",
      badge: "New",
      des: "Premium leather messenger bag",
      category: "Electronics",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "24",
      img: card24,
      productName: "Salle à Manger",
      price: "950",
      color: "Red",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "25",
      img: card25,
      productName: "Tapis marocain",
      price: "800",
      color: "Red",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "26",
      img: card26,
      productName: "Seat Leon",
      price: "230000",
      color: "White",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "27",
      img: card27,
      productName: "Motor Sanya",
      price: "9250",
      color: "Black",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "28",
      img: card28,
      productName: "Smart Watch",
      price: "1250",
      color: "Black",
      des: "Premium leather messenger bag",
      category: "Electronics",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "29",
      img: card29,
      productName: "Glass Coffee Table",
      price: "4300",
      color: "White",
      des: "Premium leather messenger bag",
      category: "Furniture",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    
    {
      _id: "30",
      img: card30,
      productName: "Porsche GT3",
      price: "340000",
      color: "Black",
      des: "Premium leather messenger bag",
      category: "Vehicles",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    {
      _id: "31",
      img: card31,
      productName: "BMW M4",
      price: "610000",
      color: "Blue",
      badge: "Hot",
      des: "The BMW M4 (2021 model) features a 3.0-liter twin-turbo inline-6 engine producing 503 horsepower.",
      category: "Vehicles",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    {
      _id: "32",
      img: card32,
      productName: "iPhone 15 Pro Max",
      price: "1400",
      color: "Titanium",
      badge: "Bestseller",
      des: "Apple's latest iPhone 15 Pro Max with a powerful A17 chip and advanced camera system.",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "33",
      img: card33,
      productName: "Luxury Penthouse",
      price: "15000000",
      color: "White",
      badge: "New",
      des: "A stunning penthouse with panoramic city views, 4 bedrooms, and a rooftop pool.",
      category: "Furniture",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "34",
      img: card34,
      productName: "Audi RS6",
      price: "750000",
      color: "Red",
      badge: "Hot",
      des: "A high-performance Audi RS6 with a 4.0L twin-turbo V8 producing 591 horsepower.",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "35",
      img: card35,
      productName: "Samsung 85\" QLED TV",
      price: "2900",
      color: "Black",
      badge: "New",
      des: "Samsung's 85-inch QLED TV with 4K resolution and HDR for an immersive viewing experience.",
      category: "Electronics",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "36",
      img: card36,
      productName: "Tesla Model S Plaid",
      price: "1200000",
      color: "Black",
      badge: "Bestseller",
      des: "Tesla Model S Plaid with a tri-motor AWD system delivering 1,020 horsepower.",
      category: "Vehicles",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "37",
      img: card37,
      productName: "Gaming Laptop - ROG Zephyrus",
      price: "2000",
      color: "Gray",
      badge: "New",
      des: "ASUS ROG Zephyrus gaming laptop with an Intel i9 processor and RTX 4090 graphics.",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "38",
      img: card38,
      productName: "Modern Living Room Set",
      price: "18000",
      color: "Beige",
      badge: "Sale",
      des: "A stylish and comfortable living room set with premium fabric and wooden frame.",
      category: "Furniture",
      city: "Oujda",
      createdAt: "2023-10-01", 

    },
    {
      _id: "39",
      img: card39,
      productName: "Lamborghini Urus",
      price: "2800000",
      color: "Yellow",
      badge: "Hot",
      des: "Lamborghini Urus, the world's fastest SUV with a 4.0L twin-turbo V8 producing 641 horsepower.",
      category: "Vehicles",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "40",
      img: card40,
      productName: "Sony PlayStation 5",
      price: "6000",
      color: "White",
      badge: "Bestseller",
      des: "Sony PS5 with ultra-fast SSD, 4K gaming, and an innovative DualSense controller.",
      category: "Electronics",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "41",
      img: card41,
      productName: "Outdoor Patio Set",
      price: "9500",
      color: "Brown",
      badge: "New",
      des: "A weather-resistant outdoor patio set with comfortable cushions and a stylish table.",
      category: "Furniture",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "42",
      img: card42,
      productName: "Ferrari F8 Tributo",
      price: "3400000",
      color: "Red",
      badge: "Hot",
      des: "Ferrari F8 Tributo with a 3.9L twin-turbo V8 engine producing 710 horsepower.",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "43",
      img: card43,
      productName: "MacBook Pro M3 Max",
      price: "3500",
      color: "Space Gray",
      badge: "New",
      des: "Apple's latest MacBook Pro with the powerful M3 Max chip for professional performance.",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "44",
      img: card44,
      productName: "Dining Table Set",
      price: "12300",
      color: "Dark Wood",
      badge: "Sale",
      des: "A modern wooden dining table with 6 matching chairs, perfect for family dinners.",
      category: "Furniture",
      city: "Rabat",
      createdAt: "2023-10-01", 

    },
    {
      _id: "45",
      img: card45,
      productName: "Porsche 911 Turbo S",
      price: "1800000",
      color: "Silver",
      badge: "Hot",
      des: "Porsche 911 Turbo S with a 3.8L twin-turbo flat-6 engine producing 640 horsepower.",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 

    },
    {
      _id: "46",
      img: card46,
      productName: "Samsung Galaxy Z Fold 5",
      price: "1900",
      color: "Phantom Black",
      badge: "Bestseller",
      des: "Samsung's latest foldable phone with a 7.6-inch AMOLED display and S Pen support.",
      category: "Electronics",
      city: "Casablanca",
      createdAt: "2023-10-01", 

    },
    {
      _id: "47",
      img: card47,
      productName: "Luxury Bedroom Set",
      price: "20000",
      color: "White",
      badge: "New",
      des: "A complete luxury bedroom set with a king-size bed, wardrobe, and nightstands.",
      category: "Furniture",
      city: "ElHociema",
      createdAt: "2023-10-01", 

    },
    {
      _id: "48",
      img: card48,
      productName: "Range Rover SVR",
      price: "1300000",
      color: "Blue",
      badge: "Hot",
      des: "Range Rover SVR with a supercharged V8 engine producing 575 horsepower and a luxury interior.",
      category: "Vehicles",
      city: "Tanger",
      createdAt: "2023-10-01", 

    }
  ];

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </div>
  );
}

const Pagination = ({ itemsPerPage = 6, selectedCategory = "All", selectedPrice = null, selectedCity = "All Cities" }) => {
  const [itemOffset, setItemOffset] = useState(0);

  // Convert price to number in products
  const productsWithNumberPrice = paginationItems.map(item => ({
    ...item,
    price: parseFloat(item.price)
  }));

  // Filter products
  const filteredItems = productsWithNumberPrice.filter(item => {
    // Category filter
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    
    // Price filter
    const priceMatch = !selectedPrice || 
      (selectedPrice.priceOne && selectedPrice.priceTwo && 
       item.price >= selectedPrice.priceOne && item.price <= selectedPrice.priceTwo);
    
    // City filter
    const cityMatch = selectedCity === "All Cities" || item.city === selectedCity;

    return categoryMatch && priceMatch && cityMatch;
  });

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
  };

  const currentPage = Math.ceil(itemOffset / itemsPerPage) + 1;
  const startItem = itemOffset + 1;
  const endItem = Math.min(endOffset, filteredItems.length);

  return (
    <div>
      <Items currentItems={currentItems} />
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel="Next"
          previousLabel="Previous"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
          renderOnZeroPageCount={null}
        />

        <p className="text-base font-normal text-lightText">
          Products from {startItem} to {endItem} of {filteredItems.length}
        </p>  
      </div>
    </div>
  );
};

export default Pagination;