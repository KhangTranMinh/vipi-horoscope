import {
  MOCK_WEEKLY_HOROSCOPE,
  type WeeklyHoroscope,
  type ZodiacSign,
} from "@/data/horoscopeMock";

export async function getWeeklyHoroscope(
  sign: ZodiacSign,
): Promise<WeeklyHoroscope> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return MOCK_WEEKLY_HOROSCOPE[sign];
}
