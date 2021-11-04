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
  weaponAttack: number;
  damage: number;

  opponentPlayer: CharacterSheet;
  attackHit: boolean;

  constructor(characters: CharacterSheet[]) {
    this.characters = characters;
    this.currentInitiativePosition = 0;
    this.deadCharacters = new Map<string, boolean>();
    this.hasStarted = false;
    this.initiatives = new Map<string, number>();
    this.sortedCharacterOrder = [];
    this.weaponAttack = 0;
    this.damage = 0;

    this.opponentPlayer = new CharacterSheet('no name', 0, MockStats1, MockCharacterClass1, [MockItem1]);
    this.attackHit = false;
  }

  rollInitiative(): void {
    let initiativesValues = [];

    if (this.hasStarted) {
      for (let characterIndex = 0; characterIndex < this.characters.length; characterIndex++) {
        const characterInitiative = D20Dice.roll() + this.characters[characterIndex].stats.DEX;
        this.initiatives.set(this.characters[characterIndex].name, characterInitiative);
        initiativesValues.push(characterInitiative);
      }

      const initiativeEntries = Array.from(this.initiatives.entries());
      // sort it
      initiativeEntries.sort((a, b) => b[1] - a[1]);

      for (let orderedVal of initiativeEntries) {
        this.sortedCharacterOrder.push(orderedVal[0]);
      }
    }
    this.currentInitiativePosition = 0;
  }

  currentInitAttackRoll(targetCharacterName: string): void {
    let targetCharacter = this.characters.find((character) => character.name === targetCharacterName);
    if (!targetCharacter) {
      return;
    }
  }

  useAttackItem(itemParam: string): void {
    if (this.checkOpponentHealth()) {
      let playerAttacker = this.availableCharacter;
      let getItem = 0;
      for (let item = 0; item < playerAttacker.inventory.length; item++) {
        if (playerAttacker.inventory[item].name == itemParam) {
          getItem = item;
          break;
        }
      }

      const itemType = playerAttacker.inventory[getItem] as WeaponItem;
      this.weaponAttack = itemType.rollAttack(playerAttacker);

      let opponentArmorClass = this.opponentPlayer.armorClass;

      if (this.weaponAttack > opponentArmorClass) {
        this.attackHit = true;

        this.damage = itemType.rollDamage();

        this.opponentPlayer.hp = this.opponentPlayer.hp - this.damage;
      } else {
        console.log('Weapon Attack < opponent Armor Class: ' + this.weaponAttack + ' < ' + opponentArmorClass);
      }
    }
    if (!this.checkOpponentHealth()) {
      this.deadCharacters.set(this.opponentPlayer.name, true);
      this.initiatives.delete(this.opponentPlayer.name);
    }
  }

  endTurnCommand(): void {
    this.currentInitiativePosition++;
  }

  get availableCharacter(): CharacterSheet {
    let availableCharacter = this.sortedCharacterOrder[this.currentInitiativePosition];
    /*let targetPlayer = this.characters[this.currentInitiativePosition];
                        for (let player of this.characters) {
                          if (player.name === availableCharacter) {
                            targetPlayer = player;
                            break;
                          }
                        }
                        return targetPlayer;*/
    //sau utilizand flatMap
    let targetCharacter = this.characters.find((character) => character.name === availableCharacter);
    if (!targetCharacter) {
      return new CharacterSheet('ERROR - no name', 0, MockStats1, MockCharacterClass1, [MockItem1]);
    }
    return targetCharacter;
  }

  setOpponentCharacter(nameOpponent: string): void {
    let targetCharacter = this.characters.find((character) => character.name === nameOpponent);
    if (!targetCharacter) {
      this.opponentPlayer = new CharacterSheet('ERROR - no name', 0, MockStats1, MockCharacterClass1, [MockItem1]);
    } else {
      this.opponentPlayer = targetCharacter;
    }
  }

  getAvailableItems(playerParam: CharacterSheet): Item[] {
    let availableItem = [];
    for (let items of playerParam.inventory) {
      availableItem.push(items);
    }
    return availableItem;
  }

  checkOpponentHealth(): boolean {
    if (this.opponentPlayer.hp > 0) {
      return true;
    } else return false;
  }
}
