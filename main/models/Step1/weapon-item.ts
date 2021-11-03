import { StatsSheet } from './stats-sheet';
import { CharacterSheet } from './character-sheet';
import { Item } from './item';
import { D20Dice, D6Dice } from './dice-class';

export class WeaponItem extends Item {
  static TYPE_SELECTOR = 'WeaponItemType';

  constructor(name: string, baseParam: number, stats: StatsSheet) {
    super(name, WeaponItem.TYPE_SELECTOR, baseParam, stats);
  }

  rollAttack(characterSheet: CharacterSheet): number {
    return D20Dice.roll() + characterSheet.stats.STR + characterSheet.proficiencyBonus;
  }

  rollDamage(): number {
    return D6Dice.roll() + this.stats.STR;
  }
}
