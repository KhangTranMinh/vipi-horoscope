"use client";

import type { SupportedLocale } from "@/locales";

type Props = {
  locale: SupportedLocale;
  onChange: (locale: SupportedLocale) => void;
  label: string;
  labels: Record<SupportedLocale, string>;
};

export function LanguageSwitcher({ locale, onChange, label, labels }: Props) {
  return (
    <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
      <span>{label}</span>
      <div className="relative inline-flex items-center">
        <select
          value={locale}
          onChange={(event) => onChange(event.target.value as SupportedLocale)}
          className="appearance-none rounded-lg border border-slate-200 bg-white pl-5 pr-8 py-1 text-xs text-slate-700 outline-none transition focus:border-slate-400"
        >
          <option value="en">{labels.en}</option>
          <option value="vi">{labels.vi}</option>
        </select>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute right-2 h-4 w-4 text-slate-400">
          <path d="M6 8l4 4 4-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );
}
