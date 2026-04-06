import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
          VIPI
        </p>
        <h1 className="mt-3 text-center text-3xl font-bold text-slate-900 sm:text-5xl">
          Choose your path
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-slate-500 sm:text-base">
          Pick a divination method to reveal what the universe holds for you.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Horoscope */}
          <Link
            href="/horoscope"
            className="group flex flex-col gap-5 rounded-3xl border border-orange-100 bg-white/90 p-8 shadow-lg shadow-orange-100/40 backdrop-blur transition hover:border-orange-300 hover:shadow-xl hover:shadow-orange-200/50 active:scale-[0.98]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
              ✦
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Horoscope</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Explore your weekly zodiac reading across love, career, and
                health.
              </p>
            </div>
            <span className="mt-auto text-sm font-semibold text-orange-500 transition group-hover:text-orange-600">
              View reading →
            </span>
          </Link>

          {/* Tarot */}
          <Link
            href="/tarot"
            className="group flex flex-col gap-5 rounded-3xl border border-violet-100 bg-white/90 p-8 shadow-lg shadow-violet-100/40 backdrop-blur transition hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/50 active:scale-[0.98]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
              🃏
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Tarot</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Shuffle the full 78-card deck and draw three cards to uncover
                hidden truths.
              </p>
            </div>
            <span className="mt-auto text-sm font-semibold text-violet-500 transition group-hover:text-violet-600">
              Draw cards →
            </span>
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Entertainment only · prototype v0.1
        </p>
      </div>
    </main>
  );
}
