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
      <select
        value={locale}
        onChange={(event) => onChange(event.target.value as SupportedLocale)}
        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 outline-none transition focus:border-slate-400"
      >
        <option value="en">{labels.en}</option>
        <option value="vi">{labels.vi}</option>
      </select>
    </label>
  );
}
