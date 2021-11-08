import { D20Dice } from '../Step1/dice-class';
import { MockCharacterSheetCombat1, MockCharacterSheetCombat2 } from '../mock/character-sheet.mocks';
import { CharacterSheet } from '../Step1/character-sheet';

export function startGame(): string {
  console.log('Server: Start combat?');
  return UserAnswer;
}

export const characterOneInitiative = D20Dice.roll() + MockCharacterSheetCombat1.stats.DEX;
export const characterTwoInitiative = D20Dice.roll() + MockCharacterSheetCombat2.stats.DEX;

export type CombatCharacters = [[CharacterSheet, number], [CharacterSheet, number]];
export const combatCharacters: CombatCharacters = [
  [MockCharacterSheetCombat1, characterOneInitiative],
  [MockCharacterSheetCombat2, characterTwoInitiative],
];

export function orderByCharInitiative(): CombatCharacters {
  var [first, second] = combatCharacters;
  let combatCharactersOrdered: CombatCharacters = combatCharacters;
  if (characterOneInitiative < characterTwoInitiative) {
    combatCharactersOrdered = [second, first];
  }
  return combatCharactersOrdered;
}

const [[char1, initiative1], [char2, initiative2]] = orderByCharInitiative();

function CombatTest() {
  while (char1.calcHealth() > 0 && char2.calcHealth() > 0) {}
}
