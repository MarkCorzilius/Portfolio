"use client";

import SkillsMarquee from "@/components/layout/SkillsMarquee";
import SocialLinks from "@/components/layout/SocialLinks";
import { scrollToSection } from "@/components/utils/ScrollToSection";
import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center bg-surface pt-20 sm:pt-24">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16">
        <div className="flex flex-col items-center lg:hidden">
          <section data-aos="fade-down" className="flex flex-col items-center font-serif text-center mb-10">
            <h1 className="text-3xl text-black font-semibold sm:text-4xl">Mark Corzilius</h1>

            <h2 className="mt-2 text-3xl text-neutral-500 sm:text-4xl">Software Engineer</h2>
          </section>

          <section>
            <img src="/images/profile.png" width={420} height={420} alt={t.profileImageAlt} className="mr-24" />
          </section>
        </div>

        <div className="hidden lg:flex justify-between items-center gap-4">
          <section className="flex flex-col items-start font-serif" data-aos="fade-right">
            <h1 className="mb-4 text-4xl text-black font-semibold xl:text-5xl">Mark Corzilius</h1>

            <h2 className="text-4xl text-neutral-500 xl:text-5xl">Software Engineer</h2>

            <p className="mt-8 text-text text-lg">{t.heroTagline}</p>

            <div className="flex items-center mt-8 gap-8">
              <SocialLinks theme="dark" />

              <button
                onClick={() => scrollToSection("projects")}
                className="text-neutral-500 text-lg hover:text-black transition-[color,transform] cursor-pointer ease-in-out hover:translate-x-1 transition-all duration-300"
              >
                {t.seeProjects}
              </button>
            </div>
          </section>

          <section>
            <img src="/images/profile.png" width={480} height={480} alt={t.profileImageAlt} />
          </section>
        </div>
      </div>

      <SkillsMarquee />
    </div>
  );
}
