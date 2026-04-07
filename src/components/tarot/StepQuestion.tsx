import { TarotBackButton } from "./TarotBackButton";
import type { QuestionOption } from "./types";

type StepQuestionProps = {
  backLabel: string;
  title: string;
  description: string;
  questionLabel: string;
  customQuestionPlaceholder: string;
  continueLabel: string;
  predefinedQuestions: readonly QuestionOption[];
  questionId: string | null;
  customQuestion: string;
  onBack: () => void;
  onSelectQuestion: (id: string) => void;
  onCustomQuestionChange: (value: string) => void;
  onContinue: () => void;
  selectedQuestion: string;
};

export function StepQuestion({
  backLabel,
  title,
  description,
  questionLabel,
  customQuestionPlaceholder,
  continueLabel,
  predefinedQuestions,
  questionId,
  customQuestion,
  onBack,
  onSelectQuestion,
  onCustomQuestionChange,
  onContinue,
  selectedQuestion,
}: StepQuestionProps) {
  return (
    <div className="mt-6">
      <div className="mb-4">
        <TarotBackButton label={backLabel} onClick={onBack} />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-slate-500 sm:text-base">{description}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {predefinedQuestions.map((question) => {
          const isSelected = questionId === question.id && !customQuestion.trim();
          return (
            <button
              key={question.id}
              type="button"
              onClick={() => onSelectQuestion(question.id)}
              className={`rounded-2xl border p-5 text-left shadow-sm transition active:scale-[0.98] ${
                isSelected
                  ? "border-violet-400 bg-violet-50 shadow-violet-100"
                  : "border-violet-100 bg-white/90 shadow-violet-100/30 hover:border-violet-300"
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{question.title}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-violet-100 bg-white/90 p-4 shadow-sm shadow-violet-100/30">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
          {questionLabel}
        </p>
        <textarea
          value={customQuestion}
          onChange={(event) => onCustomQuestionChange(event.target.value)}
          rows={3}
          placeholder={customQuestionPlaceholder}
          className="mt-2 w-full rounded-xl border border-violet-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-violet-400"
        />
      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={onContinue}
          disabled={!selectedQuestion}
          className="rounded-2xl bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {continueLabel}
        </button>
      </div>
    </div>
  );
}
