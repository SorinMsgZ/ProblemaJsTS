import {
  MockCharacterClass1,
  MockCharacterClass2,
  MockCharacterClass3,
  MockCharacterClass4,
} from './models/mock/character-class.mock';
import { MockStats1, MockStats2, MockStats3, MockStats4, MockStats5 } from './models/mock/stats.mocks';
import { MockCharacterSheet1, MockCharacterSheet2 } from './models/mock/character-sheet.mocks';
import { MockItem1, MockItem2, MockItem3 } from './models/mock/item.mocks';
import { WeaponItem } from './models/weapon-item';
import { ArmorItem } from './models/armor-item';

/*
console.log(MockCharacterClass1);
console.log(MockCharacterClass2);
console.log(MockCharacterClass3);
console.log(MockCharacterClass4);

console.log(MockStats1);
console.log(MockStats2);
console.log(MockStats3);
console.log(MockStats4);
console.log(MockStats5);

console.log(MockItem1);
console.log(MockItem2);
console.log(MockItem3);

console.log(MockCharacterSheet1);
console.log(MockCharacterSheet2);
*/

if (MockCharacterSheet2.inventory[0].type === WeaponItem.TYPE_SELECTOR) {
  const itemType = MockCharacterSheet2.inventory[0] as WeaponItem;
  //console.log(itemType.rollAttack(MockCharacterSheet2));
  itemType.rollAttack(MockCharacterSheet2);
  //itemType.rollDamage(MockStats1);
} else {
  const itemType = MockCharacterSheet2.inventory[0] as ArmorItem;
  //itemType.calcFormulaAC(MockStats1);
}

//console.log((MockCharacterSheet2.inventory.itemType.calcFormulaAtack(MockCharacterSheet2));
