// eslint-disable-next-line import/extensions
import Bowman from '../Bowerman.js';

// eslint-disable-next-line no-undef
test('Bowman check', () => {
  const recieved = new Bowman('One');
  // eslint-disable-next-line no-undef
  expect([
    recieved.health, recieved.attack, recieved.defense, recieved.type,
  ]).toEqual([
    100, 25, 25, 'Bowman',
  ]);
});
