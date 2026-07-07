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
      { name: "API", icon: "/icons/skills_api.svg" },
      { name: "Scrum", icon: "/icons/skills_scrum.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-serif font-bold text-black">Skills</h2>

        <div className="w-20 h-[2px] bg-black mt-6 mb-12" />

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-6 mb-4">
                <h3 className="text-xl font-semibold whitespace-nowrap">{group.title}</h3>

                <div className="flex-1 h-px bg-neutral-300" />
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-full
                      bg-surface
                      px-4
                      py-2.5
                      shadow-sm
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:shadow-md
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
