"use client";

import { useTranslation } from "@/i18n/useTranslation";
import DarkButton from "../ui/DarkButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="w-dvw fixed font-serif top-0 flex justify-between items-center py-3 px-6 transition-all duration-300 bg-surface shadow-2xs">
      <img src="icons/logo.svg" alt={t.logoAlt} />
      <div className="flex items-center gap-24">
        <section>
          <ul className="flex items-center gap-16">
            <li className="text-neutral-500 font-medium hover:text-black transition-colors duration-300 cursor-pointer">{t.aboutMe}</li>
            <li className="text-neutral-500 font-medium hover:text-black transition-colors duration-300 cursor-pointer">{t.projects}</li>
            <li className="text-neutral-500 font-medium hover:text-black transition-colors duration-300 cursor-pointer">{t.skills}</li>
          </ul>
        </section>
        <section className="flex items-center gap-4">
          <LanguageSwitcher />
          <DarkButton text={t.contacts} />
        </section>
      </div>
    </nav>
  );
}
