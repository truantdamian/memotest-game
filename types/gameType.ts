import { gameModeEnum } from "enum/gameModeEnum";
import { itemType } from "./itemType";
import { statisticsType } from "./statisticsType";
import { statusGameEnum } from "enum/statusGameEnum";

export type gameType = {
  status: statusGameEnum;
  mode: gameModeEnum;
  items: itemType[];
  statistics: statisticsType;
};
