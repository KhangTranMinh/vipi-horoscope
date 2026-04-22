"use client";

import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BackButton({ label, href, onClick, className = "", icon }: Props) {
  const base = "inline-flex items-center gap-2 text-xs font-semibold transition";
  const cls = `${base} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={label}>
        <span className="inline-flex items-center">{icon ?? <ArrowIcon />}</span>
        <span className="leading-none">{label}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} aria-label={label}>
      <span className="inline-flex items-center">{icon ?? <ArrowIcon />}</span>
      <span className="leading-none">{label}</span>
    </button>
  );
}
