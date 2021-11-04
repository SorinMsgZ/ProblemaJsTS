import { CharacterSheet } from '../Step1/character-sheet';
import { Item } from '../Step1/item';

export interface ICombatArena {
  characters: CharacterSheet[];
  initiatives: Map<string, number>;
  hasStarted: boolean;
  deadCharacters: Map<string, boolean>;
  currentInitiativePosition: number;
  sortedCharacterOrder: string[];

  rollInitiative(): void;

  currentInitAttackRoll(targetCharacter: string): void;

  useAttackItem(itemParam: string): void;

  endTurnCommand(): void;

  get availableCharacter(): CharacterSheet;

  setOpponentCharacter(nameOpponent: string): void;

  /* //Command2
         useActionCommand(actionParam: string, opponent: string): void;
         //Command3
         useBonusAction(actionParam: string): void;*/
  getAvailableItems(playerParam: CharacterSheet): Item[];

  checkOpponentHealth(): boolean;
}
