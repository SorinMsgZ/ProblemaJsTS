import { ServerReferee } from './models/Step2/server-referee';
import { D20Dice } from './models/Step1/dice-class';
import { MockCharacterSheetCombat1, MockCharacterSheetCombat2 } from './models/mock/character-sheet.mocks';
import { CombatArena } from './models/Step2/combat-arena';
import { ICombatArena } from './models/Step2/combat-arena.interface';
import { WeaponItem } from './models/Step1/weapon-item';
import { CharacterSheet } from './models/Step1/character-sheet';

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

console.log('Server: Start combat?');
//Client:  yes/no => if "yes"=>
console.log('Client: Yes');
let startAnswer = 'Yes';
//set  hasStarted
if (startAnswer === 'Yes') {
  fight.hasStarted = true;
}
//console.log('Initial players on the arena: ' + Array.from(fight.characters.entries()));
for (let player = 0; player < fight.characters.length; player++) {
  console.log('Initial players on the arena:');
  if (fight.characters[player]) {
    console.log('Player ' + player + ' : ' + fight.characters[player].name);
  }
}
console.log('Server: Roll initiative');
fight.rollInitiative();
console.log('Ordered players by Initiatives: ');
for (let orderedCharacters of fight.sortedCharacterOrder) {
  console.log(orderedCharacters + ', ' + fight.initiatives.get(orderedCharacters));
}
let turn = 0;

function battleToEndOfGame(): boolean {
  if (fight.initiatives.size > 1) {
    turn++;
    console.log('Available players on the arena: ' + Array.from(fight.initiatives.entries()));
    letsCombat();
    return false;
  } else {
    console.log('Player left: ' + Array.from(fight.initiatives.entries()));
    console.log('Dead players:: ' + Array.from(fight.deadCharacters.entries()));
    console.log('One player left=> End of fight');
    return true;
  }
}

letsCombat();

function letsCombat() {
  console.log('>>>>>Server: Turn ' + turn);

  let attackerPlayer = fight.currentCharacter;

  console.log('Server: Available Character: ' + attackerPlayer.name);
  console.log(
    'Server:Available commands: ["End Turn", "Use Action (action_name | target_name)" ,"Use Bonus_Action" (action_name)"]'
  );
  console.log('Client: Use Action Attack Dekebalus');
  let answer = 'Use Action';
  switch (answer) {
    case 'Use Bonus': {
      break;
    }
    case 'Use Action': {
      let opponentPlayer = 'Dekebalus';
      let availableItems = fight
        .getAvailableItems(attackerPlayer)
        .map((item) => item.name)
        .toString();
      // for (let itemIndex = 0; itemIndex < fight.getAvailableItems(attackerPlayer).length; itemIndex++) {
      //   availableItems = availableItems + fight.getAvailableItems(attackerPlayer)[item].name + '; ';
      // }
      console.log(
        'Server: Select Items to Attack with. Awailable Items: [' +
          availableItems +
          ']. Available' +
          ' Commands:["Use' +
          ' (item_name)"]'
      );

      //Client: Use "Arrow"
      //if type of ("Arrow") =>
      let itemType = 'Arrow';
      console.log('Server: Using ' + itemType + '. Rolling Attack.');
      console.log(opponentPlayer);
      const isHit: boolean = fight.useAttackRoll(opponentPlayer, itemType);
      console.log('Rolled with selected weapon');
      if (isHit) {
        console.log('Server: ' + opponentPlayer + '. Target Hit. Rolling Damage');
        console.log('Rolled damage');
      } else {
        console.log('Target missed!!!!!!');
      }

      if (fight.deadCharacters.get(opponentPlayer)) {
        console.log(opponentPlayer + ' is DEAD (has HP<=0) !!!');
      }
      battleToEndOfGame();
      break;
    }
    case 'End Turn': {
      fight.endTurnCommand();
      battleToEndOfGame();
      break;
    }
    default: {
      break;
    }
  }
}
