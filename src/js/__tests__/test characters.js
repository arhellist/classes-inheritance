import { Character } from '../classes/characters';

test('Character name Throw name', () => {
  expect(() => {
    const characters = new Character('Laskjdgfakhsdgoagfhbaspidgfhiadsv', 'Daemon');
  }).toThrow();
});

test('Character name Throw name', () => {
  expect(() => {
    const characters = new Character('Lask', 'AAA');
  }).toThrow();
});
