import { CharacterClass } from '../Step1/character-class';
import { GameCharacter } from '../Step1/game-enums';
import { MockDiceClass1, MockDiceClass2, MockDiceClass3, MockDiceClass4 } from './dice-class.mock';

export const MockCharacterClass1: CharacterClass = {
  name: GameCharacter.Barbarian,
  class_level: 1,
  class_dice: MockDiceClass1,
};

export const MockCharacterClass2: CharacterClass = {
  name: GameCharacter.Fighter,
  class_level: 2,
  class_dice: MockDiceClass2,
};

export const MockCharacterClassCombat1: CharacterClass = {
  name: GameCharacter.Barbarian,
  class_level: 3,
  class_dice: MockDiceClass3,
};
export const MockCharacterClassCombat2: CharacterClass = {
  name: GameCharacter.Fighter,
  class_level: 4,
  class_dice: MockDiceClass4,
};
