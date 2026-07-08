"use client";

import { useTranslation } from "@/i18n/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { scrollToSection } from "../utils/ScrollToSection";
import PrimaryButton from "../ui/PrimaryButton";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <nav className="w-full fixed z-[10] font-serif top-0 flex justify-center items-center py-3 transition-all duration-300 bg-surface shadow-2xs">
        <div className="w-full max-w-[1440px] flex items-center justify-between px-8 lg:px-16">
          <img src="icons/logo.svg" alt={t.logoAlt} />
          <div className="hidden items-center gap-24 lg:flex">
            <section>
              <ul className="flex items-center gap-16">
                <li onClick={() => scrollToSection("about")} className="text-neutral-500 font-medium hover:text-black transition-colors duration-300 cursor-pointer">{t.aboutMe}</li>
                <li onClick={() => scrollToSection("skills")} className="text-neutral-500 font-medium hover:text-black transition-colors duration-300 cursor-pointer">{t.skills}</li>
                <li onClick={() => scrollToSection("projects")} className="text-neutral-500 font-medium hover:text-black transition-colors duration-300 cursor-pointer">{t.projects}</li>
              </ul>
            </section>
            <section className="flex items-center gap-4">
              <LanguageSwitcher />
              <PrimaryButton text={t.contacts} scrollTo="contact" />
            </section>
          </div>
          <button className="cursor-pointer transition-all duration-300 lg:hidden" onClick={() => setMenuOpen(true)}>
            <svg width={40} height={40} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="20" width="100" height="12" rx="6" fill="black" />
              <rect y="44" width="100" height="12" rx="6" fill="black" />
              <rect y="68" width="100" height="12" rx="6" fill="black" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
