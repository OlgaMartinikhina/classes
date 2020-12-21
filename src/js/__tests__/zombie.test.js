// eslint-disable-next-line import/extensions
import Zombie from '../Zombie.js';

// eslint-disable-next-line no-undef
test('Zombie health', () => {
  const recieved = new Zombie('Seis');
  // eslint-disable-next-line no-undef
  expect([
    recieved.health, recieved.attack, recieved.defense, recieved.type,
  ]).toEqual([
    100, 40, 10, 'Zombie',
  ]);
});
