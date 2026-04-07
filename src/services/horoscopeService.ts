import {
  getWeeklyHoroscopeMock,
  type WeeklyHoroscope,
  type ZodiacSign,
} from "@/data/horoscopeMock";
import { DEFAULT_LOCALE, type SupportedLocale } from "@/locales";

export async function getWeeklyHoroscope(
  sign: ZodiacSign,
  locale: SupportedLocale = DEFAULT_LOCALE,
): Promise<WeeklyHoroscope> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return getWeeklyHoroscopeMock(locale)[sign];
}
