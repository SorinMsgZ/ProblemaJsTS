import { CharacterSheet } from '../Step1/character-sheet';

export interface ICombatArena {
  characters: CharacterSheet[];
  initiatives: Map<string, number>; //character name=>initiative value
  hasStarted: boolean;
  deadCharacters: Map<string, boolean>;
  currentInitiativePosition: number; //turn value?! sau initial a cui e valoarea de "character initiative" mai mare
  sortedCharacterOrder: string[];

  rollInitiative(): void;

  //ask for choosing command1/2/3

  //according currentInitiativePosition & if hasStarted=true
  //coincide cu useActionCommand??!
  //get enemy HP =>is the enemy dead?=>set deadCharacters
  currentInitAttackRoll(targetCharacter: string): void; //numele caracterului)=> scade HP ul ..
  useAtackItem(itemParam: string): void;

  //Command1
  //set currentInitiativePosition
  endTurnCommand(): void;
  /* //Command2
   useActionCommand(actionParam: string, opponent: string): void;
   //Command3
   useBonusAction(actionParam: string): void;*/
}
