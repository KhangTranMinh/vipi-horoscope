"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  cta: React.ReactNode;
  className?: string;
};

export function LaunchCard({ href, icon, title, description, cta, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-5 rounded-3xl border bg-white/90 p-8 shadow-lg backdrop-blur transition active:scale-[0.98] ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
        {icon}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>

      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition group-hover:opacity-90">
        {cta}
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
