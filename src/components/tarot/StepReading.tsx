import type { TarotSuit } from "@/data/tarotData";
import { TarotBackButton } from "./TarotBackButton";
import { TarotCardBack } from "./TarotCardBack";
import type {
  DepthOption,
  PositionEntry,
  SpreadTypeOption,
  TarotCardResult,
} from "./types";

type StepReadingProps = {
  backLabel: string;
  startOverLabel: string;
  title: string;
  subtitle: string;
  readingForLabel: string;
  questionLabel: string;
  selectedQuestion: string;
  currentSpread: SpreadTypeOption | undefined;
  currentDepth: DepthOption | undefined;
  selectedCards: readonly TarotCardResult[];
  positions: readonly PositionEntry[];
  activeResultIndex: number | null;
  onSelectCard: (index: number) => void;
  onViewSingle: () => void;
  onViewAll: () => void;
  onBack: () => void;
  onReset: () => void;
  viewSingleResultLabel: string;
  viewAllResultsLabel: string;
  entertainmentLabel: string;
  majorArcanaLabel: string;
  minorArcanaLabel: string;
  suitLabels: Record<TarotSuit, string>;
};

export function StepReading({
  backLabel,
  startOverLabel,
  title,
  subtitle,
  readingForLabel,
  questionLabel,
  selectedQuestion,
  currentSpread,
  currentDepth,
  selectedCards,
  positions,
  activeResultIndex,
  onSelectCard,
  onViewSingle,
  onViewAll,
  onBack,
  onReset,
  viewSingleResultLabel,
  viewAllResultsLabel,
  entertainmentLabel,
  majorArcanaLabel,
  minorArcanaLabel,
  suitLabels,
}: StepReadingProps) {
  return (
    <div className="mt-6">
      {currentSpread && currentDepth ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
          {readingForLabel} · {currentSpread.title} · {currentDepth.badge}
        </p>
      ) : null}

      {selectedQuestion ? (
        <p className="mt-1 text-sm text-slate-500">
          {questionLabel}: {selectedQuestion}
        </p>
      ) : null}

      <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {selectedCards.map((card, index) => (
          <TarotCardBack
            key={card.id}
            onClick={() => onSelectCard(index)}
            marker="✦"
            topLabel={`#${index + 1}`}
            title={card.name}
            titleClassName="text-[10px] font-semibold leading-tight text-white"
            state={activeResultIndex === index ? "active" : "default"}
          />
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={onViewSingle}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            activeResultIndex !== null
              ? "bg-violet-600 text-white"
              : "bg-violet-100 text-violet-700 hover:bg-violet-200"
          }`}
        >
          {viewSingleResultLabel}
        </button>
        <button
          type="button"
          onClick={onViewAll}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            activeResultIndex === null
              ? "bg-violet-600 text-white"
              : "bg-violet-100 text-violet-700 hover:bg-violet-200"
          }`}
        >
          {viewAllResultsLabel}
        </button>
      </div>

      <section className="mt-8 space-y-5">
        {positions.map((position, index) => {
          if (activeResultIndex !== null && activeResultIndex !== index) return null;
          const card = selectedCards[index];
          if (!card) return null;
          return (
            <article
              key={card.id}
              className="rounded-2xl border border-violet-100 bg-white/90 p-5 shadow-sm shadow-violet-100/30 sm:p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
                {position.label} · {position.sublabel}
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-slate-900 sm:text-xl">
                {card.name}
              </h3>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {card.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {card.meaning}
              </p>

              <p className="mt-3 text-xs text-slate-400">
                {card.arcana === "major"
                  ? `⭐ ${majorArcanaLabel}`
                  : `${suitLabels[card.suit!]} · ${minorArcanaLabel}`}
              </p>
            </article>
          );
        })}

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-400">{entertainmentLabel}</p>
          <div className="flex gap-2">
            <TarotBackButton label={backLabel} onClick={onBack} />
            <button
              type="button"
              onClick={onReset}
              className="rounded-2xl border border-violet-200 px-6 py-2.5 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 active:scale-95"
            >
              {startOverLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
