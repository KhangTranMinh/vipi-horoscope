import * as enHoroscope from "./en/horoscope";
import * as viHoroscope from "./vi/horoscope";
import * as enTarot from "./en/tarot";
import * as viTarot from "./vi/tarot";
import { ui as enUi } from "./en/ui";
import { ui as viUi } from "./vi/ui";

export type SupportedLocale = "en" | "vi";

export const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "vi"];

function resolveLocale(): SupportedLocale {
  const configured = process.env.NEXT_PUBLIC_LOCALE?.toLowerCase();
  if (configured === "vi") return "vi";
  return "en";
}

export const DEFAULT_LOCALE = resolveLocale();

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

export function isSupportedLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

export function getLocalized(locale: SupportedLocale) {
  return localeMap[locale];
}

export const localized = getLocalized(DEFAULT_LOCALE);
