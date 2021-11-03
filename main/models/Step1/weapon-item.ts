import { StatsSheet } from './stats-sheet';
import { CharacterSheet } from './character-sheet';
import { Item } from './item';
import { D20Dice, D6Dice } from './dice-class';

export class WeaponItem extends Item {
  static TYPE_SELECTOR = 'WeaponItemType';

  constructor(name: string) {
    super(name, WeaponItem.TYPE_SELECTOR);
  }

  rollAttack(characterSheet: CharacterSheet): number {
    return D20Dice.roll() + characterSheet.stats.STR + characterSheet.proficiencyBonus;
  }

  rollDamage(strParam: StatsSheet): number {
    return D6Dice.roll() + strParam.STR;
  }
}
