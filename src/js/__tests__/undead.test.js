// eslint-disable-next-line import/extensions
import Undead from '../Undead.js';

// eslint-disable-next-line no-undef
test('Undead check', () => {
  const recieved = new Undead('Cinco');
  // eslint-disable-next-line no-undef
  expect([
    recieved.health, recieved.attack, recieved.defense, recieved.type,
  ]).toEqual([
    100, 25, 25, 'Undead',
  ]);
});
