import { itemType } from "./itemType";

export type statisticsType = {
  cards: itemType[];
  hits: number;
  miss: number;
  score: number;
};
