"use client";

import { useEffect } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialLinks from "./SocialLinks";
import { scrollToSection } from "../utils/ScrollToSection";
import PrimaryButton from "../ui/PrimaryButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigation = (id: string) => {
    onClose();

    setTimeout(() => {
      scrollToSection(id, 48);
    }, 100);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen flex-col overflow-hidden bg-surface px-8 font-serif">
      <header className="flex items-center justify-between py-6">
        <img src="/assets/icons/logo.svg" alt={t.logoAlt} className="h-10" />

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-4xl
            text-neutral-500
            transition-all
            duration-300
            hover:bg-neutral-100
            hover:text-black
            cursor-pointer
          "
        >
          ×
        </button>
      </header>

      <main className="flex flex-1 items-start justify-center pt-4 md:pt-12">
        <div
          className="
      relative
      w-full
      max-w-sm
      px-8
      py-10
    "
        >
          <div
            className="
        absolute
        inset-0
        pointer-events-none
        rounded-3xl
        border
        border-neutral-900

        before:absolute
        before:-top-[1px]
        before:left-10
        before:h-[3px]
        before:w-20
        before:bg-surface

        after:absolute
        after:-bottom-[1px]
        after:right-10
        after:h-[3px]
        after:w-20
        after:bg-surface
      "
          />

          <div className="relative flex flex-col items-center">
            <nav>
              <ul className="flex flex-col items-center gap-10">
                <li>
                  <button
                    onClick={() => handleNavigation("about")}
                    className="
                text-3xl
                font-medium
                text-neutral-500
                transition-all
                duration-300
                hover:text-black
                hover:tracking-[0.15em]
                cursor-pointer
              "
                  >
                    {t.aboutMe}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("skills")}
                    className="
                text-3xl
                font-medium
                text-neutral-500
                transition-all
                duration-300
                hover:text-black
                hover:tracking-[0.15em]
                cursor-pointer
              "
                  >
                    {t.skills}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("projects")}
                    className="
                text-3xl
                font-medium
                text-neutral-500
                transition-all
                duration-300
                hover:text-black
                hover:tracking-[0.15em]
                cursor-pointer
              "
                  >
                    {t.projects}
                  </button>
                </li>
              </ul>
            </nav>

            <div className="mt-14 flex flex-col items-center gap-6">
              <LanguageSwitcher />

              <div onClick={() => handleNavigation("contact")}>
                <PrimaryButton text={t.contacts} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-28
          w-full
          overflow-hidden
        "
      >
        <div
          className="absolute inset-0 bg-black"
          style={{
            clipPath: "polygon(0 45%,100% 0,100% 100%,0 100%)",
          }}
        />

        <div
          className="
            relative
            flex
            h-full
            items-end
            justify-end
            px-8
            pb-5
          "
        >
          <SocialLinks theme="light" />
        </div>
      </footer>
    </div>
  );
}
