import { StatsSheet } from './stats-sheet';
import { Item } from './item';
import { CharacterSheet } from './character-sheet';

export class ArmorItem extends Item {
  static TYPE_SELECTOR = 'ArmorItemType';

  constructor(name: string, baseParam: number, stats: StatsSheet) {
    super(name, ArmorItem.TYPE_SELECTOR, baseParam, stats);
  }

  get armorClass(): number {
    return this.baseParam + this.stats.DEX;
  }
}
