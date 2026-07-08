import Hero from "@/features/hero";
import About from "@/features/about";
import Skills from "@/features/skills";
import Projects from "@/features/projects";
import Contact from "@/features/contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
