"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ZODIAC_SIGNS,
  type WeeklyHoroscope,
  type ZodiacSign,
} from "@/data/horoscopeMock";
import { getWeeklyHoroscope } from "@/services/horoscopeService";

export default function HoroscopePage() {
  const [sign, setSign] = useState<ZodiacSign>("aries");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WeeklyHoroscope | null>(null);

  const selectedSignLabel = useMemo(
    () => ZODIAC_SIGNS.find((item) => item.value === sign)?.label ?? "Aries",
    [sign],
  );

  const handleGetHoroscope = async () => {
    setLoading(true);
    try {
      const result = await getWeeklyHoroscope(sign);
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-orange-100 bg-white/90 p-5 shadow-lg shadow-orange-100/40 backdrop-blur sm:p-8">
        <Link
          href="/"
          className="text-xs font-semibold text-orange-400 transition hover:text-orange-600"
        >
          ← Back
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
          VaiPai Zodiac Weekly
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-4xl">
          Pick your sign, check your week
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          This first release uses mock data so we can validate layout, flow, and
          responsiveness before integrating external APIs.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
          <label htmlFor="zodiac" className="sr-only">
            Zodiac sign
          </label>
          <select
            id="zodiac"
            value={sign}
            onChange={(event) => setSign(event.target.value as ZodiacSign)}
            className="w-full rounded-2xl border border-orange-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          >
            {ZODIAC_SIGNS.map((item) => (
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
            {loading ? "Loading..." : "Get this week"}
          </button>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-8 sm:p-6">
          {!data ? (
            <div>
              <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
                {selectedSignLabel}
              </h2>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Select your sign and tap &quot;Get this week&quot; to see your horoscope.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold capitalize text-slate-900 sm:text-2xl">
                {selectedSignLabel}
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Week of {data.weekStart}
              </p>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                <p>
                  <span className="font-semibold text-slate-900">Summary:</span>{" "}
                  {data.summary}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Love:</span>{" "}
                  {data.love}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Career:</span>{" "}
                  {data.career}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Health:</span>{" "}
                  {data.health}
                </p>
              </div>
            </>
          )}
        </section>

        <p className="mt-4 text-xs text-slate-500">
          Entertainment-only content for prototype validation.
        </p>
      </div>
    </main>
  );
}
