import { useTranslation } from "@/i18n/useTranslation";

export default function SocialLinks({ theme = "dark" }) {
  const { t } = useTranslation();

  const iconVariant = theme === "dark" ? "dark" : "light";
  const hoverBg = theme === "dark" ? "hover:bg-neutral-200" : "";

  return (
    <div className="flex gap-2">
      <a href="https://www.linkedin.com/in/mark-corzilius-080b5137a/" target="_blank" rel="noopener noreferrer">
        <img
          width={40}
          height={40}
          className={`${hoverBg} rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer`}
          src={`/icons/linkedin.${iconVariant}.svg`}
          alt={t.linkedInAlt}
        />
      </a>

      <a href="https://github.com/MarkCorzilius" target="_blank" rel="noopener noreferrer">
        <img
          width={40}
          height={40}
          className={`${hoverBg} rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer`}
          src={`/icons/github.${iconVariant}.svg`}
          alt={t.githubAlt}
        />
      </a>

      <a href="mailto:markcorzilius@gmail.com">
        <img
          width={40}
          height={40}
          className={`${hoverBg} rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer`}
          src={`/icons/email.${iconVariant}.svg`}
          alt={t.emailAlt}
        />
      </a>
    </div>
  );
}
