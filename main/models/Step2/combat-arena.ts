import { ICombatArena } from './combat-arena.interface';
import { CharacterSheet } from '../Step1/character-sheet';
import { D20Dice } from '../Step1/dice-class';
import { Item } from '../Step1/item';
import { MockStats1 } from '../mock/stats.mocks';

import { MockItem1 } from '../mock/item.mocks';
import { MockCharacterClass1 } from '../mock/character-class.mock';
import { WeaponItem } from '../Step1/weapon-item';

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
    if (this.hasStarted) {
      const initiativesValues = [];
      for (let characterIndex = 0; characterIndex < this.characters.length; characterIndex++) {
        const characterInitiative = D20Dice.roll() + this.characters[characterIndex].stats.DEX;
        this.initiatives.set(this.characters[characterIndex].name, characterInitiative);
        initiativesValues.push(characterInitiative);
      }

      const initiativeEntries = Array.from(this.initiatives.entries());
      // sort it
      initiativeEntries.sort((a, b) => b[1] - a[1]);
      this.sortedCharacterOrder = initiativeEntries.map((value) => value[0]);

      // for (let orderedVal of initiativeEntries) {
      //   this.sortedCharacterOrder.push(orderedVal[0]);
      // }
      this.currentInitiativePosition = 0;
    }
  }

  useAttackRoll(targetCharacterName: string, itemName: string): boolean {
    const targetCharacter = this.characters.find((character) => character.name === targetCharacterName);
    if (!targetCharacter) {
      return false;
    }
    this.useAttackItem(itemName, targetCharacter);
  }

  private useAttackItem(itemName: string, targetCharacter: CharacterSheet): boolean {
    // double check is not inside deadCharacters
    if (targetCharacter.hp >= 0) {
      let playerAttacker = this.currentCharacter;
      let getItem = 0;

      // replace with find
      for (let item = 0; item < playerAttacker.inventory.length; item++) {
        if (playerAttacker.inventory[item].name == itemName) {
          getItem = item;
          break;
        }
      }

      // check if type is weapon item else return
      const itemType = playerAttacker.inventory[getItem] as WeaponItem;
      const weaponAttack = itemType.rollAttack(playerAttacker);

      let opponentArmorClass = targetCharacter.armorClass;

      if (weaponAttack > opponentArmorClass) {
        const damage = itemType.rollDamage();
        targetCharacter.hp = targetCharacter.hp - damage;
        this.deadCharacters.set(this.opponentPlayer.name, true);
        this.initiatives.delete(this.opponentPlayer.name);
      } else {
        console.log('Weapon Attack < opponent Armor Class: ' + weaponAttack + ' < ' + opponentArmorClass);
      }
    }
  }

  endTurnCommand(): void {
    // based on how many characters in combat use modulo
    this.currentInitiativePosition++;
  }

  get currentCharacter(): CharacterSheet {
    const availableCharacterName = this.sortedCharacterOrder[this.currentInitiativePosition];
    const targetCharacter = this.characters.find((character) => character.name === availableCharacterName);
    if (!targetCharacter) {
      return new CharacterSheet('ERROR - no name', 0, MockStats1, MockCharacterClass1, [MockItem1]);
    }
    return targetCharacter;
  }

  getAvailableItems(playerParam: CharacterSheet): Item[] {
    let availableItem = [];
    for (let items of playerParam.inventory) {
      availableItem.push(items);
    }
    return playerParam.inventory;
  }
}
