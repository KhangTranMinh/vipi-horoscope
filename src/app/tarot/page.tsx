"use client";

import { useState } from "react";
import Link from "next/link";
import { getTarotCards, type TarotSuit } from "@/data/tarotData";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/locales/useLocale";

type Step = 1 | 2 | 3 | 4 | 5;
type PositionEntry = { readonly label: string; readonly sublabel: string };

export default function TarotPage() {
  const { locale, setLocale, dictionary } = useLocale();
  const { tarot, common } = dictionary.ui;
  const tarotCards = getTarotCards(locale);

  const [step, setStep] = useState<Step>(1);
  const [spreadTypeId, setSpreadTypeId] = useState<string | null>(null);
  const [depthId, setDepthId] = useState<string | null>(null);
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [customQuestion, setCustomQuestion] = useState("");
  const [selectedCardIds, setSelectedCardIds] = useState<(number | null)[]>([]);
  const [activeResultIndex, setActiveResultIndex] = useState<number | null>(null);

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
  const isAllCardsChosen =
    selectedCardIds.length > 0 && selectedCardIds.every((id) => id !== null);
  const nextSlotIndex = selectedCardIds.findIndex((id) => id === null);
  const selectedSet = new Set(
    selectedCardIds.filter((id): id is number => id !== null),
  );
  const remainingCards = tarotCards.filter((card) => !selectedSet.has(card.id));
  const selectedQuestion =
    customQuestion.trim() ||
    tarot.predefinedQuestions.find((q) => q.id === questionId)?.title ||
    "";
  const backLabel = common.back.replace(/^<-\s*/, "");

  function selectSpreadType(id: string) {
    setSpreadTypeId(id);
    setStep(2);
  }

  function selectDepth(id: string) {
    const depth = tarot.depthOptions.find((d) => d.id === id);
    if (!depth) return;
    setDepthId(id);
    setStep(3);
  }

  function handleContinueFromQuestion() {
    if (!selectedQuestion) return;
    const count = currentDepth?.cardCount ?? 3;
    setSelectedCardIds(Array.from({ length: count }, () => null));
    setStep(4);
  }

  function handleAutoChooseRemaining() {
    const currentlySelected = selectedCardIds.filter(
      (id): id is number => id !== null,
    );
    const selectedSet = new Set(currentlySelected);
    const available = tarotCards.filter((card) => !selectedSet.has(card.id));
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    let cursor = 0;
    setSelectedCardIds((prev) =>
      prev.map((id) => {
        if (id !== null) return id;
        const next = shuffled[cursor];
        cursor += 1;
        return next ? next.id : null;
      }),
    );
  }

  function chooseCardForSlot(cardId: number) {
    if (nextSlotIndex === -1 || selectedSet.has(cardId)) return;
    setSelectedCardIds((prev) => {
      const next = [...prev];
      const targetIndex = next.findIndex((id) => id === null);
      if (targetIndex === -1) return next;
      next[targetIndex] = cardId;
      return next;
    });
  }

  function goToResultStep() {
    if (!isAllCardsChosen) return;
    setActiveResultIndex(0);
    setStep(5);
  }

  function handleReset() {
    setStep(1);
    setSpreadTypeId(null);
    setDepthId(null);
    setQuestionId(null);
    setCustomQuestion("");
    setSelectedCardIds([]);
    setActiveResultIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 via-purple-50 to-white px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 transition hover:text-violet-600"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {backLabel}
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
          {([1, 2, 3, 4, 5] as Step[]).map((s) => (
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
          <span className="ml-1 text-xs text-slate-400">{step} / 5</span>
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
              className="mb-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-400 transition hover:text-violet-600"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tarot.stepBack}
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

        {/* ── Step 3: Question ── */}
        {step === 3 && (
          <div className="mt-6">
            <button
              onClick={() => setStep(2)}
              className="mb-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-400 transition hover:text-violet-600"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tarot.stepBack}
            </button>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {tarot.step3Title}
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {tarot.step3Description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {tarot.predefinedQuestions.map((q) => {
                const isSelected = questionId === q.id && !customQuestion.trim();
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setQuestionId(q.id);
                      setCustomQuestion("");
                    }}
                    className={`rounded-2xl border p-5 text-left shadow-sm transition active:scale-[0.98] ${
                      isSelected
                        ? "border-violet-400 bg-violet-50 shadow-violet-100"
                        : "border-violet-100 bg-white/90 shadow-violet-100/30 hover:border-violet-300"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-900">{q.title}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-violet-100 bg-white/90 p-4 shadow-sm shadow-violet-100/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                {tarot.questionLabel}
              </p>
              <textarea
                value={customQuestion}
                onChange={(e) => {
                  setCustomQuestion(e.target.value);
                  if (e.target.value.trim()) {
                    setQuestionId(null);
                  }
                }}
                rows={3}
                placeholder={tarot.customQuestionPlaceholder}
                className="mt-2 w-full rounded-xl border border-violet-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-violet-400"
              />
            </div>

            <div className="mt-5">
              <button
                onClick={handleContinueFromQuestion}
                disabled={!selectedQuestion}
                className="rounded-2xl bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {tarot.continue}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 4: Draw cards ── */}
        {step === 4 && (
          <div className="mt-6">
            <button
              onClick={() => setStep(3)}
              className="mb-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-400 transition hover:text-violet-600"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tarot.stepBack}
            </button>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {tarot.step4Title}
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {tarot.step4Description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedCardIds.map((cardId, index) => {
                const isActive = nextSlotIndex === index;
                const isFilled = cardId !== null;
                return (
                  <div
                    key={index}
                    className={`relative flex h-40 w-28 flex-col items-center justify-center rounded-2xl border-2 text-center transition ${
                      isActive
                        ? "scale-[1.04] border-amber-400 shadow-lg shadow-amber-200/60 ring-4 ring-amber-100"
                        : isFilled
                          ? "border-violet-500 shadow-md shadow-violet-200/40"
                          : "border-violet-200"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-950" />
                    <div
                      className="absolute inset-0 rounded-2xl opacity-10"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                        backgroundSize: "8px 8px",
                      }}
                    />
                    <span className="relative text-[10px] font-semibold text-violet-200">
                      #{index + 1}
                    </span>
                    <span className="relative mt-1 text-[10px] text-violet-300">
                      {cardId !== null ? "✓" : "✦"}
                    </span>
                  </div>
                );
              })}
            </div>

            {nextSlotIndex !== -1 && (
              <p className="mt-3 text-xs text-slate-500">
                {tarot.chooseCardPrompt} {nextSlotIndex + 1}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={handleAutoChooseRemaining}
                className="rounded-2xl border border-violet-200 bg-white px-5 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50"
              >
                {tarot.autoChooseRemaining}
              </button>
              <button
                onClick={goToResultStep}
                disabled={!isAllCardsChosen}
                className="rounded-2xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {tarot.viewResult}
              </button>
            </div>

            <div className="mt-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
                {tarot.selectedCards}
              </p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6">
                {tarotCards.map((card) => {
                  const isSelected = selectedSet.has(card.id);
                  return (
                    <button
                      key={card.id}
                      onClick={() => chooseCardForSlot(card.id)}
                      disabled={nextSlotIndex === -1 || isSelected}
                      aria-label={tarot.faceDownAria}
                      className={`relative h-40 w-28 rounded-2xl border-2 transition disabled:cursor-not-allowed ${
                        isSelected
                          ? "border-violet-500 opacity-45"
                          : "border-violet-200 hover:border-amber-400 hover:shadow-md hover:shadow-amber-100/60"
                      } ${nextSlotIndex === -1 ? "opacity-40" : ""}`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-950" />
                      <div
                        className="absolute inset-0 rounded-2xl opacity-10"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                          backgroundSize: "8px 8px",
                        }}
                      />
                      <div className="absolute inset-x-3 top-3 h-px bg-white/25" />
                      <div className="absolute inset-x-3 bottom-3 h-px bg-white/20" />
                      <span className="relative text-violet-300 text-sm">
                        {isSelected ? "✓" : "✦"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Step 5: Reading ── */}
        {step === 5 && (
          <div className="mt-6">
            {currentSpread && currentDepth && (
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                {tarot.readingFor} · {currentSpread.title} · {currentDepth.badge}
              </p>
            )}

            {selectedQuestion && (
              <p className="mt-1 text-sm text-slate-500">
                {tarot.questionLabel}: {selectedQuestion}
              </p>
            )}

            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              {tarot.step5Title}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {tarot.step5Subtitle}
            </p>

            {/* Drawn card strip */}
            <div className="mt-6 flex flex-wrap gap-3">
              {selectedCards.map((card, i) => (
                <button
                  key={card.id}
                  onClick={() => setActiveResultIndex(i)}
                  className={`relative flex h-40 w-28 flex-shrink-0 flex-col items-center justify-end rounded-2xl border-2 p-3 text-center shadow-sm transition ${
                    activeResultIndex === i
                      ? "border-amber-400 shadow-lg shadow-amber-200/60 ring-4 ring-amber-100"
                      : "border-violet-200 shadow-violet-100/40 hover:border-violet-300"
                  }`}
                >
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-950" />
                  <div
                    className="absolute inset-2 rounded-xl opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                  <div className="absolute inset-x-5 top-6 h-px bg-white/25" />
                  <div className="absolute inset-x-5 bottom-10 h-px bg-white/20" />
                  <div className="relative mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[10px] font-bold text-white backdrop-blur-sm">
                    {i + 1}
                  </div>
                  <p className="relative line-clamp-3 text-center text-[10px] font-semibold leading-tight text-white">
                    {card.name}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  setActiveResultIndex((prev) => (prev === null ? 0 : prev))
                }
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeResultIndex !== null
                    ? "bg-violet-600 text-white"
                    : "bg-violet-100 text-violet-700 hover:bg-violet-200"
                }`}
              >
                {tarot.viewSingleResult}
              </button>
              <button
                onClick={() => setActiveResultIndex(null)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeResultIndex === null
                    ? "bg-violet-600 text-white"
                    : "bg-violet-100 text-violet-700 hover:bg-violet-200"
                }`}
              >
                {tarot.viewAllResults}
              </button>
            </div>

            {/* Card-by-card reading */}
            <section className="mt-8 space-y-5">
              {positions.map((pos, i) => {
                if (activeResultIndex !== null && activeResultIndex !== i) return null;
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
                <div className="flex gap-2">
                  <button
                    onClick={() => setStep(4)}
                    className="rounded-2xl border border-violet-200 px-4 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50"
                  >
                    {tarot.stepBack}
                  </button>
                  <button
                    onClick={handleReset}
                    className="rounded-2xl border border-violet-200 px-6 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 active:scale-95"
                  >
                    {tarot.startOver}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
