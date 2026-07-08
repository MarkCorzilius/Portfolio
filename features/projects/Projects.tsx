"use client";

import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useTranslation } from "@/i18n/useTranslation";

const cards = [
  {
    logo: "/images/project_dabubble.svg",
    title: "DaBubble",
    description: "CRM Business App",
    type: "Frontend",
    live: "https://markcorzilius.com/dabubble",
    github: "https://github.com/MarkCorzilius/DaBubble",
  },
  {
    logo: "/images/project_join.svg",
    title: "Join",
    description: "Task Management Tool",
    type: "Frontend",
    live: "https://markcorzilius.com/join",
    github: "https://github.com/MarkCorzilius/Join",
  },
  {
    logo: "/images/project_el_pollo_loco.svg",
    title: "El Pollo Loco",
    description: "2D Multi-Level Game",
    type: "Frontend",
    live: "https://markcorzilius.com/el-pollo-loco",
    github: "https://github.com/MarkCorzilius/El-Pollo-Loco",
  },
  {
    logo: "/images/project_kanmind.svg",
    title: "KanMind",
    description: "Task Management Tool",
    type: "Backend",
    live: null,
    github: "https://github.com/MarkCorzilius/KanMind",
  },
];

const filters = ["all", "frontend", "backend"];

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilterType = (type: string) => type.toLowerCase();

  const filteredCards = activeFilter === "all" ? cards : cards.filter((card) => getFilterType(card.type) === activeFilter);

  const groupedCards = {
    Frontend: filteredCards.filter((card) => getFilterType(card.type) === "frontend"),
    Backend: filteredCards.filter((card) => getFilterType(card.type) === "backend"),
  };

  const renderCards = (projects: typeof cards) =>
    projects.map((card) => (
      <article
        key={card.title}
        className="
        has-[.action-btn:hover]:[&_.project-img]:scale-114
        has-[.action-btn:hover]:[&_.project-arrow]:stroke-black
        has-[.action-btn:hover]:[&_.project-img-wrapper]:shadow-lg
        relative
        flex flex-col
        gap-4
        w-full
        max-w-[19rem]
        p-4
        "
      >
        <div
          className="
          absolute
          inset-0
          pointer-events-none
          border
          border-neutral-900
          rounded-2xl
          before:absolute
          before:-top-[1px]
          before:left-8
          before:w-16
          before:h-[3px]
          before:bg-surface
          after:absolute
          after:-bottom-[1px]
          after:right-8
          after:w-16
          after:h-[3px]
          after:bg-surface
          "
        />

        <div>
          <div
            className="
            project-img-wrapper
            relative
            aspect-square
            p-3
            rounded-xl
            bg-neutral-100
            overflow-hidden
            shadow-sm
            transition-shadow
            duration-300
            "
          >
            <span
              className="
              absolute
              top-3
              right-3
              px-3
              py-1
              text-[10px]
              font-sans
              font-bold
              uppercase
              tracking-wide
              "
            >
              {card.type}
            </span>

            <img
              src={card.logo}
              alt={card.title}
              className="
              project-img
              w-full
              h-full
              object-contain
              transition-transform
              duration-300
              "
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <h3 className="font-semibold text-base text-dark">{card.title}</h3>

            <svg
              width={12}
              height={12}
              className="
              project-arrow
              stroke-neutral-300
              transition-colors
              duration-300
              "
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>

          <p className="text-neutral-500 text-xs">{card.description}</p>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          {card.live && <PrimaryButton text="Live Test" link={card.live} />}
          <SecondaryButton text="GitHub" link={card.github} />
        </div>
      </article>
    ));

  return (
    <section id="projects" className="bg-surface py-8 md:py-16 text-dark font-serif flex justify-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16">
        <h2 className="mb-8 text-2xl italic font-bold md:text-4xl">{t.projects}</h2>

        <div className="w-20 h-[2px] bg-black mt-6 mb-10 md:mb-12"></div>

        <div className="flex gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-5
                py-2
                rounded-full
                border
                text-sm
                transition-all
                ${activeFilter === filter ? "bg-black text-white border-black" : "border-neutral-400 hover:border-black hover:cursor-pointer"}
              `}
            >
              {t[filter as keyof typeof t]}
            </button>
          ))}
        </div>

        {activeFilter === "all" ? (
          <div className="flex flex-col gap-14">
            {Object.entries(groupedCards).map(([category, projects]) =>
              projects.length > 0 ? (
                <div key={category}>
                  <h3 className="mb-6 text-xl font-semibold">{category} Projects</h3>

                  <div className="flex flex-wrap justify-center gap-6 md:justify-start md:gap-12">{renderCards(projects)}</div>
                </div>
              ) : null,
            )}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 md:justify-start md:gap-12">{renderCards(filteredCards)}</div>
        )}
      </div>
    </section>
  );
}
