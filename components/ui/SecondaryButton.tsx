type SecondaryButtonProps = {
  text: string;
  link?: string;
};

export default function SecondaryButton({ text, link }: SecondaryButtonProps) {
  const styles = "px-5 py-2.5 bg-transparent text-black border-black border-1 hover:bg-neutral-200 transition-all duration-300 cursor-pointer rounded-full";

  if (link) {
    return <a href={link} target="_blank" className={styles}>{text}</a>;
  }

  return <button className={styles}>{text}</button>;
}
