import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

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
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface text-dark font-serif py-16 px-6 lg:px-12">
      <h2 className="italic font-bold text-4xl mb-8">Projects</h2>
      <div className="w-20 h-[2px] bg-black mt-6 mb-12"></div>
      <div className="flex flex-wrap gap-12">
        {cards.map((card) => (
          <article
            key={card.title}
            className="
            has-[.action-btn:hover]:[&_.project-img]:scale-114
            has-[.action-btn:hover]:[&_.project-arrow]:stroke-black
            has-[.action-btn:hover]:[&_.project-img-wrapper]:shadow-lg
            relative
            flex flex-col
            gap-4
            w-64
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
              <PrimaryButton text="Live Test" link={card.live} />
              <SecondaryButton text="GitHub" link={card.github} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
