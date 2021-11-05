import { ICombatArena } from './combat-arena.interface';
import { CharacterSheet } from '../Step1/character-sheet';
import { D20Dice } from '../Step1/dice-class';
import { Item } from '../Step1/item';
import { MockStats1 } from '../mock/stats.mocks';

import { MockItem1 } from '../mock/item.mocks';
import { MockCharacterClass1 } from '../mock/character-class.mock';
import { WeaponItem } from '../Step1/weapon-item';
import { ArmorItem } from '../Step1/armor-item';

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
      initiativeEntries.sort((a, b) => b[1] - a[1]);
      this.sortedCharacterOrder = initiativeEntries.map((value) => value[0]);
      this.currentInitiativePosition = 0;
    }
  }

  useAttackRoll(targetCharacterName: string, itemName: string): boolean {
    const targetCharacter = this.characters.find((character) => character.name === targetCharacterName);
    if (!targetCharacter) {
      return false;
    }
    return this.useAttackItem(itemName, targetCharacter);
  }

  private useAttackItem(itemName: string, targetCharacter: CharacterSheet): boolean {
    let isHitted: boolean = false;
    // double check is not inside deadCharacters-DONE
    if (targetCharacter.hp > 0 && !this.deadCharacters.get(targetCharacter.name)) {
      let playerAttacker = this.currentCharacter;
      //let getItem:Item ;

      // replace with find -DONE
      const getItem = playerAttacker.inventory.find((item) => item.name === itemName);
      /* for (let item = 0; item < playerAttacker.inventory.length; item++) {
               if (playerAttacker.inventory[item].name == itemName) {
                 getItem = item;
                 break;
               }
             }*/
      if (!getItem) {
        return false;
      }
      // check if type is weapon item else return -DONE
      if (getItem.type === WeaponItem.TYPE_SELECTOR) {
        const itemType = getItem as WeaponItem;
        const weaponAttack = itemType.rollAttack(playerAttacker);

        let opponentArmorClass = targetCharacter.armorClass;

        if (weaponAttack > opponentArmorClass) {
          isHitted = true;
          const damage = itemType.rollDamage();
          targetCharacter.hp = targetCharacter.hp - damage;

          if (targetCharacter.hp <= 0) {
            this.deadCharacters.set(targetCharacter.name, true);
            this.initiatives.delete(targetCharacter.name);
          }
        } else {
          isHitted = false;
        }
      } else {
      }
    }
    return isHitted;
  }

  endTurnCommand(): void {
    // based on how many characters in combat use modulo: (currentPos)%no_of_ch => merge circular - DONE
    if (this.currentInitiativePosition % this.initiatives.size != 0) {
      this.currentInitiativePosition++;
    } else {
      this.currentInitiativePosition = 0;
    }
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
