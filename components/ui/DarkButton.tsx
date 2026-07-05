type DarkButtonProps = {
    text: string;
}

export default function DarkButton({text}: DarkButtonProps) {
  return <button className="px-5 py-2.5 bg-btn-primary text-btn-primary-text hover:bg-neutral-800 cursor-pointer rounded-full">{text}</button>;
}
