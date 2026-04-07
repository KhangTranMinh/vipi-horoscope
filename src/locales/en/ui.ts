export const ui = {
  meta: {
    lang: "en",
    title: "VIPI Horoscope",
    description: "Weekly zodiac and tarot prototype built with Next.js.",
  },
  launcher: {
    brand: "VIPI",
    title: "Choose your path",
    description:
      "Pick a divination method to reveal what the universe holds for you.",
    horoscopeTitle: "Horoscope",
    horoscopeDescription:
      "Explore your weekly zodiac reading across love, career, and health.",
    horoscopeCta: "View reading ->",
    tarotTitle: "Tarot",
    tarotDescription:
      "Shuffle the full 78-card deck and draw three cards to uncover hidden truths.",
    tarotCta: "Draw cards ->",
    footer: "Entertainment only · prototype v0.1",
  },
  common: {
    back: "<- Back",
    entertainment: "Entertainment-only content for prototype validation.",
    language: "Language",
    languageEn: "English",
    languageVi: "Vietnamese",
  },
  horoscope: {
    brand: "VaiPai Zodiac Weekly",
    title: "Pick your sign, check your week",
    description:
      "This first release uses mock data so we can validate layout, flow, and responsiveness before integrating external APIs.",
    zodiacLabel: "Zodiac sign",
    loading: "Loading...",
    getWeek: "Get this week",
    emptyPrompt: 'Select your sign and tap "Get this week" to see your horoscope.',
    weekOf: "Week of",
    summary: "Summary:",
    love: "Love:",
    career: "Career:",
    health: "Health:",
  },
  tarot: {
    brand: "VIPI Tarot",
    titleReady: "Your reading is ready",
    titleWaiting: "The deck awaits",
    descriptionReady: "Three cards have been drawn. Scroll down to read your message.",
    descriptionWaiting:
      "All 78 cards lie before you, face down. When you are ready, draw three.",
    selectThree: "Select 3 Cards",
    drawAgain: "Draw again",
    faceDownAria: "Face-down tarot card",
    readingTitle: "Your three-card reading",
    readingSubtitle: "Past · Present · Future",
    majorArcana: "Major Arcana",
    minorArcana: "Minor Arcana",
    suits: {
      wands: "🔥 Wands",
      cups: "💧 Cups",
      swords: "⚡ Swords",
      pentacles: "🌿 Pentacles",
    },
    positions: [
      { label: "Past", sublabel: "What led you here" },
      { label: "Present", sublabel: "Where you stand now" },
      { label: "Future", sublabel: "Where you are headed" },
    ],
  },
} as const;
