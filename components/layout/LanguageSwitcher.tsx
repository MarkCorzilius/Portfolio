"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function LanguageSwitcher() {
    
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="flex-inline rounded-full bg-neutral-200 py-2 px-4">
      <button
        onClick={() => setLanguage("de")}
        className={language === "de" ? "text-black font-bold" : "cursor-pointer transition-all duration-300 text-neutral-500 hover:text-black"}
      >
        DE
      </button>
      <span> | </span>
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "text-black font-bold" : "cursor-pointer transition-all duration-300 text-neutral-500 hover:text-black"}
      >
        EN
      </button>
    </div>
  );
}
