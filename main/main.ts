import {
  MockCharacterClass1,
  MockCharacterClass2,
  MockCharacterClassCombat1,
  MockCharacterClassCombat2,
} from './models/mock/character-class.mock';
import {
  MockStats1,
  MockStats2,
  MockStats3,
  MockStats4,
  MockStats5,
  MockStatsCombat1,
  MockStatsCombat2,
} from './models/mock/stats.mocks';
import {
  MockCharacterSheet1,
  MockCharacterSheet2,
  MockCharacterSheetCombat1,
  MockCharacterSheetCombat2,
} from './models/mock/character-sheet.mocks';
import { MockItem1, MockItem2, MockItem3, MockItemCombat1, MockItemCombat2 } from './models/mock/item.mocks';
import { WeaponItem } from './models/Step1/weapon-item';
import { ArmorItem } from './models/Step1/armor-item';
import { combatCharacters, orderByCharInitiative } from './models/Step2/combat';

//Step1
/*

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


if (MockCharacterSheet2.inventory[0].type === WeaponItem.TYPE_SELECTOR) {
  const itemType = MockCharacterSheet2.inventory[0] as WeaponItem;
  console.log(itemType.rollAttack(MockCharacterSheet2));
  console.log(itemType.rollDamage(MockStats1));
  //itemType.rollAttack(MockCharacterSheet2);
  //itemType.rollDamage(MockStats1);
} else {
  const itemType = MockCharacterSheet1.inventory[0] as ArmorItem;
  console.log(itemType.calcFormulaAC(MockStats1));
}
*/
//console.log((MockCharacterSheet2.inventory.itemType.calcFormulaAtack(MockCharacterSheet2));

// Step2 Combat

/*console.log(MockStatsCombat1);
console.log(MockStatsCombat2);

console.log(MockCharacterClassCombat1);
console.log(MockCharacterClassCombat2);

console.log(MockItemCombat1);
console.log(MockItemCombat2);

console.log(MockCharacterSheetCombat1);
console.log(MockCharacterSheetCombat2);
*/
console.log(combatCharacters);
console.log(orderByCharInitiative());
