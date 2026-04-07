import type { Step } from "./types";

type TarotStepIndicatorProps = {
  step: Step;
};

export function TarotStepIndicator({ step }: TarotStepIndicatorProps) {
  return (
    <div className="mt-3 flex items-center gap-2">
      {([1, 2, 3, 4, 5] as Step[]).map((item) => (
        <div
          key={item}
          className={`h-2 rounded-full transition-all duration-300 ${
            item === step
              ? "w-6 bg-violet-600"
              : item < step
                ? "w-2 bg-violet-400"
                : "w-2 bg-violet-200"
          }`}
        />
      ))}
      <span className="ml-1 text-xs text-slate-400">{step} / 5</span>
    </div>
  );
}
