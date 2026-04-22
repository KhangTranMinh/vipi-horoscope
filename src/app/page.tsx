"use client";

import { LaunchCard } from "@/components/LaunchCard";
import { PageHeader } from "@/components/PageHeader";
import { useLocale } from "@/locales/useLocale";

export default function Home() {
  const { locale, setLocale, dictionary } = useLocale();
  const { launcher, common } = dictionary.ui;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-xl">
        <PageHeader
          locale={locale}
          onChange={setLocale}
          label={common.language}
          labels={{ en: common.languageEn, vi: common.languageVi }}
        />
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
          {launcher.brand}
        </p>
        <h1 className="mt-3 text-center text-3xl font-bold text-slate-900 sm:text-5xl">
          {launcher.title}
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-slate-500 sm:text-base">
          {launcher.description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Horoscope */}
          <LaunchCard
            href="/horoscope"
            icon={<>✦</>}
            title={launcher.horoscopeTitle}
            description={launcher.horoscopeDescription}
            cta={launcher.horoscopeCta}
            className="border-orange-100 shadow-orange-100/40 text-orange-500 hover:border-orange-300 hover:shadow-orange-200/50"
          />

          {/* Tarot */}
          <LaunchCard
            href="/tarot"
            icon={<>🃏</>}
            title={launcher.tarotTitle}
            description={launcher.tarotDescription}
            cta={launcher.tarotCta}
            className="border-violet-100 shadow-violet-100/40 text-violet-500 hover:border-violet-300 hover:shadow-violet-200/50"
          />
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          {launcher.footer}
        </p>
      </div>
    </main>
  );
}
