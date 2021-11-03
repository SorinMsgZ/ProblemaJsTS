import { StatsSheet } from './stats-sheet';
import { Item } from './item';

export class ArmorItem extends Item {
  static TYPE_SELECTOR = 'ArmorItemType';

  constructor(name: string) {
    super(name, ArmorItem.TYPE_SELECTOR);
  }

  calcFormulaAC(dexParam: StatsSheet): number {
    return 13 + dexParam.DEX;
  }
}
