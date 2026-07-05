"use client";

import SkillsMarquee from "@/components/layout/SkillsMarquee";
import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-surface justify-center items-start pt-24">
      <div className="w-dvw flex justify-center items-center gap-48 px-8">
        <section className="flex flex-col items-start font-serif">
          <h1 className="text-5xl mb-4 text-dark">Mark Corzilius</h1>
          <h1 className="text-5xl text-neutral-500">Software Engineer</h1>
          <p className="mt-8 text-text text-lg">{t.heroTagline}</p>
          <div className="flex items-center mt-8 gap-8">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/mark-corzilius-080b5137a/" target="_blank">
                <img
                  width={40}
                  height={40}
                  className="rounded-lg hover:scale-120 hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
                  src="/icons/linkedin.default.svg"
                  alt={t.linkedInAlt}
                />
              </a>
              <a href="https://github.com/MarkCorzilius" target="_bank">
                <img
                  width={40}
                  height={40}
                  className="rounded-lg hover:scale-120 hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
                  src="/icons/github.default.svg"
                  alt={t.githubAlt}
                />
              </a>
              <a href="mailto:markcorzilius@gmail.com" target="_blank">
                <img
                  width={40}
                  height={40}
                  className="rounded-lg hover:scale-120 hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
                  src="/icons/email.default.svg"
                  alt={t.emailAlt}
                />
              </a>
            </div>
            <button className="text-neutral-500 text-lg hover:text-black transition-[color,transform] cursor-pointer ease-in-out hover:translate-x-1 transition-all duration-300">
              {t.seeProjects}
            </button>
          </div>
        </section>
        <section>
          <img src="/images/profile.png" width={360} height={360} alt={t.profileImageAlt} />
        </section>
      </div>
      <SkillsMarquee />
    </div>
  );
}
