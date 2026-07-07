type PrimaryButtonProps = {
  text: string;
  link?: string;
};

export default function PrimaryButton({ text, link }: PrimaryButtonProps) {
  const styles = "px-5 py-2.5 bg-black text-white hover:bg-neutral-700 transition-all duration-300 cursor-pointer rounded-full";

  if (link) {
    return <a href={link} target="_blank" className={styles}>{text}</a>;
  }

  return <button className={styles}>{text}</button>;
}
