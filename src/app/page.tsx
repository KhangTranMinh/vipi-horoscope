"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/locales/useLocale";

export default function Home() {
  const { locale, setLocale, dictionary } = useLocale();
  const { launcher, common } = dictionary.ui;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-xl">
        <div className="mb-4 flex justify-end">
          <LanguageSwitcher
            locale={locale}
            onChange={setLocale}
            label={common.language}
            labels={{ en: common.languageEn, vi: common.languageVi }}
          />
        </div>
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
          <Link
            href="/horoscope"
            className="group flex flex-col gap-5 rounded-3xl border border-orange-100 bg-white/90 p-8 shadow-lg shadow-orange-100/40 backdrop-blur transition hover:border-orange-300 hover:shadow-xl hover:shadow-orange-200/50 active:scale-[0.98]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
              ✦
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{launcher.horoscopeTitle}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {launcher.horoscopeDescription}
              </p>
            </div>
            <span className="mt-auto text-sm font-semibold text-orange-500 transition group-hover:text-orange-600">
              {launcher.horoscopeCta}
            </span>
          </Link>

          {/* Tarot */}
          <Link
            href="/tarot"
            className="group flex flex-col gap-5 rounded-3xl border border-violet-100 bg-white/90 p-8 shadow-lg shadow-violet-100/40 backdrop-blur transition hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/50 active:scale-[0.98]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
              🃏
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{launcher.tarotTitle}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {launcher.tarotDescription}
              </p>
            </div>
            <span className="mt-auto text-sm font-semibold text-violet-500 transition group-hover:text-violet-600">
              {launcher.tarotCta}
            </span>
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          {launcher.footer}
        </p>
      </div>
    </main>
  );
}
