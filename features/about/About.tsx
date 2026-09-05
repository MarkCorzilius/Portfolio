"use client";

import { useTranslation } from "@/i18n/useTranslation";

type AboutKey =
  | "aboutTitle"
  | "aboutDescription"
  | "aboutLocationLabel"
  | "aboutLocationValue"
  | "aboutLanguagesLabel"
  | "aboutLanguagesValue"
  | "aboutEducationLabel"
  | "aboutEducationValue"
  | "aboutFocusLabel"
  | "aboutFocusValue"
  | "aboutProjectsCompleted"
  | "aboutYearsProgramming"
  | "aboutCommitsLastYear"
  | "aboutMasteredTechnologies";

const details = [
  {
    icon: "/assets/icons/location_pin.svg",
    labelKey: "aboutLocationLabel",
    valueKey: "aboutLocationValue",
  },
  {
    icon: "/assets/icons/globe.svg",
    labelKey: "aboutLanguagesLabel",
    valueKey: "aboutLanguagesValue",
  },
  {
    icon: "/assets/icons/education.svg",
    labelKey: "aboutEducationLabel",
    valueKey: "aboutEducationValue",
  },
  {
    icon: "/assets/icons/code_brackets.svg",
    labelKey: "aboutFocusLabel",
    valueKey: "aboutFocusValue",
  },
] as const satisfies ReadonlyArray<{
  icon: string;
  labelKey: AboutKey;
  valueKey: AboutKey;
}>;

const achievements = [
  {
    icon: "/assets/icons/folder.svg",
    value: "8+",
    labelKey: "aboutProjectsCompleted",
  },
  {
    icon: "/assets/icons/calendar.svg",
    value: "1,5+",
    labelKey: "aboutYearsProgramming",
  },
  {
    icon: "/assets/icons/github.svg",
    value: "735+",
    labelKey: "aboutCommitsLastYear",
  },
  {
    icon: "/assets/icons/code_brackets.svg",
    value: "17+",
    labelKey: "aboutMasteredTechnologies",
  },
] as const satisfies ReadonlyArray<{
  icon: string;
  value: string;
  labelKey: AboutKey;
}>;

export default function About() {
  const { t } = useTranslation();
  const about = t as Record<AboutKey, string>;

  return (
    <section id="about" className="bg-surface py-8 flex justify-center md:py-16">
      <div className="w-full max-w-[1440px] px-4 grid grid-cols-1 sm:px-8 md:px-16 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        <div>
          <h2 className="text-2xl font-serif italic font-bold text-black md:text-4xl">{about.aboutTitle}</h2>

          <div className="w-20 h-[2px] bg-black mt-6 mb-8" />

          <p data-aos="fade-right" className="w-full text-sm text-neutral-600 leading-7 sm:text-base md:text-lg xl:max-w-xl">
            {about.aboutDescription}
          </p>

          <div data-aos="fade-right" className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {details.map((item) => (
              <div key={item.labelKey} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <img src={item.icon} alt={about[item.labelKey]} className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-neutral-500">{about[item.labelKey]}</p>
                  <p className="mt-1 text-base font-medium text-black">{about[item.valueKey]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="zoom-out" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {achievements.map((item) => (
            <div
              key={item.labelKey}
              className="
                flex items-center gap-3
                h-[74px]
                rounded-2xl
                bg-white
                px-4
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                sm:h-[84px]
                sm:gap-4
                sm:rounded-3xl
                sm:px-5
              "
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface sm:h-10 sm:w-10">
                <img src={item.icon} alt={about[item.labelKey]} className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <p className="text-xl font-bold leading-none tracking-tight sm:text-2xl">{item.value}</p>
                <p className="mt-1 truncate text-sm leading-5 text-neutral-500">{about[item.labelKey]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
