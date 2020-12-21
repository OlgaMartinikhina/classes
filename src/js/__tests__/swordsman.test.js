// eslint-disable-next-line import/extensions
import Swordsman from '../Swordsman.js';

// eslint-disable-next-line no-undef
test('Swordsman check', () => {
  const recieved = new Swordsman('Dos');
  // eslint-disable-next-line no-undef
  expect([
    recieved.health, recieved.attack, recieved.defense, recieved.type,
  ]).toEqual([
    100, 40, 10, 'Swordsman',
  ]);
});
