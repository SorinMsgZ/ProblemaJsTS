import { StatsSheet } from './stats-sheet';
import { Item } from './item';

export class ArmorItem extends Item {
  static TYPE_SELECTOR = 'ArmorItemType';

  constructor(name: string) {
    super(name, ArmorItem.TYPE_SELECTOR);
  }

  getarmorClass(dexParam: StatsSheet): number {
    return ArmorItem.baseParam + dexParam.DEX;
  }
}
