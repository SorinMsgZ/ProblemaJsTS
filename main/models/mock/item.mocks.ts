import { Item } from '../Step1/item';
import { WeaponItem } from '../Step1/weapon-item';
import { ArmorItem } from '../Step1/armor-item';
export const MockItem1: Item = new ArmorItem('Scut');

export const MockItem2: Item = new WeaponItem('Ax');

export const MockItem3: Item = new WeaponItem('Arrow');

export const MockItemCombat1: Item = new WeaponItem('Arrow');
export const MockItemCombat2: Item = new ArmorItem('Scut');
