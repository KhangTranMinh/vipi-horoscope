"use client";

import { useState } from "react";
import Link from "next/link";
import { getTarotCards, type TarotSuit } from "@/data/tarotData";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/locales/useLocale";

type Step = 1 | 2 | 3;
type PositionEntry = { readonly label: string; readonly sublabel: string };

export default function TarotPage() {
  const { locale, setLocale, dictionary } = useLocale();
  const { tarot, common } = dictionary.ui;
  const tarotCards = getTarotCards(locale);

  const [step, setStep] = useState<Step>(1);
  const [spreadTypeId, setSpreadTypeId] = useState<string | null>(null);
  const [depthId, setDepthId] = useState<string | null>(null);
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);

  const selectedCards = selectedCardIds
    .map((id) => tarotCards.find((card) => card.id === id))
    .filter((card): card is (typeof tarotCards)[number] => Boolean(card));

  const currentSpread = tarot.spreadTypes.find((s) => s.id === spreadTypeId);
  const currentDepth = tarot.depthOptions.find((d) => d.id === depthId);

  const positions = (
    currentDepth?.cardCount === 3
      ? tarot.positionsQuick
      : currentDepth?.cardCount === 5
        ? tarot.positionsStandard
        : tarot.positionsDeep
  ) as readonly PositionEntry[];

  const SUIT_LABEL = tarot.suits as Record<TarotSuit, string>;

  function selectSpreadType(id: string) {
    setSpreadTypeId(id);
    setStep(2);
  }

  function selectDepth(id: string) {
    const depth = tarot.depthOptions.find((d) => d.id === id);
    if (!depth) return;
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setSelectedCardIds(shuffled.slice(0, depth.cardCount).map((c) => c.id));
    setDepthId(id);
    setStep(3);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }

  function handleReset() {
    setStep(1);
    setSpreadTypeId(null);
    setDepthId(null);
    setSelectedCardIds([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 via-purple-50 to-white px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-semibold text-violet-400 transition hover:text-violet-600"
          >
            {common.back}
          </Link>
          <LanguageSwitcher
            locale={locale}
            onChange={setLocale}
            label={common.language}
            labels={{ en: common.languageEn, vi: common.languageVi }}
          />
        </div>

        {/* Brand */}
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-500">
          {tarot.brand}
        </p>

        {/* Step indicator */}
        <div className="mt-3 flex items-center gap-2">
          {([1, 2, 3] as Step[]).map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s === step
                  ? "w-6 bg-violet-600"
                  : s < step
                    ? "w-2 bg-violet-400"
                    : "w-2 bg-violet-200"
              }`}
            />
          ))}
          <span className="ml-1 text-xs text-slate-400">{step} / 3</span>
        </div>

        {/* ── Step 1: Choose spread type ── */}
        {step === 1 && (
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {tarot.step1Title}
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {tarot.step1Description}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tarot.spreadTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => selectSpreadType(type.id)}
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-violet-100 bg-white/90 p-6 text-left shadow-sm shadow-violet-100/30 transition hover:border-violet-300 hover:shadow-md hover:shadow-violet-200/40 active:scale-[0.98]"
                >
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <p className="text-base font-semibold text-slate-900 group-hover:text-violet-700">
                      {type.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {type.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 2: Choose depth ── */}
        {step === 2 && (
          <div className="mt-6">
            <button
              onClick={() => setStep(1)}
              className="mb-4 text-xs font-semibold text-violet-400 transition hover:text-violet-600"
            >
              ← {tarot.stepBack}
            </button>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {tarot.step2Title}
            </h1>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              {tarot.depthOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => selectDepth(opt.id)}
                  className="group flex flex-1 flex-col items-center gap-2 rounded-2xl border border-violet-100 bg-white/90 px-5 py-6 text-center shadow-sm shadow-violet-100/30 transition hover:border-violet-300 hover:shadow-md hover:shadow-violet-200/40 active:scale-[0.98]"
                >
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                    {opt.badge}
                  </span>
                  <p className="text-base font-semibold text-slate-900 group-hover:text-violet-700">
                    {opt.title}
                  </p>
                  <p className="text-sm text-slate-500">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 3: Reading ── */}
        {step === 3 && (
          <div className="mt-6">
            {/* Context label */}
            {currentSpread && currentDepth && (
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                {tarot.readingFor} · {currentSpread.title} · {currentDepth.badge}
              </p>
            )}

            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              {tarot.step3Title}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {tarot.step3Subtitle}
            </p>

            {/* Drawn card strip */}
            <div className="mt-6 flex flex-wrap gap-3">
              {selectedCards.map((card, i) => (
                <div
                  key={card.id}
                  className="flex w-[76px] flex-shrink-0 flex-col items-center rounded-xl border border-violet-200 bg-white p-2 shadow-sm shadow-violet-100/40"
                >
                  <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-br from-violet-700 to-indigo-900 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="mt-1.5 line-clamp-3 text-center text-[9px] font-semibold leading-tight text-slate-700">
                    {card.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Card-by-card reading */}
            <section className="mt-8 space-y-5">
              {positions.map((pos, i) => {
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

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {card.meaning}
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                      {card.arcana === "major"
                        ? `⭐ ${tarot.majorArcana}`
                        : `${SUIT_LABEL[card.suit!]} · ${tarot.minorArcana}`}
                    </p>
                  </article>
                );
              })}

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-slate-400">{common.entertainment}</p>
                <button
                  onClick={handleReset}
                  className="rounded-2xl border border-violet-200 px-6 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 active:scale-95"
                >
                  {tarot.startOver}
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
