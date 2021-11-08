import { StatsSheet } from './stats-sheet';

export class Item {
  name: string;
  readonly type: string;
  baseParam: number;
  stats: StatsSheet;

  constructor(name: string, type: string, baseParam: number, stats: StatsSheet) {
    this.name = name;
    this.type = type;
    this.baseParam = baseParam;
    this.stats = stats;
  }
}
