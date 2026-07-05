import de from "./de.json";
import en from "./en.json";

export const translations = {
  de,
  en,
};

export type Language = keyof typeof translations;