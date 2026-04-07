import { TarotBackButton } from "./TarotBackButton";
import { TarotCardBack } from "./TarotCardBack";
import type { TarotCardResult } from "./types";

type StepDrawCardsProps = {
  backLabel: string;
  title: string;
  description: string;
  chooseCardPrompt: string;
  selectedCardsLabel: string;
  autoChooseRemainingLabel: string;
  viewResultLabel: string;
  faceDownAria: string;
  selectedCardIds: readonly (number | null)[];
  tarotCards: readonly TarotCardResult[];
  nextSlotIndex: number;
  selectedSet: ReadonlySet<number>;
  isAllCardsChosen: boolean;
  onBack: () => void;
  onAutoChooseRemaining: () => void;
  onChooseCard: (cardId: number) => void;
  onViewResult: () => void;
};

export function StepDrawCards({
  backLabel,
  title,
  description,
  chooseCardPrompt,
  selectedCardsLabel,
  autoChooseRemainingLabel,
  viewResultLabel,
  faceDownAria,
  selectedCardIds,
  tarotCards,
  nextSlotIndex,
  selectedSet,
  isAllCardsChosen,
  onBack,
  onAutoChooseRemaining,
  onChooseCard,
  onViewResult,
}: StepDrawCardsProps) {
  return (
    <div className="mt-6">
      <div className="mb-4">
        <TarotBackButton label={backLabel} onClick={onBack} />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-slate-500 sm:text-base">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {selectedCardIds.map((cardId, index) => {
          const isActive = nextSlotIndex === index;
          const isFilled = cardId !== null;
          return (
            <TarotCardBack
              key={index}
              topLabel={`#${index + 1}`}
              marker={cardId !== null ? "✓" : "✦"}
              state={isActive ? "active" : isFilled ? "filled" : "default"}
            />
          );
        })}
      </div>

      {nextSlotIndex !== -1 ? (
        <p className="mt-3 text-xs text-slate-500">
          {chooseCardPrompt} {nextSlotIndex + 1}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onAutoChooseRemaining}
          className="rounded-2xl border border-violet-200 bg-white px-5 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50"
        >
          {autoChooseRemainingLabel}
        </button>
        <button
          type="button"
          onClick={onViewResult}
          disabled={!isAllCardsChosen}
          className="rounded-2xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {viewResultLabel}
        </button>
      </div>

      <div className="mt-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          {selectedCardsLabel}
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6">
          {tarotCards.map((card) => {
            const isSelected = selectedSet.has(card.id);
            return (
              <TarotCardBack
                key={card.id}
                onClick={() => onChooseCard(card.id)}
                disabled={nextSlotIndex === -1 || isSelected}
                ariaLabel={faceDownAria}
                marker={isSelected ? "✓" : "✦"}
                state={isSelected ? "selected" : "default"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
