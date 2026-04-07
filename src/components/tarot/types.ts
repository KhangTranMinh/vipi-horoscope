import type { TarotCard } from "@/data/tarotData";

export type Step = 1 | 2 | 3 | 4 | 5;
export type PositionEntry = { readonly label: string; readonly sublabel: string };

export type SpreadTypeOption = {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
};

export type DepthOption = {
  readonly id: string;
  readonly cardCount: number;
  readonly title: string;
  readonly badge: string;
  readonly description: string;
};

export type QuestionOption = {
  readonly id: string;
  readonly title: string;
};

export type TarotCardResult = TarotCard;
