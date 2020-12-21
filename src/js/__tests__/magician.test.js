// eslint-disable-next-line import/extensions
import Magician from '../Magician.js';

// eslint-disable-next-line no-undef
test('Magician check', () => {
  const recieved = new Magician('Tres');
  // eslint-disable-next-line no-undef
  expect([
    recieved.health, recieved.attack, recieved.defense, recieved.type,
  ]).toEqual([
    100, 10, 40, 'Magician',
  ]);
});
