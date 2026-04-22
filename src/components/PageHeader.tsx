"use client";

import type { SupportedLocale } from "@/locales";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BackButton } from "@/components/BackButton";
import React from "react";

type Props = {
  left?: React.ReactNode;
  backLabel?: string;
  backHref?: string;
  backOnClick?: () => void;
  backClassName?: string;
  backIcon?: React.ReactNode;
  locale: SupportedLocale;
  onChange: (locale: SupportedLocale) => void;
  label: string;
  labels: Record<SupportedLocale, string>;
};

export function PageHeader({
  left,
  backLabel,
  backHref,
  backOnClick,
  backClassName,
  backIcon,
  locale,
  onChange,
  label,
  labels,
}: Props) {
  const leftNode = backLabel ? (
    <BackButton label={backLabel} href={backHref} onClick={backOnClick} className={backClassName} icon={backIcon} />
  ) : (
    left ?? <div />
  );

  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="min-w-[4rem]">{leftNode}</div>
      <LanguageSwitcher locale={locale} onChange={onChange} label={label} labels={labels} />
    </div>
  );
}
