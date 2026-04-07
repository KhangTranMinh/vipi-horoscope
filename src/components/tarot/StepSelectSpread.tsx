import type { SpreadTypeOption } from "./types";

type StepSelectSpreadProps = {
  title: string;
  description: string;
  spreadTypes: readonly SpreadTypeOption[];
  onSelect: (id: string) => void;
};

export function StepSelectSpread({
  title,
  description,
  spreadTypes,
  onSelect,
}: StepSelectSpreadProps) {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-slate-500 sm:text-base">{description}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {spreadTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect(type.id)}
            className="group flex flex-col items-start gap-3 rounded-2xl border border-violet-100 bg-white/90 p-6 text-left shadow-sm shadow-violet-100/30 transition hover:border-violet-300 hover:shadow-md hover:shadow-violet-200/40 active:scale-[0.98]"
          >
            <span className="text-3xl">{type.icon}</span>
            <div>
              <p className="text-base font-semibold text-slate-900 group-hover:text-violet-700">
                {type.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">{type.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
