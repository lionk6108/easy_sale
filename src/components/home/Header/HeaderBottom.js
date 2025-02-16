import React, { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { paginationItems } from "../../../constants";
import { LanguageContext, ThemeContext } from './Header';

const HeaderBottom = ({ onSearch }) => {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleMenuClick = () => {
    setShowUser(false);
  };

  const getTranslatedCategory = (category) => {
    const translations = {
      en: {
        "shopByCategory": "Shop by Category",
        "vehicles": "Vehicles",
        "furniture": "Furniture",
        "electronics": "Electronics",
        "searchProducts": "Search for products, categories, or cities..."
      },
      fr: {
        "shopByCategory": "Acheter par catégorie",
        "vehicles": "Véhicules",
        "furniture": "Meubles",
        "electronics": "Électronique",
        "searchProducts": "Rechercher produits, catégories ou villes..."
      },
      ar: {
        "shopByCategory": "تسوق حسب الفئة",
        "vehicles": "مركبات",
        "furniture": "أثاث",
        "electronics": "إلكترونيات",
        "searchProducts": "البحث عن المنتجات أو الفئات أو المدن..."
      }
    };

    return translations[language]?.[category.toLowerCase()] || category;
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setShowSearchResults(false);
      onSearch && onSearch("");
      return;
    }

    const searchTerm = searchQuery.toLowerCase();
    const filtered = paginationItems.filter((item) => 
      item.productName.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm)
    );

    setFilteredProducts(filtered.slice(0, 5));
    setShowSearchResults(true);
    onSearch && onSearch(searchQuery); // Pass the search query to parent component
  }, [searchQuery, onSearch]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (item) => {
    navigate(`/product/${item.productName.toLowerCase().split(" ").join("")}`, {
      state: { item }
    });
    setSearchQuery("");
    setFilteredProducts([]);
    setShowSearchResults(false);
    onSearch && onSearch("");
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setShowSearchResults(false);
      navigate('/products', { state: { searchQuery } });
    }
  };

  return (
    <div className={`w-full relative ${theme === "light" ? "bg-[#F5F5F3]" : "bg-gray-900"}`}>
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className={`flex h-14 cursor-pointer items-center gap-2 ${theme === "light" ? "text-primeColor" : "text-white"}`}
          >
            <HiOutlineMenuAlt4 className={`w-5 h-5 ${theme === "light" ? "text-primeColor" : "text-white"}`} />
            <p className="text-[14px] font-normal">{getTranslatedCategory("shopByCategory")}</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-36 z-50 ${theme === "light" ? "bg-primeColor text-[#767676]" : "bg-gray-800 text-white"} w-auto h-auto p-4 pb-6`}
              >
                {["Vehicles", "Furniture", "Electronics"].map((category) => (
                  <li
                    key={category}
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(category);
                      setShow(false);
                      onSearch && onSearch(category);
                    }}
                  >
                    {getTranslatedCategory(category)}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          <div className={`relative w-full lg:w-[600px] h-[50px] text-base ${theme === "light" ? "text-primeColor bg-white" : "text-white bg-gray-800"} flex items-center gap-2 justify-between px-6 rounded-xl`}>
            <input
              className={`flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] bg-transparent ${theme === "light" ? "text-primeColor" : "text-white"}`}
              type="text"
             
              onKeyPress={handleSearchSubmit}
              value={searchQuery}
              placeholder={getTranslatedCategory("search Products")}
            />
            <FaSearch 
              className={`w-5 h-5 ${theme === "light" ? "text-primeColor" : "text-white"} cursor-pointer`}
              onClick={handleSearchSubmit}
            />
            
            {showSearchResults && filteredProducts.length > 0 && (
              <div className={`w-full mx-auto max-h-96 ${theme === "light" ? "bg-white" : "bg-gray-800"} top-16 absolute left-0 z-50 overflow-y-auto shadow-2xl scrollbar-hide cursor-pointer rounded-xl`}>
                {filteredProducts.map((item) => (
                  <div
                    onClick={() => handleProductClick(item)}
                    key={item._id}
                    className={`p-4 border-b ${theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"} transition-colors`}
                  >
                    <div className="flex items-center gap-4">
                      <img className="w-16 h-16 object-cover rounded" src="/src/components/pageProps/shopPage/Pagination.js" alt={item.productName} />
                      <div className="flex flex-col gap-1">
                        <p className={`font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                          {item.productName}
                        </p>
                        <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                          {item.price} MAD
                        </p>
                        <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                          {item.city} • {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser className={`${theme === "light" ? "text-primeColor" : "text-white"}`} />
              <FaCaretDown className={`${theme === "light" ? "text-primeColor" : "text-white"}`} />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-6 left-0 z-50 ${theme === "light" ? "bg-primeColor text-[#767676]" : "bg-gray-800 text-white"} w-auto p-4 rounded-xl`}
              >
                <li>
                  <Link 
                    to="/signin"
                    onClick={handleMenuClick}
                    className="text-gray-400 px-4 py-1 hover:border-b-white hover:text-white duration-300 cursor-pointer block w-full"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/signup"
                    onClick={handleMenuClick}
                    className="text-gray-400 px-4 py-1 hover:border-b-white hover:text-white duration-300 cursor-pointer block w-full"
                  >
                    Sign Up
                  </Link>
                </li>
              </motion.ul>
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;