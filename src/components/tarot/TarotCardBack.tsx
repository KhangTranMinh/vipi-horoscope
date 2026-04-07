type TarotCardBackProps = {
  className?: string;
  marker?: string;
  topLabel?: string;
  bottomLabel?: string;
  title?: string;
  titleClassName?: string;
  state?: "default" | "active" | "filled" | "selected";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const STATE_CLASS_MAP = {
  default: "border-violet-200 hover:border-violet-300",
  active:
    "scale-[1.04] border-amber-400 shadow-lg shadow-amber-200/60 ring-4 ring-amber-100",
  filled: "border-violet-500 shadow-md shadow-violet-200/40",
  selected: "border-violet-500 opacity-45",
} as const;

export function TarotCardBack({
  className = "",
  marker = "✦",
  topLabel,
  bottomLabel,
  title,
  titleClassName = "text-[10px] font-semibold leading-tight text-white",
  state = "default",
  disabled = false,
  onClick,
  ariaLabel,
}: TarotCardBackProps) {
  const baseClassName = `relative flex h-40 w-28 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 text-center transition ${STATE_CLASS_MAP[state]} ${disabled ? "cursor-not-allowed" : ""} ${className}`.trim();
  const content = (
    <>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-950" />
      <div
        className="absolute inset-0 rounded-2xl opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />
      {topLabel ? (
        <span className="relative text-[10px] font-semibold text-violet-200">
          {topLabel}
        </span>
      ) : null}
      <span className="relative mt-1 text-sm text-violet-300">{marker}</span>
      {title ? (
        <p className={`relative mt-2 line-clamp-3 px-3 text-center ${titleClassName}`}>
          {title}
        </p>
      ) : null}
      {bottomLabel ? (
        <span className="relative mt-2 text-[10px] font-medium text-violet-200">
          {bottomLabel}
        </span>
      ) : null}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={baseClassName}
      >
        {content}
      </button>
    );
  }

  return <div className={baseClassName}>{content}</div>;
}
