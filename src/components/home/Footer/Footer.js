import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import paymentCard  from "../../../assets/images/footer1.png"; // Vérifiez le chemin d'importation des images
import Image from "../../designLayouts/Image"; // Assurez-vous que ce composant existe et fonctionne
import { LanguageContext, ThemeContext } from "../Header/Header"; // Ajustez le chemin en fonction de votre structure de fichiers

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { language } = useContext(LanguageContext); // Accédez au contexte de la langue
  const { isDarkMode } = useContext(ThemeContext); // Accédez à l'état du mode sombre

  // Traductions spécifiques à la langue pour le Footer
  const footerTranslations = {
    subscribeTitle: {
      en: "Subscribe",
      fr: "Abonnez-vous ",
      ar: "اشترك",
    },
    subscribeMessage: {
      en: "Stay updated with the latest news and offers.",
      fr: "Restez informé des dernières nouvelles et offres.",
      ar: "ابق على اطلاع بأحدث الأخبار والعروض.",
    },
    successMessage: {
      en: "Subscribed Successfully!",
      fr: "Abonnement réussi!",
      ar: "تم الاشتراك بنجاح!",
    },
    errorMessage: {
      en: "Please provide an Email!",
      fr: "Veuillez fournir un e-mail!",
      ar: "الرجاء تقديم بريد إلكتروني!",
    },
    invalidEmail: {
      en: "Please give a valid Email!",
      fr: "Veuillez fournir un email valide!",
      ar: "الرجاء إدخال بريد إلكتروني صالح!",
    },
    moreAboutTitle: {
      en: "More about Orebi Shop",
      fr: "Plus sur Orebi Shop",
      ar: "المزيد عن أوربي شوب",
    },
    shopTitle: {
      en: "Shop",
      fr: "Boutique",
      ar: "المتجر",
    },
    accountTitle: {
      en: "Your account",
      fr: "Votre compte",
      ar: "حسابك",
    },
    // Ajout de la traduction pour le placeholder et le profil, l'adresse, etc.
    profileLink: {
      en: "Profile",
      fr: "Profil",
      ar: "الملف الشخصي",
    },
    ordersLink: {
      en: "Orders",
      fr: "Commandes",
      ar: "الطلبات",
    },
    addressesLink: {
      en: "Addresses",
      fr: "Adresses",
      ar: "العناوين",
    },
    accountDetailsLink: {
      en: "Account Details",
      fr: "Détails du compte",
      ar: "تفاصيل الحساب",
    },
    paymentOptionsLink: {
      en: "Payment Options",
      fr: "Options de paiement",
      ar: "خيارات الدفع",
    },
    emailPlaceholder: {
      en: "Insert your email ...*",
      fr: "Insérez votre e-mail ...*",
      ar: "أدخل بريدك الإلكتروني ...*",
    },
    shopCategories: {
      en: {
        accessories: "Accessories",
        clothes: "Clothes",
        electronics: "Electronics",
        homeAppliances: "Home appliances",
        newArrivals: "New Arrivals",
      },
      fr: {
        accessories: "Accessoires",
        clothes: "Vêtements",
        electronics: "Électronique",
        homeAppliances: "Appareils ménagers",
        newArrivals: "Nouveautés",
      },
      ar: {
        accessories: "إكسسوارات",
        clothes: "ملابس",
        electronics: "إلكترونيات",
        homeAppliances: "الأجهزة المنزلية",
        newArrivals: "الوافدون الجدد",
      },
    },
  };

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg(footerTranslations.errorMessage[language]);
    } else if (!emailValidation(emailInfo)) {
      setErrMsg(footerTranslations.invalidEmail[language]);
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    
    <div className={`w-full py-20 ${isDarkMode ? "bg-darkBg text-white" : "bg-lightBg text-darkText"}`}>
       {/* Ajouter une image après la section du Footer */}
       
       <div className="max-w-container mx-auto flex justify-center items-center">
          <img src={paymentCard} alt="Payment Methods" className="w-full max-w-[10000px] h-auto" />
        </div>

<br /><br />

      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10">
        {/* More about Orebi Shop */}
        <div className="col-span-2">
          <FooterListTitle title={footerTranslations.moreAboutTitle[language]} />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              <a href="https://www.youtube.com/@istantictanger8157" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a href="https://github.com/younes-ahamdi" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a href="https://www.facebook.com/yahamdi2/" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <FooterListTitle title={footerTranslations.shopTitle[language]} />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.shopCategories[language].accessories}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.shopCategories[language].clothes}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.shopCategories[language].electronics}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.shopCategories[language].homeAppliances}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.shopCategories[language].newArrivals}
            </li>
          </ul>
        </div>

        {/* Your Account Links */}
        <div>
          <FooterListTitle title={footerTranslations.accountTitle[language]} />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.profileLink[language]}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.ordersLink[language]}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.addressesLink[language]}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.accountDetailsLink[language]}
            </li>
            <li className="font-titleFont text-base hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {footerTranslations.paymentOptionsLink[language]}
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title={footerTranslations.subscribeTitle[language]} />
          <div className="w-full">
            <p className="text-center mb-4">{footerTranslations.subscribeMessage[language]}</p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                {footerTranslations.successMessage[language]}
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder={footerTranslations.emailPlaceholder[language]} // Updated placeholder
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-primeColor text-lg py-2 px-8 font-semibold tracking-wide uppercase rounded-[5px] hover:bg-primeColor hover:text-white hover:transition-all duration-300"
                >
                  {footerTranslations.subscribeTitle[language]} {/* The button text also changes */}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Footer;
