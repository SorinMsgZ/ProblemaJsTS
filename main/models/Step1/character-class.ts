import { GameCharacter } from './game-enums';
import { DiceClass } from './dice-class';

export interface CharacterClass {
  name: GameCharacter;
  class_level: number;
  class_dice: DiceClass;
}
