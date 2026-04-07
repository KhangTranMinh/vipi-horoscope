export type ZodiacSign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type WeeklyHoroscope = {
  sign: ZodiacSign;
  weekStart: string;
  summary: string;
  love: string;
  career: string;
  health: string;
};

export const ZODIAC_SIGNS: { value: ZodiacSign; label: string }[] = [
  { value: "aries", label: "Aries" },
  { value: "taurus", label: "Taurus" },
  { value: "gemini", label: "Gemini" },
  { value: "cancer", label: "Cancer" },
  { value: "leo", label: "Leo" },
  { value: "virgo", label: "Virgo" },
  { value: "libra", label: "Libra" },
  { value: "scorpio", label: "Scorpio" },
  { value: "sagittarius", label: "Sagittarius" },
  { value: "capricorn", label: "Capricorn" },
  { value: "aquarius", label: "Aquarius" },
  { value: "pisces", label: "Pisces" },
];

const WEEK_START = "2026-04-06";

export const MOCK_WEEKLY_HOROSCOPE: Record<ZodiacSign, WeeklyHoroscope> = {
  aries: {
    sign: "aries",
    weekStart: WEEK_START,
    summary: "Fast momentum this week. Take action, but avoid rushing details.",
    love: "Speak honestly and listen more.",
    career: "Good week to finish pending tasks.",
    health: "Prioritize sleep and hydration.",
  },
  taurus: {
    sign: "taurus",
    weekStart: WEEK_START,
    summary: "Steady progress. Consistency brings better outcomes.",
    love: "Small thoughtful gestures matter.",
    career: "Focus on long-term planning.",
    health: "Keep a balanced routine.",
  },
  gemini: {
    sign: "gemini",
    weekStart: WEEK_START,
    summary: "Communication is your advantage this week.",
    love: "Clarify expectations early.",
    career: "Great time for collaboration.",
    health: "Take short breaks to reset.",
  },
  cancer: {
    sign: "cancer",
    weekStart: WEEK_START,
    summary: "Emotional clarity helps you make practical decisions.",
    love: "Create quality time with loved ones.",
    career: "Avoid overcommitting.",
    health: "Protect your energy.",
  },
  leo: {
    sign: "leo",
    weekStart: WEEK_START,
    summary: "Your confidence attracts opportunities.",
    love: "Be warm, not controlling.",
    career: "Show leadership with empathy.",
    health: "Stretch and move daily.",
  },
  virgo: {
    sign: "virgo",
    weekStart: WEEK_START,
    summary: "Details matter, but do not over-perfect.",
    love: "Be gentle with feedback.",
    career: "Document and organize priorities.",
    health: "Keep meals and sleep regular.",
  },
  libra: {
    sign: "libra",
    weekStart: WEEK_START,
    summary: "Balance returns when you simplify decisions.",
    love: "Choose honest conversations.",
    career: "Negotiate thoughtfully.",
    health: "Reduce screen time at night.",
  },
  scorpio: {
    sign: "scorpio",
    weekStart: WEEK_START,
    summary: "Deep focus helps you break through blockers.",
    love: "Trust grows through openness.",
    career: "Strong week for strategic work.",
    health: "Release stress with exercise.",
  },
  sagittarius: {
    sign: "sagittarius",
    weekStart: WEEK_START,
    summary: "A good week for learning and trying new ideas.",
    love: "Be present, not distracted.",
    career: "Pitch bold but realistic plans.",
    health: "Keep movement fun and consistent.",
  },
  capricorn: {
    sign: "capricorn",
    weekStart: WEEK_START,
    summary: "Discipline pays off. Keep priorities tight.",
    love: "Make time despite a busy schedule.",
    career: "Progress through structured execution.",
    health: "Watch posture and recovery.",
  },
  aquarius: {
    sign: "aquarius",
    weekStart: WEEK_START,
    summary: "Creative thinking unlocks practical results.",
    love: "Share your ideas clearly.",
    career: "Good time for innovation.",
    health: "Sleep consistency is key.",
  },
  pisces: {
    sign: "pisces",
    weekStart: WEEK_START,
    summary: "Intuition is strong. Use it with clear boundaries.",
    love: "Compassion strengthens connection.",
    career: "Trust your instincts, verify facts.",
    health: "Protect quiet time to recharge.",
  },
};
