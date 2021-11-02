import { CharacterSheet } from '../character-sheet';
import { MockStats1, MockStats2 } from './stats.mocks';
import { MockCharacterClass1, MockCharacterClass2 } from './character-class.mock';
import { MockItem1, MockItem2 } from './item.mocks';

export const MockCharacterSheet1: CharacterSheet = new CharacterSheet('Ghita', 1, MockStats1, MockCharacterClass1, [
  MockItem1,
]);

export const MockCharacterSheet2: CharacterSheet = new CharacterSheet('Elena', 1, MockStats2, MockCharacterClass2, [
  MockItem2,
]);
