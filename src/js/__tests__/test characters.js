import { Character } from '../classes/characters';

test('Character name Throw', () => {
  const characters = new Character('Laskjdgfakhsdgoagfhbaspidgfhiadsv', 'Daemon');
  const err = new Error('Длинна имени не может быть более и 10 и менне 2 символов');
  expect(characters.name).toBe(err);
});
