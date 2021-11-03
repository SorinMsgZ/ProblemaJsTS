export enum DiceClassType {
  D6 = 6,
  D8 = 8,
  D10 = 10,
  D12 = 12,
  D20 = 20,
}

export class DiceClass {
  type: DiceClassType;

  constructor(type: DiceClassType) {
    this.type = type;
  }

  roll(): number {
    //return (int) ((Math.random()*(max-min))+min);
    return Math.floor(Math.random() * this.type) + 1;
  }
}
export const D20Dice = new DiceClass(DiceClassType.D20);
export const D6Dice = new DiceClass(DiceClassType.D6);
