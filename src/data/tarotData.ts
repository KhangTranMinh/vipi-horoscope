import {
	DEFAULT_LOCALE,
	getLocalized,
	type SupportedLocale,
} from "@/locales";

export type TarotArcana = import("@/locales/en/tarot").TarotArcana;
export type TarotSuit = import("@/locales/en/tarot").TarotSuit;
export type TarotCard = import("@/locales/en/tarot").TarotCard;

export function getTarotCards(locale: SupportedLocale = DEFAULT_LOCALE) {
	return getLocalized(locale).tarot.TAROT_CARDS;
}
