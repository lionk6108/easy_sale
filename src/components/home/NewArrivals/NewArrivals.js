import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Swal from "sweetalert2";
import Product from "../../home/Products/Product";
import Heading from "../Products/Heading";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import AddProduct from "./AddProduct";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";
import card4 from "../../../assets/images/card4.png";
import "./Del.css"; 

const NewArrivals = () => {
  const { isAuthenticated, userRole } = useSelector((state) => state.orebiReducer);
  const isAdmin = userRole === "admin";

  const [products, setProducts] = useState([
    {
      _id: "1",
      img: card1,
      productName: "Mercedes C63s",
      price: "482 000",
      color: "Gray",
      badge: "New",
      des: "The Mercedes-AMG C63 S (2016 model) is a high-performance variant of the Mercedes-Benz C-Class, 4.0-liter V8 biturbo engine 503 horsepower",
      category: "Vehicles",
      city: "Tanger",
    },
    {
      _id: "2",
      img: card2,
      productName: "AirPods Pro 2",
      price: "350",
      color: "White",
      badge: "Bestseller",
      des: "AirPods Pro 2 offers superior noise cancellation, excellent sound quality, and up to 6 hours of listening time per charge. Perfect for anyone who enjoys premium audio experiences.",
      category: "Electronics",
      city: "Casablanca",
    },
    {
      _id: "3",
      img: card3,
      productName: "Villa",
      price: "8 700 000",
      color: "White",
      badge: "Sale",
      des: "A stunning oceanfront villa with 6 bedrooms, 5 bathrooms, and a private pool.",
      category: "Furniture",
      city: "Rabat",
    },
    {
      _id: "4",
      img: card4,
      productName: "iPhone 14",
      price: "6 300",
      color: "Violet",
      badge: "Limited",
      des: "Apple's latest flagship smartphone with a dynamic island display and A16 Bionic chip.",
      category: "Electronics",
      city: "Oujda",
    },
  ]);

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  const handleAddProduct = useCallback((newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setShowAddProductForm(false);
    setForceUpdate((prev) => prev + 1);
  }, []);

  const handleDeleteProduct = useCallback((productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        setForceUpdate((prev) => prev + 1);
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your product is safe :)", "error");
      }
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, products.length),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    key: forceUpdate,
    responsive: [
      { breakpoint: 1025, settings: { slidesToShow: Math.min(3, products.length), slidesToScroll: 1 } },
      { breakpoint: 769, settings: { slidesToShow: Math.min(2, products.length), slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: Math.min(1, products.length), slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />

      {isAuthenticated && isAdmin && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowAddProductForm(true)}
            className="bg-primeColor hover:bg-black text-white font-bold py-2 px-4 rounded duration-300"
          >
            Add New Product
          </button>
        </div>
      )}

      {showAddProductForm && <AddProduct onAddProduct={handleAddProduct} />}

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="px-2 relative">
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
              badge={product.badge}
              des={product.des}
            />
            {isAuthenticated && isAdmin && (
              <button
                className="absolute top-2 right-7 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-700 transition"
                onClick={() => handleDeleteProduct(product._id)}
              >
                <i className="fa-solid fa-trash mr-1"></i> Delete
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
