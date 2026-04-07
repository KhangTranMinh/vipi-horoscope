import { TarotBackButton } from "./TarotBackButton";
import type { DepthOption } from "./types";

type StepSelectDepthProps = {
  backLabel: string;
  title: string;
  depthOptions: readonly DepthOption[];
  onBack: () => void;
  onSelect: (id: string) => void;
};

export function StepSelectDepth({
  backLabel,
  title,
  depthOptions,
  onBack,
  onSelect,
}: StepSelectDepthProps) {
  return (
    <div className="mt-6">
      <div className="mb-4">
        <TarotBackButton label={backLabel} onClick={onBack} />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        {depthOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className="group flex flex-1 flex-col items-center gap-2 rounded-2xl border border-violet-100 bg-white/90 px-5 py-6 text-center shadow-sm shadow-violet-100/30 transition hover:border-violet-300 hover:shadow-md hover:shadow-violet-200/40 active:scale-[0.98]"
          >
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
              {option.badge}
            </span>
            <p className="text-base font-semibold text-slate-900 group-hover:text-violet-700">
              {option.title}
            </p>
            <p className="text-sm text-slate-500">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
