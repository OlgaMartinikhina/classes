// eslint-disable-next-line import/extensions
import Character from './Character.js';

export default class Swordsman extends Character {
  constructor(...args) {
    super(...args, 'Swordsman');
    this.attack = 40;
    this.defense = 10;
  }
}
