import { ICombatArena } from './combat-arena.interface';
import { CharacterSheet } from '../Step1/character-sheet';
import { D20Dice } from '../Step1/dice-class';
import { MockCharacterSheetCombat1, MockCharacterSheetCombat2 } from '../mock/character-sheet.mocks';
import { Item } from '../Step1/item';

export class CombatArena implements ICombatArena {
  characters: CharacterSheet[];
  currentInitiativePosition: number;
  deadCharacters: Map<string, boolean>;
  hasStarted: boolean;
  initiatives: Map<string, number>;
  sortedCharacterOrder: string[];
  weaponAttack: number;
  damage: number;

  constructor(characters: CharacterSheet[]) {
    this.characters = characters;
    this.currentInitiativePosition = 0;
    this.deadCharacters = new Map<string, boolean>();
    this.hasStarted = false;
    this.initiatives = new Map<string, number>();
    this.sortedCharacterOrder = [];
    this.weaponAttack = 0;
    this.damage = 0;
  }

  rollInitiative(): void {
    if (this.hasStarted) {
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
    }
  }

  currentInitAttackRoll(targetCharacterName: string): void {
    let targetCharacter = this.characters.flatMap(function getAvailableCharacterSheet(v) {
      if (v.name == targetCharacterName) {
        return v;
      }
    });
    let hpTargetCharacter: number = 0;
    if (targetCharacter instanceof CharacterSheet) {
      hpTargetCharacter = targetCharacter.health;

      if (hpTargetCharacter > 0) {
        let playerAttacker = this.availableCharacter;
        //calculate attackFormula
        //this.weaponAttack=playerAttacker.inventory.r
      }
    }
  }

  useAttackItem(itemParam: string): void {
    //calculate weapon damage
    //hp opponent=hp-weapon damage
  }

  endTurnCommand(): void {}

  get availableCharacter(): CharacterSheet {
    let availableCharacter = this.sortedCharacterOrder[0];
    let targetPlayer = this.characters[0];
    for (let player of this.characters) {
      if (player.name === availableCharacter) {
        targetPlayer = player;
        break;
      }
    }
    return targetPlayer;
    //sau utilizand flatMap
  }

  getAvailableItems(playerParam: CharacterSheet): Item[] {
    let availableItem = [];
    for (let items of playerParam.inventory) {
      availableItem.push(items);
    }
    return availableItem;
  }
}
