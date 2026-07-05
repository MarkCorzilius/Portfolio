"use client";

import { createContext, useState } from "react";
import { Language } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>("de");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}