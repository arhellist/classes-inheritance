import Swordsman from '../classes/swordsman';

test('caracter Swordsman health', () => {
  const swordsman = new Swordsman('Legalas', 'Swordsman');
  expect(swordsman.health).toBe(100);
});

test('caracter Swordsman level', () => {
  const swordsman = new Swordsman('Legalas', 'Swordsman');
  expect(swordsman.level).toBe(1);
});

test('caracter Swordsman attack', () => {
  const swordsman = new Swordsman('Legalas', 'Swordsman');
  expect(swordsman.attack).toBe(40);
});

test('caracter Swordsman defence', () => {
  const swordsman = new Swordsman('Legalas', 'Swordsman');
  expect(swordsman.defence).toBe(10);
});
