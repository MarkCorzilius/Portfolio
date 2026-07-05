import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import { translations } from "./translations";

export function useTranslation() {
  const { language, setLanguage } = useContext(LanguageContext);

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}