import React, { useEffect, useState, createContext, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../../assets/images/logo.png";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

// Import images pour chaque langue
import englishImage from "../../../assets/images/english.jpeg";
import franceImage from "../../../assets/images/france.jpeg";
import marocImage from "../../../assets/images/maroc.jpeg";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/orebiSlice";

// Contexts pour le thème et la langue
export const ThemeContext = createContext();
export const LanguageContext = createContext();

// Fournisseur de langue pour gérer les changements de langue
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Fournisseur de thème pour gérer le changement de thème (clair/sombre)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Sélecteur de langue avec images
const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Langues et leurs images correspondantes
  const languages = [
    { code: "en", name: "English", image: englishImage },
    { code: "fr", name: "Français", image: franceImage },
    { code: "ar", name: "العربية", image: marocImage },
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
          theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
        }`}
      >
        <img
          src={languages.find((l) => l.code === language)?.image}
          alt={language}
          className="w-10 h-10 object-cover rounded-full"
        />
      </button>

      {isDropdownOpen && (
        <div
          className={`absolute right-0 mt-2 py-2 w-48 rounded-md shadow-lg ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block w-full text-left px-4 py-2 ${
                theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
              } ${
                language === lang.code
                  ? theme === "light"
                    ? "bg-gray-100 font-bold"
                    : "bg-gray-700 font-bold"
                  : ""
              }`}
            >
              <div className="flex items-center">
                <img
                  src={lang.image}
                  alt={lang.code}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span className="ml-2">{lang.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Composant Header
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Dispatch et état du Redux
  const dispatch = useDispatch();
  const { isAuthenticated, userRole } = useSelector((state) => state.orebiReducer);

  const getNavTitle = (title) => {
    const translations = {
      Home: {
        en: "Home",
        fr: "Accueil",
        ar: "الرئيسية",
      },
      Shop: {
        en: "Shop",
        fr: "Boutique",
        ar: "المتجر",
      },
      About: {
        en: "About Us",
        fr: "À propos",
        ar: "عن الشركة",
      },
      Contact: {
        en: "Contact",
        fr: "Contact",
        ar: "اتصل بنا",
      },
      "Add Product": {
        en: "Add Product",
        fr: "Ajouter un produit",
        ar: "إضافة منتج",
      },
      Dashboard: {
        en: "Dashboard",
        fr: "Tableau de bord",
        ar: "لوحة التحكم",
      },
      Logout: {
        en: "Logout",
        fr: "Déconnexion",
        ar: "تسجيل الخروج",
      },
    };
    return translations[title]?.[language] || title;
  };

  useEffect(() => {
    const ResponsiveMenu = () => {
      setShowMenu(window.innerWidth >= 667);
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => window.removeEventListener("resize", ResponsiveMenu);
  }, []);

  // Liste de navigation incluant Add Product pour les admins
  const getNavItems = () => {
    let items = [...navBarList.slice(0, 4)];
    if (isAuthenticated && userRole === "admin") {
      items.push({
        _id: "nav6",
        title: "Dashboard",
        link: "/dashboard",
      });
    }
    return items;
  };

  return (
    <div
      className={`w-full h-20 sticky top-0 z-50 border-b-[1px] ${
        theme === "light" 
          ? "bg-white border-b-gray-200" 
          : "bg-gray-800 border-b-gray-700 text-white"
      }`}
    >
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-20 object-cover" imgSrc={logo} />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "light"
                  ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </button>

            {isAuthenticated && (
              <button
                onClick={() => dispatch(logoutUser())}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  theme === "light"
                    ? "bg-white-50 text-gray-600 hover:bg-gray-100"
                    : "bg-white-900/20 text-gray-400 hover:bg-gray-900/30"
                }`}
              >
                <LogOut className="w-4 h-4" />
                <span>{getNavTitle("Logout")}</span>
              </button>
            )}

            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center w-auto z-50 p-0 gap-2 ${
                  theme === "light" ? "text-[#767676]" : "text-gray-300"
                }`}
              >
                {getNavItems().map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                    className={({ isActive }) =>
                      `flex font-normal justify-center items-center px-12 text-base py-2
                      ${
                        isActive
                          ? theme === "light"
                            ? "text-[#262626] font-bold"
                            : "text-white font-bold"
                          : theme === "light"
                          ? "text-[#767676]"
                          : "text-gray-300"
                      }
                      hover:underline underline-offset-[4px] decoration-[1px] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0
                      ${theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"}`}
                  >
                    <li>{getNavTitle(title)}</li>
                  </NavLink>
                ))}
              </motion.ul>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;