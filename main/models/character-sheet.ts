import { CharacterClass } from './character-class';
import { StatsSheet } from './stats-sheet';
import { Item } from './item';

export class CharacterSheet {
  public name: string;
  public sheet_level: number;
  public stats: StatsSheet;
  public character: CharacterClass;
  public inventory: Item[];

  constructor(name: string, level: number, stats: StatsSheet, character: CharacterClass, inventory: Item[]) {
    this.name = name;
    this.sheet_level = level;
    this.stats = stats;
    this.character = character;
    this.inventory = inventory;
  }

  calcHealth(): number {
    return this.character.class_dice.roll() * this.character.class_level + this.stats.CON;
  }

  calcArmorClass(): number {
    return 10 + this.stats.DEX;
  }

  get proficiencyBonus(): number {
    return Math.round(1 + (1 / 4) * this.sheet_level);
  }
}
