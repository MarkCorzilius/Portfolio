const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/icons/skills_react.svg" },
      { name: "Angular", icon: "/icons/skills_angular.svg" },
      { name: "TypeScript", icon: "/icons/skills_ts.svg" },
      { name: "JavaScript", icon: "/icons/skills_js.svg" },
      { name: "HTML", icon: "/icons/skills_html.svg" },
      { name: "CSS", icon: "/icons/skills_css.svg" },
      { name: "Tailwind", icon: "/icons/skills_tailwind.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "/icons/skills_python.svg" },
      { name: "Django", icon: "/icons/skills_django.svg" },
      { name: "DRF", icon: "/icons/skills_drf.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "/icons/skills_git.svg" },
      { name: "GitHub", icon: "/icons/skills_github.svg" },
      { name: "REST API", icon: "/icons/skills_api.svg" },
      { name: "Scrum", icon: "/icons/skills_scrum.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-8 md:py-16 flex justify-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16">
        <h2 className="mb-8 text-2xl italic font-serif font-bold text-black md:text-4xl">Skills</h2>

        <div className="w-20 h-[2px] bg-black mt-6 mb-12" />

        <div className="space-y-6 md:space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-4 flex items-center gap-4 sm:gap-6">
                <h3 className="whitespace-nowrap text-lg font-semibold sm:text-xl">{group.title}</h3>

                <div className="flex-1 h-px bg-neutral-300" />
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill) => (
                  <div
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

                    <span className="text-xs font-medium text-black sm:text-sm">{skill.name}</span>
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
