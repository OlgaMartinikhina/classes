// eslint-disable-next-line import/extensions
import Character from './Character.js';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args, 'Bowman');
    this.attack = 25;
    this.defense = 25;
  }
}
