export function scrollToSection(id: string, offset = 24) {
  const element = document.getElementById(id);

  if (!element) {
    window.location.href = `/#${id}`;
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
}
