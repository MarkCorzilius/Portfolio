import { useTranslation } from "@/i18n/useTranslation";

export default function SocialLinks() {

  const { t } = useTranslation();
  
  return (
    <div className="flex gap-2">
      <a href="https://www.linkedin.com/in/mark-corzilius-080b5137a/" target="_blank">
        <img
          width={40}
          height={40}
          className="rounded-lg hover:scale-120 hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
          src="/icons/linkedin.default.svg"
          alt={t.linkedInAlt}
        />
      </a>
      <a href="https://github.com/MarkCorzilius" target="_bank">
        <img
          width={40}
          height={40}
          className="rounded-lg hover:scale-120 hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
          src="/icons/github.default.svg"
          alt={t.githubAlt}
        />
      </a>
      <a href="mailto:markcorzilius@gmail.com" target="_blank">
        <img
          width={40}
          height={40}
          className="rounded-lg hover:scale-120 hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
          src="/icons/email.default.svg"
          alt={t.emailAlt}
        />
      </a>
    </div>
  );
}
