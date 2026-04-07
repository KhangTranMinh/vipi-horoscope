export type TarotArcana = "major" | "minor";
export type TarotSuit = "wands" | "cups" | "swords" | "pentacles";

export interface TarotCard {
  id: number;
  name: string;
  arcana: TarotArcana;
  suit?: TarotSuit;
  keywords: string[];
  meaning: string;
}

export const TAROT_CARDS: TarotCard[] = [
  // ── Major Arcana ─────────────────────────────────────────────────────────
  {
    id: 0,
    name: "The Fool",
    arcana: "major",
    keywords: ["beginnings", "spontaneity", "freedom"],
    meaning:
      "A leap of faith into uncharted territory. Embrace new beginnings with an open heart and a child-like trust in the journey ahead. The universe is ready to support your next adventure.",
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "major",
    keywords: ["manifestation", "willpower", "skill"],
    meaning:
      "You already have every tool you need. Channel your focus, creativity, and determination to turn ideas into reality. The power to manifest is entirely in your hands.",
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "major",
    keywords: ["intuition", "mystery", "inner knowing"],
    meaning:
      "Still the mind and listen to what lies beneath the surface. Hidden knowledge and quiet wisdom are available to you — trust your instincts above logical argument.",
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "major",
    keywords: ["abundance", "nurturing", "creativity"],
    meaning:
      "A time of fertile growth, beauty, and creative expansion. Connect with nature and your senses; abundance flows when you nurture yourself and those around you.",
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "major",
    keywords: ["authority", "structure", "stability"],
    meaning:
      "Build on solid foundations. Discipline and clear boundaries create the structure that allows dreams to thrive. Step into your authority with confidence.",
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "major",
    keywords: ["tradition", "guidance", "convention"],
    meaning:
      "Seek wisdom through established teachings or a trusted mentor. Sometimes the tried-and-true path holds deeper truth than the unconventional one.",
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "major",
    keywords: ["love", "alignment", "choice"],
    meaning:
      "A significant choice lies ahead — one that must align with your deepest values. Whether in relationships or decisions, choose from the heart, not from fear.",
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "major",
    keywords: ["willpower", "victory", "determination"],
    meaning:
      "You are in the driver's seat. Harness opposing forces through sheer will and focus — success is within reach for those who stay the course.",
  },
  {
    id: 8,
    name: "Strength",
    arcana: "major",
    keywords: ["courage", "patience", "compassion"],
    meaning:
      "True strength is gentle rather than forceful. You have the inner resilience to face challenges with calm confidence — soft persistence wins where brute force fails.",
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "major",
    keywords: ["introspection", "solitude", "inner guidance"],
    meaning:
      "Withdraw from noise and seek the light within. This is a time for honest self-reflection; the answers you seek are not outside — they are waiting in the quiet.",
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "major",
    keywords: ["cycles", "destiny", "turning point"],
    meaning:
      "The wheel turns and a new cycle begins. Embrace the change; what rises also falls, and what falls rises again. Align yourself with the flow rather than resisting it.",
  },
  {
    id: 11,
    name: "Justice",
    arcana: "major",
    keywords: ["fairness", "truth", "cause and effect"],
    meaning:
      "Every action carries a consequence. Approach decisions with integrity and clear-eyed honesty — the scales will balance in your favor when you act with fairness.",
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "major",
    keywords: ["surrender", "pause", "new perspective"],
    meaning:
      "Pause instead of pushing. Voluntary surrender opens a perspective you could not see before. This delay is not a setback — it is an invitation to see things differently.",
  },
  {
    id: 13,
    name: "Death",
    arcana: "major",
    keywords: ["transformation", "endings", "transition"],
    meaning:
      "Something must end so something better can begin. This card rarely means physical death — it signals a profound transformation that clears the way for new life.",
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "major",
    keywords: ["balance", "moderation", "purpose"],
    meaning:
      "Find the middle path. Blending opposing energies with patience and intention creates harmony — rushing or excess will undo what careful balance can achieve.",
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "major",
    keywords: ["attachment", "shadow", "materialism"],
    meaning:
      "Examine what keeps you in chains — often it is a belief you have the power to release. Acknowledge the shadow rather than deny it; awareness is the first step to freedom.",
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "major",
    keywords: ["upheaval", "revelation", "sudden change"],
    meaning:
      "A sudden disruption shatters what was built on shaky ground. Though shocking, this collapse clears space for something more authentic and enduring to be built.",
  },
  {
    id: 17,
    name: "The Star",
    arcana: "major",
    keywords: ["hope", "renewal", "faith"],
    meaning:
      "After the storm, a quiet radiance. Healing is underway and hope is well-founded. Remain open and trusting — the universe is guiding you toward restoration.",
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "major",
    keywords: ["illusion", "fear", "the unconscious"],
    meaning:
      "Not everything is as it appears. Fears and doubts may distort your vision; navigate by intuition rather than rigid logic until clarity returns with the dawn.",
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "major",
    keywords: ["joy", "vitality", "success"],
    meaning:
      "Warmth, clarity, and success radiate through this period. Confidence is well-placed; let your authentic self shine and enjoy the abundance that naturally follows.",
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "major",
    keywords: ["awakening", "reflection", "reckoning"],
    meaning:
      "A moment of profound clarity and self-evaluation. Hear the call to rise above old patterns — forgive yourself, integrate your lessons, and step into a higher version of your life.",
  },
  {
    id: 21,
    name: "The World",
    arcana: "major",
    keywords: ["completion", "achievement", "wholeness"],
    meaning:
      "You have come full circle. Celebrate the successful completion of a long journey and honor all you have learned. A new and expansive chapter now awaits.",
  },

  // ── Minor Arcana · Wands ─────────────────────────────────────────────────
  {
    id: 22,
    name: "Ace of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["inspiration", "spark", "new venture"],
    meaning:
      "A powerful surge of creative energy arrives. Seize it — this spark of inspiration is a seed that, if acted upon now, can grow into something remarkable.",
  },
  {
    id: 23,
    name: "Two of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["planning", "foresight", "expansion"],
    meaning:
      "You stand at the threshold between vision and action. Make bold plans and look toward the horizon — the world is larger than your current vantage point suggests.",
  },
  {
    id: 24,
    name: "Three of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["progress", "opportunity", "enterprise"],
    meaning:
      "Your efforts are beginning to extend into the world. Watch for opportunities arriving from unexpected directions; the momentum you built is now working for you.",
  },
  {
    id: 25,
    name: "Four of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["celebration", "homecoming", "joy"],
    meaning:
      "A season of joy, stability, and shared celebration. Gather with those you love and acknowledge how far you have all come together.",
  },
  {
    id: 26,
    name: "Five of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["conflict", "competition", "chaos"],
    meaning:
      "Competing ideas or ambitions create friction. Instead of fighting for dominance, look for the underlying common ground — collaboration outperforms combat.",
  },
  {
    id: 27,
    name: "Six of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["victory", "recognition", "confidence"],
    meaning:
      "Your efforts have earned public acknowledgment. Accept the recognition with grace and use it as fuel — not a reason to coast.",
  },
  {
    id: 28,
    name: "Seven of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["perseverance", "defense", "standing firm"],
    meaning:
      "Hold your ground. Others may challenge your position, but your advantage is real — the key is staying committed rather than second-guessing yourself under pressure.",
  },
  {
    id: 29,
    name: "Eight of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["speed", "momentum", "swift action"],
    meaning:
      "Events accelerate rapidly. Obstacles clear and messages arrive quickly — act decisively and keep pace with the fast-moving current around you.",
  },
  {
    id: 30,
    name: "Nine of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["resilience", "persistence", "last stretch"],
    meaning:
      "Tired but not beaten, you are closer to the finish line than you think. Draw on your reserves one more time — this final push is what separates success from surrender.",
  },
  {
    id: 31,
    name: "Ten of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["burden", "overload", "responsibility"],
    meaning:
      "You are carrying too much. Identify what can be delegated or released — continuing to shoulder every burden alone will exhaust what remains of your energy.",
  },
  {
    id: 32,
    name: "Page of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["enthusiasm", "exploration", "free spirit"],
    meaning:
      "Approach life with curiosity and daring. A message or opportunity to try something completely new is arriving — say yes before caution talks you out of it.",
  },
  {
    id: 33,
    name: "Knight of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["energy", "passion", "adventure"],
    meaning:
      "Charge forward with infectious passion, but keep an eye on where you are going. Bold action yields results; recklessness wastes the momentum you have built.",
  },
  {
    id: 34,
    name: "Queen of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["confidence", "independence", "magnetism"],
    meaning:
      "Own the room. Your natural charisma and warm authority draw others to your vision — lead with heart and conviction, and your enthusiasm will be contagious.",
  },
  {
    id: 35,
    name: "King of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["leadership", "vision", "boldness"],
    meaning:
      "You are the visionary entrepreneur. Translate grand ideas into decisive action and inspire others with a clear — and humane — sense of purpose.",
  },

  // ── Minor Arcana · Cups ──────────────────────────────────────────────────
  {
    id: 36,
    name: "Ace of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["new love", "compassion", "spiritual opening"],
    meaning:
      "A wellspring of emotional energy is available to you. Open your heart to receive love, creativity, or spiritual inspiration — this is a new beginning on a feeling level.",
  },
  {
    id: 37,
    name: "Two of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["partnership", "mutual attraction", "harmony"],
    meaning:
      "A beautifully balanced connection — romantic or otherwise — is forming or deepening. The energy flowing between you and another brings mutual joy and meaning.",
  },
  {
    id: 38,
    name: "Three of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["celebration", "friendship", "community"],
    meaning:
      "Raise a glass with the people who matter. A period of joy and reunion invites you to appreciate the deep bonds you share — nurture these friendships as you would a garden.",
  },
  {
    id: 39,
    name: "Four of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["apathy", "re-evaluation", "contemplation"],
    meaning:
      "Discontent invites reflection. Pause before dismissing what is being offered — sometimes the cup you already hold is filled with more than you currently notice.",
  },
  {
    id: 40,
    name: "Five of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["loss", "grief", "regret"],
    meaning:
      "Allow yourself to grieve what has been lost, but do not forget the cups still standing behind you. Honoring sorrow is healthy; being consumed by it is optional.",
  },
  {
    id: 41,
    name: "Six of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["nostalgia", "innocence", "reunion"],
    meaning:
      "The past returns — as memory, as a person, or as a feeling long forgotten. Let it warm you without trapping you; the sweetness of the past can nourish the present.",
  },
  {
    id: 42,
    name: "Seven of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["fantasy", "illusion", "choices"],
    meaning:
      "Many options glitter before you, but not all are as real as they appear. Ground yourself before choosing — one meaningful commitment outweighs seven half-formed dreams.",
  },
  {
    id: 43,
    name: "Eight of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["withdrawal", "walking away", "seeking more"],
    meaning:
      "Something once fulfilling no longer nourishes you. It takes courage to walk away from what is merely comfortable in search of what is truly meaningful.",
  },
  {
    id: 44,
    name: "Nine of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["contentment", "satisfaction", "wish fulfilled"],
    meaning:
      "The wish card. Your heartfelt desire is in the process of being fulfilled — receive it with gratitude rather than suspicion, and enjoy this season of contentment.",
  },
  {
    id: 45,
    name: "Ten of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["harmony", "family joy", "fulfillment"],
    meaning:
      "Deep, lasting happiness rooted in loving relationships. This is the life you have been building — take a moment to stand in it and feel how much it means.",
  },
  {
    id: 46,
    name: "Page of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["intuitive message", "creativity", "sensitivity"],
    meaning:
      "Stay open to unlikely messages and whimsical inspiration. Something tender and unexpected is nudging you toward a more imaginative, emotionally honest path.",
  },
  {
    id: 47,
    name: "Knight of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["romance", "charm", "following the heart"],
    meaning:
      "Let your heart lead — a romantically inspired pursuit has genuine beauty in it. Be sincere rather than seductive, and your idealism will find its match.",
  },
  {
    id: 48,
    name: "Queen of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["empathy", "nurturing", "emotional depth"],
    meaning:
      "You hold space for others with extraordinary grace. The healing gift you offer is compassionate presence — trust your feelings as a form of intelligence.",
  },
  {
    id: 49,
    name: "King of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["emotional maturity", "diplomacy", "calm"],
    meaning:
      "Emotions are felt fully and expressed wisely. True mastery here is not controlling feelings but steering them — lead with warmth and steady, generous authority.",
  },

  // ── Minor Arcana · Swords ────────────────────────────────────────────────
  {
    id: 50,
    name: "Ace of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["clarity", "breakthrough", "truth"],
    meaning:
      "A sword cuts through confusion to reveal a clear and honest truth. The mental breakthrough you have been seeking arrives now — receive it, even if it is uncomfortable.",
  },
  {
    id: 51,
    name: "Two of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["indecision", "stalemate", "avoidance"],
    meaning:
      "You are holding two options in tense balance. Remove the blindfold — gathering more information before deciding is reasonable, but prolonged avoidance only deepens the deadlock.",
  },
  {
    id: 52,
    name: "Three of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["heartbreak", "sorrow", "grief"],
    meaning:
      "Pain has arrived, and it is real. Allow yourself to feel the sorrow without suppressing it — truth spoken and tears shed now are the fastest route through this heartache.",
  },
  {
    id: 53,
    name: "Four of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["rest", "recovery", "retreat"],
    meaning:
      "Your mind and body require true rest. Retreat from the battle temporarily — strategic stillness is not surrender; it is preparation for the next clear step forward.",
  },
  {
    id: 54,
    name: "Five of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["conflict", "defeat", "tension"],
    meaning:
      "Not every battle is worth winning. A hollow victory achieved at great cost to relationships leaves more damage than defeat — choose which fights are truly worth your energy.",
  },
  {
    id: 55,
    name: "Six of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["transition", "moving on", "calmer waters"],
    meaning:
      "You are leaving turbulent times behind and moving toward calmer ground. The journey may feel quiet and bittersweet, but the horizon ahead holds genuine relief.",
  },
  {
    id: 56,
    name: "Seven of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["strategy", "caution", "deception"],
    meaning:
      "Tread carefully — something is not fully above board, whether in your own approach or someone else's. Gather information quietly before tipping your hand.",
  },
  {
    id: 57,
    name: "Eight of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["restriction", "victim thinking", "entrapment"],
    meaning:
      "The cage is largely of your own making. Step outside the limiting beliefs that keep you bound — you have more freedom and more choices than you currently believe.",
  },
  {
    id: 58,
    name: "Nine of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["anxiety", "fear", "sleeplessness"],
    meaning:
      "The mind magnifies fears in the dark. Many of these worries are projections rather than realities — seek support, question your thoughts, and remember that dawn always follows.",
  },
  {
    id: 59,
    name: "Ten of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["painful ending", "betrayal", "rock bottom"],
    meaning:
      "A situation has reached its absolute limit and collapsed. Though this ending is painful, you cannot fall any further — the only direction from here is upward.",
  },
  {
    id: 60,
    name: "Page of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["curiosity", "vigilance", "fresh ideas"],
    meaning:
      "Approach the situation with sharp curiosity and a willingness to question everything. New information is arriving — stay alert, ask better questions, and think before speaking.",
  },
  {
    id: 61,
    name: "Knight of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["ambition", "directness", "haste"],
    meaning:
      "Act with precision and speed, but check that urgency has not overtaken wisdom. The mind is sharp and the drive is real — channel it strategically rather than scattering it.",
  },
  {
    id: 62,
    name: "Queen of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["clear boundaries", "sharp wit", "independence"],
    meaning:
      "You can see through pretense and speak the truth with graceful directness. Your hard-won wisdom is a gift — use it to cut through confusion without cutting down people.",
  },
  {
    id: 63,
    name: "King of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["intellect", "authority", "ethics"],
    meaning:
      "Lead through reason, fairness, and clear communication. Decisions made with integrity and analytical clarity will be respected and hold up under scrutiny.",
  },

  // ── Minor Arcana · Pentacles ─────────────────────────────────────────────
  {
    id: 64,
    name: "Ace of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["new prosperity", "opportunity", "manifestation"],
    meaning:
      "A tangible new opportunity — financial, professional, or material — is presenting itself. Plant this seed with care and deliberate effort, and it will grow into something real.",
  },
  {
    id: 65,
    name: "Two of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["balance", "adaptability", "juggling"],
    meaning:
      "You are managing multiple demands with more grace than you realize. Stay flexible and prioritize ruthlessly — perfect equilibrium is a process, not a fixed destination.",
  },
  {
    id: 66,
    name: "Three of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["teamwork", "craftsmanship", "collaboration"],
    meaning:
      "Excellence is built through skilled collaboration, not in isolation. Seek out those whose strengths complement yours — what you create together will exceed what any one person can build alone.",
  },
  {
    id: 67,
    name: "Four of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["security", "control", "holding on"],
    meaning:
      "Security is valuable, but gripping too tightly blocks the natural flow of abundance. Protect what matters, but remain open enough for new wealth to find its way in.",
  },
  {
    id: 68,
    name: "Five of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["financial hardship", "isolation", "lack"],
    meaning:
      "A difficult period of scarcity — material or emotional. Help is closer than it feels; do not let pride or shame prevent you from seeking the support that is genuinely available.",
  },
  {
    id: 69,
    name: "Six of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["generosity", "sharing", "balance of giving"],
    meaning:
      "Wealth and resources circulate through generosity. Whether you are giving or receiving right now, act with dignity and gratitude — the flow you create returns to you.",
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["patience", "long-term thinking", "investment"],
    meaning:
      "Assess what your efforts are truly producing. Sustainable results take time — thoughtful course-correction now will yield far greater returns than rushing to finish.",
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["diligence", "mastery", "skill development"],
    meaning:
      "Commit to the work in front of you with full attention and care. Mastery is built through thousands of repetitions — the quality of your focus is everything.",
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["abundance", "self-sufficiency", "refinement"],
    meaning:
      "You have built something genuinely beautiful through your own effort. Enjoy this season of earned independence and cultivated luxury — you deserve to savor it.",
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["legacy", "family wealth", "lasting security"],
    meaning:
      "Long-term stability and multi-generational richness — financial, relational, and spiritual. What you build now has the potential to outlast and bless those who come after you.",
  },
  {
    id: 74,
    name: "Page of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["ambition", "eager learning", "new goals"],
    meaning:
      "A fresh, earnest energy approaches your material world. Embrace the beginner's mindset — careful study, small consistent steps, and genuine curiosity will lay remarkable foundations.",
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["reliability", "method", "steady progress"],
    meaning:
      "Slow and methodical wins the long race. Your commitment to doing things properly — even when it is unglamorous — produces results that flashier efforts rarely sustain.",
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["practicality", "nurturing abundance", "groundedness"],
    meaning:
      "You create safety and plenty for yourself and those around you through practical, loving action. Wealth here is not cold — it is warm, earthy, and shared generously.",
  },
  {
    id: 77,
    name: "King of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["prosperity", "security", "provider"],
    meaning:
      "Disciplined ambition has built a stable and abundant life. Lead with reliability and generosity — your success is most meaningful when it creates security for others as well.",
  },
];
