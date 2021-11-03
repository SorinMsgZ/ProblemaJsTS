import { Item } from '../Step1/item';
import { WeaponItem } from '../Step1/weapon-item';
import { ArmorItem } from '../Step1/armor-item';
import { MockStats1, MockStats2, MockStats3, MockStatsCombat1, MockStatsCombat2 } from './stats.mocks';
export const MockItem1: Item = new ArmorItem('Scut', 1, MockStats1);

export const MockItem2: Item = new WeaponItem('Ax', 2, MockStats2);

export const MockItem3: Item = new WeaponItem('Arrow', 3, MockStats3);

export const MockItemCombat1: Item = new WeaponItem('Arrow', 13, MockStatsCombat1);
export const MockItemCombat2: Item = new ArmorItem('Scut', 12, MockStatsCombat2);
