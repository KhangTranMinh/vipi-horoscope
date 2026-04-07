import * as enHoroscope from "./en/horoscope";
import * as viHoroscope from "./vi/horoscope";
import * as enTarot from "./en/tarot";
import * as viTarot from "./vi/tarot";
import { ui as enUi } from "./en/ui";
import { ui as viUi } from "./vi/ui";

export type SupportedLocale = "en" | "vi";

function resolveLocale(): SupportedLocale {
  const configured = process.env.NEXT_PUBLIC_LOCALE?.toLowerCase();
  if (configured === "vi") return "vi";
  return "en";
}

export const locale = resolveLocale();

const localeMap = {
  en: {
    ui: enUi,
    horoscope: enHoroscope,
    tarot: enTarot,
  },
  vi: {
    ui: viUi,
    horoscope: viHoroscope,
    tarot: viTarot,
  },
} as const;

export const localized = localeMap[locale];
