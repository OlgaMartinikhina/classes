// eslint-disable-next-line import/extensions
import Character from './Character.js';

export default class Zombie extends Character {
  constructor(...args) {
    super(...args, 'Zombie');
    this.attack = 40;
    this.defense = 10;
  }
}
