"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white font-serif py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <div>
          <h2 className="text-lg">Mark Corzilius</h2>
          <p className="text-sm text-neutral-200">Software Engineer</p>
        </div>
        <SocialLinks theme="light"/>
        <p className="text-xs text-neutral-300">© 2026 Mark Corzilius · Impressum · Datenschutz</p>
      </div>
    </footer>
  );
}
