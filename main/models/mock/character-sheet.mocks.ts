import { CharacterSheet } from '../Step1/character-sheet';
import { MockStats1, MockStats2, MockStatsCombat1, MockStatsCombat2 } from './stats.mocks';
import {
  MockCharacterClass1,
  MockCharacterClass2,
  MockCharacterClassCombat1,
  MockCharacterClassCombat2,
} from './character-class.mock';
import { MockItem1, MockItem2, MockItemCombat1, MockItemCombat2 } from './item.mocks';

export const MockCharacterSheet1: CharacterSheet = new CharacterSheet('Ghita', 1, MockStats1, MockCharacterClass1, [
  MockItem1,
  MockItem2,
]);

export const MockCharacterSheet2: CharacterSheet = new CharacterSheet('Elena', 1, MockStats2, MockCharacterClass2, [
  MockItem1,
  MockItem2,
]);

export const MockCharacterSheetCombat1: CharacterSheet = new CharacterSheet(
  'Dekebalus',
  1,
  MockStatsCombat1,
  MockCharacterClassCombat1,
  [MockItemCombat1, MockItemCombat2]
);
export const MockCharacterSheetCombat2: CharacterSheet = new CharacterSheet(
  'Constantine',
  1,
  MockStatsCombat2,
  MockCharacterClassCombat2,
  [MockItemCombat1, MockItemCombat2]
);
