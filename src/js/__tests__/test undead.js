import Undead from '../classes/undead';

test('caracter Undead health', () => {
  const undead = new Undead('Legalas', 'Undead');
  expect(undead.health).toBe(100);
});

test('caracter Undead level', () => {
  const undead = new Undead('Legalas', 'Undead');
  expect(undead.level).toBe(1);
});

test('caracter Undead attack', () => {
  const undead = new Undead('Legalas', 'Undead');
  expect(undead.attack).toBe(25);
});

test('caracter Undead defence', () => {
  const undead = new Undead('Legalas', 'Undead');
  expect(undead.defence).toBe(25);
});
