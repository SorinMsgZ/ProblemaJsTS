import { ICombatArena } from './combat-arena.interface';
import { CharacterSheet } from '../Step1/character-sheet';
import { D20Dice } from '../Step1/dice-class';
import { MockCharacterSheetCombat1, MockCharacterSheetCombat2 } from '../mock/character-sheet.mocks';

export class CombatArena implements ICombatArena {
  characters: CharacterSheet[];
  currentInitiativePosition: number;
  deadCharacters: Map<string, boolean>;
  hasStarted: boolean;
  initiatives: Map<string, number>;
  sortedCharacterOrder: string[];

  constructor(characters: CharacterSheet[]) {
    this.characters = characters;
    this.currentInitiativePosition = 0;
    this.deadCharacters = new Map<string, boolean>();
    this.hasStarted = false;
    this.initiatives = new Map<string, number>();
    this.sortedCharacterOrder = [];
  }
  rollInitiative(): void {
    const characterOneInitiative = D20Dice.roll() + this.characters[0].stats.DEX;
    const characterTwoInitiative = D20Dice.roll() + this.characters[1].stats.DEX;
    this.initiatives.set(this.characters[0].name, characterOneInitiative);
    this.initiatives.set(this.characters[1].name, characterTwoInitiative);
    if (characterOneInitiative < characterTwoInitiative) {
      this.currentInitiativePosition = characterTwoInitiative;
      this.sortedCharacterOrder.push(this.characters[1].name);
      this.sortedCharacterOrder.push(this.characters[0].name);
    } else {
      this.currentInitiativePosition = characterOneInitiative;
      this.sortedCharacterOrder.push(this.characters[0].name);
      this.sortedCharacterOrder.push(this.characters[1].name);
    }
    //this.initiatives.keys();
  }
  currentInitAttackRoll(targetCharacter: string): void {}

  useAtackItem(itemParam: string): void {}

  endTurnCommand(): void {}
}
