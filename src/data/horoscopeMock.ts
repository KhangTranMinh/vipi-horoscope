import {
	DEFAULT_LOCALE,
	getLocalized,
	type SupportedLocale,
} from "@/locales";

export type ZodiacSign = import("@/locales/en/horoscope").ZodiacSign;
export type WeeklyHoroscope = import("@/locales/en/horoscope").WeeklyHoroscope;

export function getZodiacSigns(locale: SupportedLocale = DEFAULT_LOCALE) {
	return getLocalized(locale).horoscope.ZODIAC_SIGNS;
}

export function getWeeklyHoroscopeMock(
	locale: SupportedLocale = DEFAULT_LOCALE,
) {
	return getLocalized(locale).horoscope.MOCK_WEEKLY_HOROSCOPE;
}
