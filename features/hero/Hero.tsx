"use client";

import SkillsMarquee from "@/components/layout/SkillsMarquee";
import SocialLinks from "@/components/layout/SocialLinks";
import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-surface justify-center items-center pt-24">
      <div className="w-full max-w-[1440px] px-8 lg:px-16">
        <div className="flex flex-col items-center lg:hidden">
          <section className="flex flex-col items-center font-serif text-center mb-10">
            <h1 className="text-3xl text-black font-semibold sm:text-4xl">Mark Corzilius</h1>

            <h2 className="text-3xl text-neutral-500 mt-2 sm:text-4xl">Software Engineer</h2>
          </section>

          <section>
            <img src="/images/profile.png" width={360} height={360} alt={t.profileImageAlt} className="w-[280px] sm:w-[320px]" />
          </section>
        </div>

        <div className="hidden lg:flex justify-between items-center gap-4">
          <section className="flex flex-col items-start font-serif">
            <h1 className="text-5xl mb-4 text-black font-semibold">Mark Corzilius</h1>

            <h2 className="text-5xl text-neutral-500">Software Engineer</h2>

            <p className="mt-8 text-text text-lg">{t.heroTagline}</p>

            <div className="flex items-center mt-8 gap-8">
              <SocialLinks />

              <button className="text-neutral-500 text-lg hover:text-black transition-[color,transform] cursor-pointer ease-in-out hover:translate-x-1 transition-all duration-300">
                {t.seeProjects}
              </button>
            </div>
          </section>

          <section>
            <img src="/images/profile.png" width={360} height={360} alt={t.profileImageAlt} />
          </section>
        </div>
      </div>

      <SkillsMarquee />
    </div>
  );
}
