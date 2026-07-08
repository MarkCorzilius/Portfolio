"use client";

import { useRef, useState } from "react";
import { scrollToSection } from "../utils/ScrollToSection";

type PrimaryButtonProps = {
  text: string;
  link?: string;
  scrollTo?: string;
};

export default function PrimaryButton({ text, link, scrollTo }: PrimaryButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const styles = `
    action-btn relative overflow-hidden
    px-5 py-2.5 rounded-full
    bg-black text-white
    transition-all duration-300
    hover:bg-neutral-700
    cursor-pointer
    before:pointer-events-none before:absolute before:inset-0
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
    before:bg-[radial-gradient(150px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.25),transparent_80%)]
  `;

  const glowStyle = {
    backgroundImage: isHovered
      ? "radial-gradient(24px circle at var(--x) var(--y), rgba(255,255,255,0.5), transparent 60%), radial-gradient(96px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 78%)"
      : "none",
  };

  if (link) {
    return (
      <a
        ref={(element) => {
          ref.current = element;
        }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        className={styles}
        style={glowStyle}
      >
        <span className="relative z-10">{text}</span>
      </a>
    );
  } else if (scrollTo) {
    return (
      <button
        ref={(element) => {
          ref.current = element;
        }}
        onClick={() => scrollToSection("contact")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        className={styles}
        style={glowStyle}
      >
        <span className="relative z-10">{text}</span>
      </button>
    );
  }

  return (
    <button
      ref={(element) => {
        ref.current = element;
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className={styles}
      style={glowStyle}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
}
