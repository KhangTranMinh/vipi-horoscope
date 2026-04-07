"use client";

import { useState } from "react";
import Link from "next/link";
import { getTarotCards, type TarotSuit } from "@/data/tarotData";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/locales/useLocale";

export default function TarotPage() {
  const { locale, setLocale, dictionary } = useLocale();
  const { tarot, common } = dictionary.ui;
  const SUIT_LABEL: Record<TarotSuit, string> = tarot.suits;
  const POSITIONS = tarot.positions;
  const tarotCards = getTarotCards(locale);

  const [drawn, setDrawn] = useState(false);
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);
  const selectedCards = selectedCardIds
    .map((id) => tarotCards.find((card) => card.id === id))
    .filter((card): card is (typeof tarotCards)[number] => Boolean(card));

  const selectedIds = new Set(selectedCardIds);

  function handleDraw() {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setSelectedCardIds(shuffled.slice(0, 3).map((card) => card.id));
    setDrawn(true);
    setTimeout(() => {
      document.getElementById("tarot-reading")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 700);
  }

  function handleReset() {
    setDrawn(false);
    setSelectedCardIds([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 via-purple-50 to-white px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-3 flex justify-end">
          <LanguageSwitcher
            locale={locale}
            onChange={setLocale}
            label={common.language}
            labels={{ en: common.languageEn, vi: common.languageVi }}
          />
        </div>
        {/* Header */}
        <Link
          href="/"
          className="text-xs font-semibold text-violet-400 transition hover:text-violet-600"
        >
          {common.back}
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-500">
          {tarot.brand}
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-4xl">
          {drawn ? tarot.titleReady : tarot.titleWaiting}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
          {drawn
            ? tarot.descriptionReady
            : tarot.descriptionWaiting}
        </p>

        {/* Action button */}
        <div className="mt-6">
          {!drawn ? (
            <button
              onClick={handleDraw}
              className="rounded-2xl bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 active:scale-95"
            >
              {tarot.selectThree}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="rounded-2xl border border-violet-200 px-7 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 active:scale-95"
            >
              {tarot.drawAgain}
            </button>
          )}
        </div>

        {/* Card grid — all 78 cards */}
        <div className="tarot-grid mt-8">
          {tarotCards.map((card) => {
            const isSelected = selectedIds.has(card.id);
            const isFlipped = drawn && isSelected;
            const isDimmed = drawn && !isSelected;

            return (
              <div
                key={card.id}
                aria-label={isFlipped ? card.name : tarot.faceDownAria}
                style={{ perspective: "600px" }}
              >
                <div
                  className={`tarot-card-inner${isFlipped ? " flipped" : ""}`}
                >
                  {/* Card back */}
                  <div
                    className={`tarot-card-back rounded-lg transition-opacity duration-500${isDimmed ? " opacity-30" : ""}${!drawn || isSelected ? " ring-0" : ""}${isSelected ? " ring-2 ring-amber-400 ring-offset-1" : ""}`}
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-950 flex items-center justify-center overflow-hidden">
                      {/* decorative diamond pattern */}
                      <div className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                          backgroundSize: "8px 8px",
                        }}
                      />
                      <span className="relative text-violet-300 text-[9px] select-none">✦</span>
                    </div>
                  </div>

                  {/* Card front */}
                  <div className="tarot-card-front rounded-lg border border-violet-200 bg-white flex flex-col items-center justify-center gap-0.5 p-0.5">
                    <p className="text-[5.5px] font-bold text-center text-slate-900 leading-tight line-clamp-3 px-0.5">
                      {card.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reading section */}
        {drawn && (
          <section
            id="tarot-reading"
            className="mt-14 scroll-mt-8 space-y-5"
          >
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                {tarot.readingTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {tarot.readingSubtitle}
              </p>
            </div>

            {POSITIONS.map((pos, i) => {
              const card = selectedCards[i];
              if (!card) return null;
              return (
                <article
                  key={card.id}
                  className="rounded-2xl border border-violet-100 bg-white/90 p-5 shadow-sm shadow-violet-100/30 sm:p-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
                    {pos.label} · {pos.sublabel}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-slate-900 sm:text-xl">
                    {card.name}
                  </h3>

                  {/* Keywords */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {card.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Meaning */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {card.meaning}
                  </p>

                  {/* Arcana label */}
                  <p className="mt-3 text-xs text-slate-400">
                    {card.arcana === "major"
                      ? `⭐ ${tarot.majorArcana}`
                      : `${SUIT_LABEL[card.suit!]} · ${tarot.minorArcana}`}
                  </p>
                </article>
              );
            })}

            <p className="pt-2 text-xs text-slate-400">
              {common.entertainment}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
