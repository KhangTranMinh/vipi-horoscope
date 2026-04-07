"use client";

import { useState } from "react";
import { getTarotCards, type TarotSuit } from "@/data/tarotData";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { StepDrawCards } from "@/components/tarot/StepDrawCards";
import { StepQuestion } from "@/components/tarot/StepQuestion";
import { StepReading } from "@/components/tarot/StepReading";
import { StepSelectDepth } from "@/components/tarot/StepSelectDepth";
import { StepSelectSpread } from "@/components/tarot/StepSelectSpread";
import { TarotBackButton } from "@/components/tarot/TarotBackButton";
import { TarotStepIndicator } from "@/components/tarot/TarotStepIndicator";
import type {
  DepthOption,
  PositionEntry,
  QuestionOption,
  SpreadTypeOption,
  Step,
} from "@/components/tarot/types";
import { useLocale } from "@/locales/useLocale";

export default function TarotPage() {
  const { locale, setLocale, dictionary } = useLocale();
  const { tarot, common } = dictionary.ui;
  const tarotCards = getTarotCards(locale);
  const spreadTypes = tarot.spreadTypes as readonly SpreadTypeOption[];
  const depthOptions = tarot.depthOptions as readonly DepthOption[];
  const predefinedQuestions = tarot.predefinedQuestions as readonly QuestionOption[];

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

  const currentSpread = spreadTypes.find((s) => s.id === spreadTypeId);
  const currentDepth = depthOptions.find((d) => d.id === depthId);

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
    predefinedQuestions.find((q) => q.id === questionId)?.title ||
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
        <div className="mb-3 flex items-center justify-between">
          <TarotBackButton label={backLabel} href="/" />
          <LanguageSwitcher
            locale={locale}
            onChange={setLocale}
            label={common.language}
            labels={{ en: common.languageEn, vi: common.languageVi }}
          />
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-500">
          {tarot.brand}
        </p>

        <TarotStepIndicator step={step} />

        {step === 1 ? (
          <StepSelectSpread
            title={tarot.step1Title}
            description={tarot.step1Description}
            spreadTypes={spreadTypes}
            onSelect={selectSpreadType}
          />
        ) : null}

        {step === 2 ? (
          <StepSelectDepth
            backLabel={tarot.stepBack}
            title={tarot.step2Title}
            depthOptions={depthOptions}
            onBack={() => setStep(1)}
            onSelect={selectDepth}
          />
        ) : null}

        {step === 3 ? (
          <StepQuestion
            backLabel={tarot.stepBack}
            title={tarot.step3Title}
            description={tarot.step3Description}
            questionLabel={tarot.questionLabel}
            customQuestionPlaceholder={tarot.customQuestionPlaceholder}
            continueLabel={tarot.continue}
            predefinedQuestions={predefinedQuestions}
            questionId={questionId}
            customQuestion={customQuestion}
            onBack={() => setStep(2)}
            onSelectQuestion={(id) => {
              setQuestionId(id);
              setCustomQuestion("");
            }}
            onCustomQuestionChange={(value) => {
              setCustomQuestion(value);
              if (value.trim()) {
                setQuestionId(null);
              }
            }}
            onContinue={handleContinueFromQuestion}
            selectedQuestion={selectedQuestion}
          />
        ) : null}

        {step === 4 ? (
          <StepDrawCards
            backLabel={tarot.stepBack}
            title={tarot.step4Title}
            description={tarot.step4Description}
            chooseCardPrompt={tarot.chooseCardPrompt}
            selectedCardsLabel={tarot.selectedCards}
            autoChooseRemainingLabel={tarot.autoChooseRemaining}
            viewResultLabel={tarot.viewResult}
            faceDownAria={tarot.faceDownAria}
            selectedCardIds={selectedCardIds}
            tarotCards={tarotCards}
            nextSlotIndex={nextSlotIndex}
            selectedSet={selectedSet}
            isAllCardsChosen={isAllCardsChosen}
            onBack={() => setStep(3)}
            onAutoChooseRemaining={handleAutoChooseRemaining}
            onChooseCard={chooseCardForSlot}
            onViewResult={goToResultStep}
          />
        ) : null}

        {step === 5 ? (
          <StepReading
            backLabel={tarot.stepBack}
            startOverLabel={tarot.startOver}
            title={tarot.step5Title}
            subtitle={tarot.step5Subtitle}
            readingForLabel={tarot.readingFor}
            questionLabel={tarot.questionLabel}
            selectedQuestion={selectedQuestion}
            currentSpread={currentSpread}
            currentDepth={currentDepth}
            selectedCards={selectedCards}
            positions={positions}
            activeResultIndex={activeResultIndex}
            onSelectCard={setActiveResultIndex}
            onViewSingle={() =>
              setActiveResultIndex((prev) => (prev === null ? 0 : prev))
            }
            onViewAll={() => setActiveResultIndex(null)}
            onBack={() => setStep(4)}
            onReset={handleReset}
            viewSingleResultLabel={tarot.viewSingleResult}
            viewAllResultsLabel={tarot.viewAllResults}
            entertainmentLabel={common.entertainment}
            majorArcanaLabel={tarot.majorArcana}
            minorArcanaLabel={tarot.minorArcana}
            suitLabels={SUIT_LABEL}
          />
        ) : null}
      </div>
    </main>
  );
}
