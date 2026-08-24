"use client";

import { useTranslation } from "@/i18n/useTranslation";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/assets/icons/skills_react.svg" },
      { name: "Next.js", icon: "/assets/icons/skills_nextjs.svg" },
      { name: "TypeScript", icon: "/assets/icons/skills_ts.svg" },
      { name: "JavaScript", icon: "/assets/icons/skills_js.svg" },
      { name: "Angular", icon: "/assets/icons/skills_angular.svg" },
      { name: "HTML", icon: "/assets/icons/skills_html.svg" },
      { name: "CSS", icon: "/assets/icons/skills_css.svg" },
      { name: "Tailwind", icon: "/assets/icons/skills_tailwind.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "/assets/icons/skills_python.svg" },
      { name: "Django", icon: "/assets/icons/skills_django.svg" },
      { name: "Django REST Framework", icon: "/assets/icons/skills_drf.svg" },
      { name: "REST APIs", icon: "/assets/icons/skills_api.svg" },
      { name: "PostgreSQL", icon: "/assets/icons/skills_postgresql.svg" },
      { name: "Redis", icon: "/assets/icons/skills_redis.svg" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "/assets/icons/skills_git.svg" },
      { name: "GitHub", icon: "/assets/icons/skills_github.svg" },
      { name: "Docker", icon: "/assets/icons/skills_docker.svg" },
      { name: "Google Cloud", icon: "/assets/icons/skills_cloud.svg" },
      { name: "Linux", icon: "/assets/icons/skills_linux.svg" },
      { name: "Scrum", icon: "/assets/icons/skills_scrum.svg" },
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="bg-white py-8 md:py-16 flex justify-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16">
        <h2 className="mb-8 text-2xl italic font-serif font-bold text-black md:text-4xl">{t.skills}</h2>

        <div className="w-20 h-[2px] bg-black mt-6 mb-12" />

        <div className="space-y-6 md:space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-4 flex items-center gap-4 sm:gap-6">
                <h3 data-aos="fade-right" className="whitespace-nowrap text-lg font-semibold sm:text-xl">
                  {group.title}
                </h3>

                <div data-aos="fade-left" className="flex-1 h-px bg-neutral-300" />
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill) => (
                  <div
                    data-aos="zoom-in"
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-2
                      sm:gap-2.5
                      rounded-full
                      bg-surface
                      px-3
                      py-2
                      sm:px-4
                      sm:py-2.5
                      shadow-sm
                    "
                  >
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />

                    <span className="text-sm font-medium text-black">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
