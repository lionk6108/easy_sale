import React, { useContext } from "react";
import { LanguageContext } from "../../components/home/Header/Header"; // Correct import of ThemeContext
import { ThemeContext } from "../../components/home/Header/Header"; // Import ThemeContext

const EcommerceSteps = () => {
  const { language } = useContext(LanguageContext);  // Access current language
  const { theme } = useContext(ThemeContext); // Access current theme (light or dark)

  // Define translations for each step based on language
  const steps = [
    {
      number: "1",
      title: {
        en: "Find the right deal",
        fr: "Trouvez la bonne offre",
        ar: "ابحث عن الصفقة الصحيحة"
      },
      description: {
        en: "To see offers near you, select your city or the category that interests you.",
        fr: "Pour voir les offres près de chez vous, sélectionnez votre ville ou la catégorie qui vous intéresse.",
        ar: "لرؤية العروض بالقرب منك، اختر مدينتك أو الفئة التي تهمك."
      },
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "2",
      title: {
        en: "Contact seller",
        fr: "Contacter le vendeur",
        ar: "اتصل بالبائع"
      },
      description: {
        en: "When you have found the item you are looking for, contact the seller.",
        fr: "Lorsque vous avez trouvé l'article que vous recherchez, contactez le vendeur.",
        ar: "عندما تجد العنصر الذي تبحث عنه، اتصل بالبائع."
      },
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: {
        en: "Get the deal",
        fr: "Obtenez l'offre",
        ar: "احصل على الصفقة"
      },
      description: {
        en: "Meet the seller and make the good deal.",
        fr: "Rencontrez le vendeur et faites la bonne affaire.",
        ar: "التقِ بالبائع وأبرم الصفقة الجيدة."
      },
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'} sm:text-4xl`}>
            {language === "en" ? "How it works" : language === "fr" ? "Comment ça marche" : "كيف يعمل"}
          </h2>
          <p className={`mt-4 text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            {language === "en" ? "Follow these simple steps to find and get the best deals" : language === "fr" ? "Suivez ces étapes simples pour trouver et obtenir les meilleures offres" : "اتبع هذه الخطوات البسيطة للعثور على أفضل العروض والحصول عليها"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>

              <div className="flex flex-col items-center">
                <div className={`mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300 ${theme === 'light' ? 'bg-blue-50' : 'bg-blue-600'}`}>
                  {step.icon}
                </div>

                <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-2`}>
                  {step.title[language]}  {/* Render title based on the selected language */}
                </h3>

                <p className={`text-gray-600 text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {step.description[language]}  {/* Render description based on the selected language */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceSteps;
