import { localized } from "@/locales";

export type ZodiacSign = import("@/locales/en/horoscope").ZodiacSign;
export type WeeklyHoroscope = import("@/locales/en/horoscope").WeeklyHoroscope;

export const ZODIAC_SIGNS = localized.horoscope.ZODIAC_SIGNS;
export const MOCK_WEEKLY_HOROSCOPE = localized.horoscope.MOCK_WEEKLY_HOROSCOPE;
