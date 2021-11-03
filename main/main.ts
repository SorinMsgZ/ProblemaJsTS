import { ServerReferee } from './models/Step2/server-referee';
import { D20Dice } from './models/Step1/dice-class';
import { MockCharacterSheetCombat1, MockCharacterSheetCombat2 } from './models/mock/character-sheet.mocks';
import { CombatArena } from './models/Step2/combat-arena';
import { ICombatArena } from './models/Step2/combat-arena.interface';

//Step1
/*

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

let fight = new CombatArena([MockCharacterSheetCombat1, MockCharacterSheetCombat2]);

console.log('Start combat?');
//answer yes/no => if "yes"=>
//set  hasStarted
fight.hasStarted = true;
// roll => set initiatives &
// order by  character initiative => set sortedCharacterOrder
//set currentInitiativePosition
console.log('Roll initiative');
fight.rollInitiative();

//console.log(Array.from(fight.initiatives.entries()));

for (let orderedCharacters of fight.sortedCharacterOrder) {
  console.log(orderedCharacters + ', ' + fight.initiatives.get(orderedCharacters));
}
//console.log(fight.sortedCharacterOrder);
