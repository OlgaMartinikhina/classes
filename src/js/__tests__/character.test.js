// eslint-disable-next-line import/extensions
import Character from '../Character.js';

// eslint-disable-next-line no-undef
test('check name N (менее 2 символов)', () => {
  // eslint-disable-next-line no-undef
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('N', 'Magician');
  }).toThrowError('Имя должно содержать от 2-х до 10-ти символов');
});

// eslint-disable-next-line no-undef
test('Check name Namenamename (более 10 символов)', () => {
  // eslint-disable-next-line no-undef
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Namenamename', 'Magician');
  }).toThrowError('Имя должно содержать от 2-х до 10-ти символов');
});

// eslint-disable-next-line no-undef
test('check wrong type', () => {
  // eslint-disable-next-line no-undef
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Name', 'Newcharacter');
  }).toThrowError('Неверный тип');
});

// eslint-disable-next-line no-undef
test('Check LevelUp with health 0', () => {
  const result = new Character('Name', 'Magician', 0);
  // eslint-disable-next-line no-undef
  expect(() => {
    result.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});
