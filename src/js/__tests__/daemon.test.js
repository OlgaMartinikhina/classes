// eslint-disable-next-line import/extensions
import Daemon from '../Daemon.js';

// eslint-disable-next-line no-undef
test('Daemon  check', () => {
  const recieved = new Daemon('Cuatro');
  // eslint-disable-next-line no-undef
  expect([
    recieved.health, recieved.attack, recieved.defense, recieved.type,
  ]).toEqual([
    100, 10, 40, 'Daemon',
  ]);
});
