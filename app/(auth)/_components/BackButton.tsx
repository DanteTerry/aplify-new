import Link from "next/link";

interface BackButtonProps {
  backButtonLabel: string;
  backButtonHref: string;
}

function BackButton({ backButtonLabel, backButtonHref }: BackButtonProps) {
  return (
    <button className="w-full text-sm font-normal text-black dark:text-white">
      <Link href={backButtonHref}>{backButtonLabel}</Link>
    </button>
  );
}

export default BackButton;
