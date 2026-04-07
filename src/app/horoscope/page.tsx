"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getZodiacSigns,
  type WeeklyHoroscope,
  type ZodiacSign,
} from "@/data/horoscopeMock";
import { getWeeklyHoroscope } from "@/services/horoscopeService";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/locales/useLocale";

export default function HoroscopePage() {
  const { locale, setLocale, dictionary } = useLocale();
  const { horoscope, common } = dictionary.ui;
  const zodiacSigns = getZodiacSigns(locale);
  const [sign, setSign] = useState<ZodiacSign>("aries");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WeeklyHoroscope | null>(null);

  const selectedSignLabel = useMemo(
    () => zodiacSigns.find((item) => item.value === sign)?.label ?? zodiacSigns[0].label,
    [sign, zodiacSigns],
  );

  const handleGetHoroscope = async () => {
    setLoading(true);
    try {
      const result = await getWeeklyHoroscope(sign, locale);
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-orange-100 bg-white/90 p-5 shadow-lg shadow-orange-100/40 backdrop-blur sm:p-8">
        <div className="mb-3 flex justify-end">
          <LanguageSwitcher
            locale={locale}
            onChange={setLocale}
            label={common.language}
            labels={{ en: common.languageEn, vi: common.languageVi }}
          />
        </div>
        <Link
          href="/"
          className="text-xs font-semibold text-orange-400 transition hover:text-orange-600"
        >
          {common.back}
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
          {horoscope.brand}
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-4xl">
          {horoscope.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {horoscope.description}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
          <label htmlFor="zodiac" className="sr-only">
            {horoscope.zodiacLabel}
          </label>
          <select
            id="zodiac"
            value={sign}
            onChange={(event) => setSign(event.target.value as ZodiacSign)}
            className="w-full rounded-2xl border border-orange-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          >
            {zodiacSigns.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleGetHoroscope}
            disabled={loading}
            className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? horoscope.loading : horoscope.getWeek}
          </button>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-8 sm:p-6">
          {!data ? (
            <div>
              <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
                {selectedSignLabel}
              </h2>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                {horoscope.emptyPrompt}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold capitalize text-slate-900 sm:text-2xl">
                {selectedSignLabel}
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {horoscope.weekOf} {data.weekStart}
              </p>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                <p>
                  <span className="font-semibold text-slate-900">{horoscope.summary}</span>{" "}
                  {data.summary}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">{horoscope.love}</span>{" "}
                  {data.love}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">{horoscope.career}</span>{" "}
                  {data.career}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">{horoscope.health}</span>{" "}
                  {data.health}
                </p>
              </div>
            </>
          )}
        </section>

        <p className="mt-4 text-xs text-slate-500">
          {common.entertainment}
        </p>
      </div>
    </main>
  );
}
