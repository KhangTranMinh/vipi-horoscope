import Link from "next/link";

type TarotBackButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TarotBackButton({ label, onClick, href }: TarotBackButtonProps) {
  const className =
    "inline-flex items-center gap-1 text-xs font-semibold text-violet-400 transition hover:text-violet-600";

  if (href) {
    return (
      <Link href={href} className={className}>
        <ArrowIcon />
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      <ArrowIcon />
      {label}
    </button>
  );
}
