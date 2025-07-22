// LanguageToggleButton.tsx
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

export const LanguageToggleButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-blue-500 hover:text-white transition duration-300 text-md"
    >
      <FaGlobe />
    </button>
  );
};
