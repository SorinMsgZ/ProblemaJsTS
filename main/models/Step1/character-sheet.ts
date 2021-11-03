import { CharacterClass } from './character-class';
import { StatsSheet } from './stats-sheet';
import { Item } from './item';
import { ArmorItem } from './armor-item';
import { MockItem1 } from '../mock/item.mocks';

export class CharacterSheet {
  public name: string;
  public sheet_level: number;
  private _stats: StatsSheet;
  public character: CharacterClass;
  public inventory: Item[];
  static baseParamAC = 10;

  constructor(name: string, level: number, stats: StatsSheet, character: CharacterClass, inventory: Item[]) {
    this.name = name;
    this.sheet_level = level;
    this._stats = stats;
    this.character = character;
    this.inventory = inventory;
  }

  get health(): number {
    return this.character.class_dice.roll() * this.character.class_level + this._stats.CON;
  }

  get armorClass(): number {
    let AC: number = 0;
    for (let item of this.inventory) {
      if (item.type === ArmorItem.TYPE_SELECTOR) {
        const itemArmorType = item as ArmorItem;
        AC = itemArmorType.armorClass;
        break;
      } else AC = CharacterSheet.baseParamAC + this._stats.DEX;
    }
    return AC;
  }

  get proficiencyBonus(): number {
    return Math.round(1 + (1 / 4) * this.sheet_level);
  }

  get stats(): StatsSheet {
    return this._stats;
  }
}
