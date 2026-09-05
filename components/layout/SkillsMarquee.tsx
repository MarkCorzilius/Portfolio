import Marquee from "react-fast-marquee";

const skills = ["Django", "Python", "React", "TypeScript", "Git", "Docker", "AWS", "Google Cloud", "JavaScript", "HTML", "CSS", "GitHub", "Angular", "Figma"];

export default function SkillsMarquee() {
  return (
    <Marquee autoFill speed={40} gradient={false}>
      <div className="bg-black p-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="relative mr-20 uppercase tracking-[0.28em] text-sm font-semibold text-neutral-400 after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:content-['//'] after:text-neutral-500"
          >
            {skill}
          </span>
        ))}
      </div>
    </Marquee>
  );
}
